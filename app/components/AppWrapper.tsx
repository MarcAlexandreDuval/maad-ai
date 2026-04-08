'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './LoadingScreen'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    // Show loading screen only on first visit per session
    if (typeof window !== 'undefined' && sessionStorage.getItem('maad-ai-loaded')) {
      setIsLoading(false)
    }
  }, [])

  const handleComplete = () => {
    setIsLoading(false)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('maad-ai-loaded', '1')
    }
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {hasMounted && isLoading && <LoadingScreen onComplete={handleComplete} />}
      </AnimatePresence>
      <div
        style={{
          opacity: isLoading && hasMounted ? 0 : 1,
          transition: 'opacity 0.5s ease-out',
        }}
      >
        {children}
      </div>
    </>
  )
}
