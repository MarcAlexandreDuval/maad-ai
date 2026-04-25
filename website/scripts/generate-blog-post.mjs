#!/usr/bin/env node
/**
 * Robot Blog Auto - Generates one weekly blog post for maad-ai.com
 *
 * Triggered by GitHub Actions cron (weekly Monday 9am EDT).
 *
 * Flow:
 *  1. Read scripts/blog-topics.json — pick first unpublished topic
 *  2. Read lib/blog.ts — extract existing slugs (avoid duplication)
 *  3. Call Claude API (Sonnet) with rich prompt + topic + brand voice + format spec
 *  4. Parse JSON output, validate against Section schema
 *  5. Quality checks (word count, slug unique, first p bold, etc.)
 *  6. Insert TypeScript-formatted Post object at top of POSTS array in lib/blog.ts
 *  7. Mark topic as published in scripts/blog-topics.json
 *
 * Files written: lib/blog.ts, scripts/blog-topics.json
 * Files NOT written: nothing else. Atomic commit handled by workflow.
 *
 * Env required: ANTHROPIC_API_KEY
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// --- Config ---
const ROOT = resolve(process.cwd());
const TOPICS_FILE = resolve(ROOT, "scripts/blog-topics.json");
const BLOG_FILE = resolve(ROOT, "lib/blog.ts");
const MIN_WORDS = 1200;
const MAX_WORDS = 2200;
const TARGET_WORDS = 1750;
const MODEL = "claude-sonnet-4-5-20250929"; // adjust to current Sonnet
const MAX_TOKENS = 8000;

// --- Setup ---
if (!process.env.ANTHROPIC_API_KEY) {
  console.error("✖ ANTHROPIC_API_KEY missing in env");
  process.exit(1);
}
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// --- Step 1: Load topics, pick next unpublished ---
const topicsRaw = readFileSync(TOPICS_FILE, "utf8");
const topicsData = JSON.parse(topicsRaw);
const nextTopic = topicsData.topics.find((t) => !t.published);

if (!nextTopic) {
  console.error("✖ No unpublished topics in queue. Add more topics or move to V2 (LLM-generated topics).");
  process.exit(1);
}

console.log(`→ Topic chosen: [${nextTopic.id}] ${nextTopic.title}`);

// --- Step 2: Read existing blog.ts, extract slugs ---
const blogRaw = readFileSync(BLOG_FILE, "utf8");
const existingSlugs = [...blogRaw.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
console.log(`→ ${existingSlugs.length} articles already published.`);

// --- Step 3: Build prompt + call Claude ---
const todayISO = new Date().toISOString().split("T")[0];

const systemPrompt = `Tu es Marc-Alexandre Duval, fondateur de MAAD-AI — agence d'intelligence artificielle et de visibilité web pour PME du Québec.

Tu rédiges un article de blog pour ton site maad-ai.com. Ton mandat : produire UN article RICHE EN STRUCTURE, OPTIMISÉ SEO/AEO, avec des BACKLINKS INTERNES vers tes pages de services pour booster le maillage interne et faire convertir.

# Voice et style (NON NÉGOCIABLE)
- Français québécois, tutoiement systématique ("ta PME", "tes clients", "tu", "ton")
- Direct, zéro blabla, zéro fluff marketing
- Phrases courtes. Idées claires. Aucun adjectif vague.
- Données chiffrées partout où c'est possible (ex: "65 %", "8.3×", "2 à 5 heures")
- Pas d'anglicismes inutiles (ex: "courriel" pas "email", "fins de semaine" pas "weekends", "flux de travail" pas "workflows" SAUF si terme tech consacré)
- Tout en français — sauf les noms de produits/services ("ChatGPT", "Google", "Perplexity", "Claude", "Gemini", "Schema.org")
- Encourageant mais honnête (jamais yes-man, jamais alarmiste)
- Premier paragraphe = "dek" = réponse citation-ready de 50-80 mots, bold:true

# 🎯 BACKLINKS INTERNES — CRITIQUE POUR SEO/AEO
Tu DOIS intégrer **au moins 4 backlinks internes** dans le corps des paragraphes en utilisant la syntaxe Markdown : \`[texte d'ancre](/services/nom-service)\`.

Exemples de phrasing avec backlink :
- "Pour automatiser tout ça, on construit des [agents IA sur mesure](/services/agents-ia) qui s'occupent du processus complet."
- "Notre offre [AEO](/services/aeo) traite exactement ce problème — on optimise ton contenu pour les moteurs de réponse."
- "Si tu veux qu'on s'en occupe, [contacte-nous](/contact) pour une discussion de 20 min."

Ces liens vont devenir cliquables sur le site (le renderer parse la syntaxe Markdown). Ils doivent paraître naturels, pas forcés.

# 📋 STRUCTURE OBLIGATOIRE — RICHE ET VARIÉE
1. **Premier élément** = paragraphe bold (le "dek" — citation-ready, 50-80 mots, répond directement à la question du titre)
2. **Paragraphe d'intro** contextualisé (post-dek)
3. **Au moins 6 sections H2** (max 8)
4. **Au moins 2 tableaux** (kind: "table") — comparaisons, classifications, mappings
5. **Au moins 1 stats block** (kind: "stats") — 3-4 chiffres clés avec gros affichage
6. **Au moins 1 liste numérotée** (kind: "ol") — étapes, méthode
7. **Au moins 1 liste à puces** (kind: "ul") — exemples, checklist
8. **1 section CTA** (kind: "cta") AVANT le callout final — pousse vers /contact ou un service
9. **Callout final** = takeaway en 1-2 phrases (avec backlink Markdown si pertinent)

# Longueur cible
- ${MIN_WORDS} à ${MAX_WORDS} mots total (cible : ${TARGET_WORDS} mots)

# Catégories valides
"AEO/GEO" | "IA" | "SEO" | "Web Design"

# Schema strict (JSON)
{
  "slug": "url-friendly-slug-en-minuscules-avec-tirets",
  "category": "...",
  "title": "...",
  "excerpt": "100-150 caractères max — une phrase qui donne envie de lire",
  "dek": "réponse directe 50-80 mots — sera dans le premier paragraphe bold",
  "readTime": "X min",
  "related": ["/services/...", "..."],
  "content": [...]
}

# 🧱 Types Section autorisés (UTILISE LA VARIÉTÉ)
- {"kind": "p", "text": "...", "bold": true|false (optional)} — markdown links OK : [label](/path)
- {"kind": "h2", "text": "..."} — section principale
- {"kind": "h3", "text": "..."} — sous-section dans une H2
- {"kind": "ul", "items": ["...", "..."]} — items, exemples
- {"kind": "ol", "items": [{"t": "Titre court", "d": "Description"}, ...]} — étapes numérotées
- {"kind": "table", "headers": ["...", "..."], "rows": [["...", "..."]]} — comparaisons, mappings
- {"kind": "callout", "text": "..."} — encadré accent emerald, pour mise en valeur
- {"kind": "stats", "items": [{"value": "65 %", "label": "des recherches sont zero-click"}, ...]} — block 3-4 chiffres
- {"kind": "compare", "left": {"title": "Avant", "items": ["...", "..."]}, "right": {"title": "Après", "items": ["...", "..."]}} — 2 colonnes
- {"kind": "quote", "text": "...", "author": "..."} — citation impactante
- {"kind": "cta", "title": "Tu veux qu'on s'en occupe ?", "text": "On bâtit ce genre de stratégie pour des PME francophones tous les jours.", "cta_label": "Parlons-en", "cta_href": "/contact"} — call-to-action

# 📌 EXIGENCES SPÉCIFIQUES POUR SEO/AEO
- **Premier paragraphe (dek)** : doit répondre à la question du titre en 50-80 mots, citation-ready, structuré pour featured snippets / AI Overviews
- **H2 = questions naturelles** que tes prospects taperaient (ex: "Pourquoi l'AEO devient critique en 2026" mieux que "Importance de l'AEO")
- **Stats block** = 3-4 chiffres précis avec source si possible — données vérifiables que les LLMs adorent citer
- **CTA inline** = pousse vers une page service précise OU /contact
- **Backlinks** = au moins 4 dans le corps via Markdown [texte](/services/...), pour booster ton maillage interne SEO

# Slugs déjà publiés (NE PAS réutiliser ni couvrir le MÊME sujet — prends un angle franchement différent si proche)
${existingSlugs.map((s) => `- ${s}`).join("\n")}

# Pages internes pour backlinks (utilise CES paths exclusivement)
- /services/intelligence-artificielle
- /services/agents-ia
- /services/automatisation
- /services/chatbot-ia
- /services/visibilite-web
- /services/seo
- /services/seo-local
- /services/aeo
- /services/geo
- /services/conception-web
- /industries/b2b
- /industries/saas
- /industries/e-commerce
- /industries/startup
- /faq
- /a-propos
- /contact
- /blog/[slug-existant-de-la-liste-ci-dessus]

# Sortie
Retourne UNIQUEMENT le JSON de l'article, rien d'autre. Pas de markdown wrapper, pas de \`\`\`json, pas de commentaires, pas de préambule.`;

const userPrompt = `Génère l'article suivant :

**Titre suggéré :** ${nextTopic.title}
**Catégorie :** ${nextTopic.category}
**Mots-clés cibles :** ${nextTopic.keywords.join(", ")}
**Angle suggéré :** ${nextTopic.angle}
**Articles "related" suggérés :** ${nextTopic.related.join(", ")}

Rappel : retourne UNIQUEMENT le JSON valide. Le slug doit être unique (vérifie la liste des slugs existants ci-dessus).`;

console.log("→ Calling Claude API...");
const response = await client.messages.create({
  model: MODEL,
  max_tokens: MAX_TOKENS,
  system: systemPrompt,
  messages: [{ role: "user", content: userPrompt }],
});

const textContent = response.content.find((c) => c.type === "text")?.text;
if (!textContent) {
  console.error("✖ No text content in Claude response");
  process.exit(1);
}

// --- Step 4: Parse + validate JSON ---
let post;
try {
  // Strip potential code fences just in case
  const cleaned = textContent
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
  post = JSON.parse(cleaned);
} catch (e) {
  console.error("✖ Failed to parse JSON from Claude:", e.message);
  console.error("--- Raw response ---");
  console.error(textContent);
  process.exit(1);
}

// Validation
const errors = [];
const requiredFields = ["slug", "category", "title", "excerpt", "dek", "readTime", "related", "content"];
for (const f of requiredFields) {
  if (!post[f]) errors.push(`Missing field: ${f}`);
}
if (post.slug && existingSlugs.includes(post.slug)) {
  errors.push(`Slug "${post.slug}" already exists`);
}
if (post.slug && !/^[a-z0-9-]+$/.test(post.slug)) {
  errors.push(`Slug "${post.slug}" contains invalid characters (a-z, 0-9, hyphens only)`);
}
if (!["AEO/GEO", "IA", "SEO", "Web Design"].includes(post.category)) {
  errors.push(`Invalid category: ${post.category}`);
}
if (!Array.isArray(post.content) || post.content.length < 6) {
  errors.push(`Content array too short (need at least 6 sections)`);
}
if (post.content?.[0]?.kind !== "p" || post.content?.[0]?.bold !== true) {
  errors.push(`First content element must be {kind:"p", bold:true, text:...}`);
}

// Word count
const wordCount = countWords(post);
if (wordCount < MIN_WORDS) errors.push(`Too short: ${wordCount} words (min ${MIN_WORDS})`);
if (wordCount > MAX_WORDS) errors.push(`Too long: ${wordCount} words (max ${MAX_WORDS})`);

// Validate all section kinds are recognized
const VALID_KINDS = ["h2", "h3", "p", "ul", "ol", "table", "callout", "stats", "compare", "quote", "cta"];
const kinds = post.content?.map((c) => c.kind) || [];
const invalidKinds = kinds.filter((k) => !VALID_KINDS.includes(k));
if (invalidKinds.length > 0) {
  errors.push(`Invalid section kinds: ${[...new Set(invalidKinds)].join(", ")}`);
}

// Required section counts
const h2Count = kinds.filter((k) => k === "h2").length;
const tableCount = kinds.filter((k) => k === "table").length;
const statsCount = kinds.filter((k) => k === "stats").length;
const ctaCount = kinds.filter((k) => k === "cta").length;
const calloutCount = kinds.filter((k) => k === "callout").length;
if (h2Count < 6) errors.push(`Need at least 6 H2 sections (got ${h2Count})`);
if (tableCount < 2) errors.push(`Need at least 2 tables (got ${tableCount})`);
if (statsCount < 1) errors.push(`Need at least 1 stats block (got ${statsCount})`);
if (ctaCount < 1) errors.push(`Need at least 1 cta block (got ${ctaCount})`);
if (calloutCount < 1) errors.push(`Need at least 1 callout (got ${calloutCount})`);
if (!kinds.includes("ol")) errors.push(`Missing ol (numbered list)`);
if (!kinds.includes("ul")) errors.push(`Missing ul (bullet list)`);

// Internal backlinks count — count markdown-style links in p/ul/ol/callout/cta text
const allTextParts = [];
for (const section of post.content || []) {
  if (section.kind === "p" || section.kind === "callout") allTextParts.push(section.text);
  if (section.kind === "ul") allTextParts.push(...(section.items || []));
  if (section.kind === "ol") allTextParts.push(...(section.items || []).map((i) => i.d));
  if (section.kind === "cta") allTextParts.push(section.text);
}
const allBodyText = allTextParts.join(" ");
const backlinkMatches = allBodyText.match(/\[([^\]]+)\]\((\/[^)]+)\)/g) || [];
if (backlinkMatches.length < 4) {
  errors.push(`Need at least 4 internal backlinks via Markdown [text](/path) (got ${backlinkMatches.length})`);
}

if (errors.length > 0) {
  console.error("✖ Validation failed:");
  errors.forEach((e) => console.error("  - " + e));
  process.exit(1);
}

// Set datePublished to today
post.datePublished = todayISO;

// Recompute readTime from word count
post.readTime = `${Math.max(5, Math.ceil(wordCount / 200))} min`;

console.log(`✓ Generated article: ${post.title}`);
console.log(`  Slug: ${post.slug}`);
console.log(`  Category: ${post.category}`);
console.log(`  Words: ${wordCount}`);
console.log(`  Read time: ${post.readTime}`);

// --- Step 5: Insert into lib/blog.ts ---
const postTSObject = serializeToTS(post);

const insertMarker = "export const POSTS: Post[] = [";
const insertIndex = blogRaw.indexOf(insertMarker);
if (insertIndex === -1) {
  console.error("✖ Could not find POSTS array marker in lib/blog.ts");
  process.exit(1);
}

const beforeMarker = blogRaw.slice(0, insertIndex + insertMarker.length);
const afterMarker = blogRaw.slice(insertIndex + insertMarker.length);
const newBlogContent = beforeMarker + "\n  " + postTSObject + "," + afterMarker;

writeFileSync(BLOG_FILE, newBlogContent, "utf8");
console.log(`✓ Inserted into ${BLOG_FILE}`);

// --- Step 6: Mark topic as published ---
nextTopic.published = true;
nextTopic.publishedAt = todayISO;
nextTopic.publishedSlug = post.slug;
writeFileSync(TOPICS_FILE, JSON.stringify(topicsData, null, 2) + "\n", "utf8");
console.log(`✓ Marked topic ${nextTopic.id} as published`);

// --- Step 7: Output for GitHub Actions to use in commit message ---
const remaining = topicsData.topics.filter((t) => !t.published).length;
console.log(`\n✓ DONE. Remaining topics in queue: ${remaining}/${topicsData.topics.length}`);

// Export slug for the workflow to use in commit message
if (process.env.GITHUB_OUTPUT) {
  const fs = await import("node:fs");
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `slug=${post.slug}\n`);
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `title=${post.title.replace(/\n/g, " ")}\n`);
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `category=${post.category}\n`);
}

// ====== Helpers ======

function countWords(post) {
  let words = 0;
  const countText = (text) => {
    if (!text) return;
    words += String(text).trim().split(/\s+/).length;
  };
  countText(post.title);
  countText(post.excerpt);
  countText(post.dek);
  for (const section of post.content || []) {
    if (section.kind === "p" || section.kind === "h2" || section.kind === "h3" || section.kind === "callout" || section.kind === "quote") {
      countText(section.text);
    } else if (section.kind === "ul") {
      (section.items || []).forEach(countText);
    } else if (section.kind === "ol") {
      (section.items || []).forEach((it) => {
        countText(it.t);
        countText(it.d);
      });
    } else if (section.kind === "table") {
      (section.headers || []).forEach(countText);
      (section.rows || []).forEach((row) => row.forEach(countText));
    } else if (section.kind === "stats") {
      (section.items || []).forEach((s) => {
        countText(s.value);
        countText(s.label);
      });
    } else if (section.kind === "compare") {
      countText(section.left?.title);
      countText(section.right?.title);
      (section.left?.items || []).forEach(countText);
      (section.right?.items || []).forEach(countText);
    } else if (section.kind === "cta") {
      countText(section.title);
      countText(section.text);
      countText(section.cta_label);
    }
  }
  return words;
}

/**
 * Serialize a Post object to TypeScript-style literal (matching the existing style in lib/blog.ts).
 * Uses indented multi-line format with unquoted keys where possible.
 */
function serializeToTS(post) {
  const indent = "  ";
  const lines = ["{"];
  lines.push(`${indent}slug: ${JSON.stringify(post.slug)},`);
  lines.push(`${indent}category: ${JSON.stringify(post.category)},`);
  lines.push(`${indent}title: ${JSON.stringify(post.title)},`);
  lines.push(`${indent}excerpt: ${JSON.stringify(post.excerpt)},`);
  lines.push(`${indent}dek: ${JSON.stringify(post.dek)},`);
  lines.push(`${indent}datePublished: ${JSON.stringify(post.datePublished)},`);
  lines.push(`${indent}readTime: ${JSON.stringify(post.readTime)},`);
  lines.push(`${indent}related: ${JSON.stringify(post.related)},`);
  lines.push(`${indent}content: [`);
  for (const section of post.content) {
    lines.push(`${indent}${indent}${serializeSection(section, indent + indent)},`);
  }
  lines.push(`${indent}],`);
  lines.push("}");
  return lines.join("\n  ");
}

function serializeSection(section, baseIndent) {
  const i = baseIndent + "  ";
  if (section.kind === "p") {
    const parts = [`kind: "p"`];
    if (section.bold === true) parts.push(`bold: true`);
    parts.push(`text: ${JSON.stringify(section.text)}`);
    return `{ ${parts.join(", ")} }`;
  }
  if (section.kind === "h2") {
    return `{ kind: "h2", text: ${JSON.stringify(section.text)} }`;
  }
  if (section.kind === "h3") {
    return `{ kind: "h3", text: ${JSON.stringify(section.text)} }`;
  }
  if (section.kind === "ul") {
    const items = section.items.map((it) => `\n${i}${i}${JSON.stringify(it)}`).join(",");
    return `{\n${i}kind: "ul",\n${i}items: [${items},\n${i}],\n${baseIndent}}`;
  }
  if (section.kind === "ol") {
    const items = section.items
      .map((it) => `\n${i}${i}{ t: ${JSON.stringify(it.t)}, d: ${JSON.stringify(it.d)} }`)
      .join(",");
    return `{\n${i}kind: "ol",\n${i}items: [${items},\n${i}],\n${baseIndent}}`;
  }
  if (section.kind === "table") {
    const headers = section.headers.map((h) => JSON.stringify(h)).join(", ");
    const rows = section.rows
      .map((r) => `\n${i}${i}[${r.map((c) => JSON.stringify(c)).join(", ")}]`)
      .join(",");
    return `{\n${i}kind: "table",\n${i}headers: [${headers}],\n${i}rows: [${rows},\n${i}],\n${baseIndent}}`;
  }
  if (section.kind === "callout") {
    return `{ kind: "callout", text: ${JSON.stringify(section.text)} }`;
  }
  if (section.kind === "stats") {
    const items = section.items
      .map((s) => `\n${i}${i}{ value: ${JSON.stringify(s.value)}, label: ${JSON.stringify(s.label)} }`)
      .join(",");
    return `{\n${i}kind: "stats",\n${i}items: [${items},\n${i}],\n${baseIndent}}`;
  }
  if (section.kind === "compare") {
    const leftItems = (section.left?.items || []).map((x) => `\n${i}${i}${i}${JSON.stringify(x)}`).join(",");
    const rightItems = (section.right?.items || []).map((x) => `\n${i}${i}${i}${JSON.stringify(x)}`).join(",");
    return `{\n${i}kind: "compare",\n${i}left: {\n${i}${i}title: ${JSON.stringify(section.left?.title || "")},\n${i}${i}items: [${leftItems},\n${i}${i}],\n${i}},\n${i}right: {\n${i}${i}title: ${JSON.stringify(section.right?.title || "")},\n${i}${i}items: [${rightItems},\n${i}${i}],\n${i}},\n${baseIndent}}`;
  }
  if (section.kind === "quote") {
    const parts = [`kind: "quote"`, `text: ${JSON.stringify(section.text)}`];
    if (section.author) parts.push(`author: ${JSON.stringify(section.author)}`);
    return `{ ${parts.join(", ")} }`;
  }
  if (section.kind === "cta") {
    return `{\n${i}kind: "cta",\n${i}title: ${JSON.stringify(section.title)},\n${i}text: ${JSON.stringify(section.text)},\n${i}cta_label: ${JSON.stringify(section.cta_label)},\n${i}cta_href: ${JSON.stringify(section.cta_href)},\n${baseIndent}}`;
  }
  throw new Error(`Unknown section kind: ${section.kind}`);
}
