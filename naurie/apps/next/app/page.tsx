'use client'

import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/naurie.html')
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl mb-4">Redirecting to Naurie...</h1>
      </div>
    </div>
  )
}