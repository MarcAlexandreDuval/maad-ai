'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  by?: 'word' | 'letter'
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export default function BlurText({
  text,
  className = '',
  delay = 100,
  by = 'word',
  as: Tag = 'h1',
}: BlurTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const parts = by === 'word' ? text.split(' ') : text.split('')

  return (
    <Tag ref={ref as never} className={className}>
      {parts.map((part, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={
            visible
              ? { filter: 'blur(0px)', opacity: 1, y: 0 }
              : { filter: 'blur(10px)', opacity: 0, y: 50 }
          }
          transition={{
            duration: 0.7,
            delay: (i * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {part}
          {by === 'word' && i < parts.length - 1 && '\u00a0'}
        </motion.span>
      ))}
    </Tag>
  )
}
