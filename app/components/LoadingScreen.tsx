'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = ['Vu', 'Choisi', 'Recommand\u00e9']
const WORD_DURATION = 1200
const FINAL_HOLD = 900

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [wordIndex, setWordIndex] = useState(0)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    for (let i = 1; i < words.length; i++) {
      timers.push(setTimeout(() => setWordIndex(i), i * WORD_DURATION))
    }

    timers.push(
      setTimeout(
        () => onCompleteRef.current(),
        words.length * WORD_DURATION + FINAL_HOLD
      )
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050508] overflow-hidden"
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
      transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
    >
      {/* Subtle grid with slow parallax drift */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 80%)',
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Glow with slow breathe */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[720px] h-[480px] rounded-full bg-[#00c896] blur-[160px] pointer-events-none"
        initial={{ x: '-50%', y: '-50%', opacity: 0, scale: 0.9 }}
        animate={{ x: '-50%', y: '-50%', opacity: 0.06, scale: 1.05 }}
        transition={{ duration: 3.5, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Top-left label */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00c896] animate-pulse" />
          <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] font-mono">
            MAAD-AI
          </span>
        </div>
      </motion.div>

      {/* Top-right brand */}
      <motion.div
        className="absolute top-8 right-8 md:top-12 md:right-12"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <span className="text-xs md:text-sm font-display font-bold tracking-tight">
          <span className="text-white">MAAD</span>
          <span className="text-[#00c896]">-AI</span>
        </span>
      </motion.div>

      {/* Center: rotating word */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.p
            className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-[0.4em] mb-8"
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            Tu es
          </motion.p>
          <div className="relative h-[72px] md:h-[110px] lg:h-[130px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                className="absolute inset-0 flex items-center justify-center font-serif-italic text-5xl md:text-7xl lg:text-8xl text-white whitespace-nowrap"
                initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(14px)' }}
                transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              >
                {words[wordIndex]}
                {wordIndex === words.length - 1 && (
                  <motion.span
                    className="text-[#00c896]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    .
                  </motion.span>
                )}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom-left status (subtle) */}
      <motion.div
        className="absolute bottom-12 left-8 md:bottom-16 md:left-12 max-w-[200px]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <p className="text-[10px] md:text-xs text-white/30 font-mono uppercase tracking-[0.25em] leading-relaxed">
          SEO &middot; AEO &middot; GEO
        </p>
      </motion.div>

      {/* Bottom-right tagline */}
      <motion.div
        className="absolute bottom-12 right-8 md:bottom-16 md:right-12 text-right max-w-[220px]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <p className="text-[10px] md:text-xs text-white/30 font-mono uppercase tracking-[0.25em] leading-relaxed">
          Joliette &middot; Qu&eacute;bec
        </p>
      </motion.div>
    </motion.div>
  )
}
