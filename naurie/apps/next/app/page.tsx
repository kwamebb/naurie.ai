'use client'

import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    // Redirect to the Naurie static HTML
    window.location.href = '/naurie.html'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl mb-4">Loading...</h1>
      </div>
    </div>
  )
}