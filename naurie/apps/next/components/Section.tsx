import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  pattern?: boolean
  id?: string
}

export default function Section({
  children,
  className = '',
  pattern = false,
  id
}: SectionProps) {
  const baseStyles = 'relative py-24 px-6 md:px-8 lg:px-12'
  const patternStyles = pattern ? 'geometric-pattern' : ''
  
  return (
    <section
      id={id}
      className={`${baseStyles} ${patternStyles} ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  )
}