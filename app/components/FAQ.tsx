'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
  linkHref?: string
  linkText?: string
}

export default function FAQ({ items, id }: { items: FAQItem[]; id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div id={id} className="max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div key={i} className="accordion-item">
          <button
            className="accordion-trigger"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
            <p>{item.answer}</p>
            {item.linkHref && item.linkText && (
              <p className="mt-3">
                <Link href={item.linkHref} className="text-[var(--color-emerald)] hover:underline text-sm font-medium inline-flex items-center gap-1">
                  {item.linkText}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
