import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  featured?: boolean
  glass?: boolean
}

export default function Card({
  children,
  className = '',
  hover = false,
  featured = false,
  glass = false
}: CardProps) {
  const baseStyles = 'rounded-xl transition-all duration-200 ease-[cubic-bezier(.165,.84,.44,1)]'
  
  const variantStyles = glass
    ? 'glass-effect'
    : 'bg-[var(--bg-primary)] border border-[var(--border-color)]'
  
  const hoverStyles = hover
    ? 'hover:transform hover:translateY(-2px) hover:shadow-lg'
    : ''
  
  const featuredStyles = featured
    ? 'ring-2 ring-[var(--primary-blue-solid)] ring-offset-2'
    : ''
  
  return (
    <div className={`${baseStyles} ${variantStyles} ${hoverStyles} ${featuredStyles} ${className}`}>
      {children}
    </div>
  )
}