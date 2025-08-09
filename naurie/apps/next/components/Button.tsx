import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  href?: string
  target?: string
  rel?: string
  disabled?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  href,
  target,
  rel,
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-[cubic-bezier(.165,.84,.44,1)] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-blue-solid)]'
  
  const variantStyles = {
    primary: 'bg-[var(--primary-blue-solid)] text-white hover:opacity-90 hover:transform hover:translateY(-1px) hover:shadow-lg',
    secondary: 'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 hover:transform hover:translateY(-1px)',
    ghost: 'bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]',
    outline: 'border-2 border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--primary-blue-solid)] hover:text-[var(--primary-blue-solid)]'
  }
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`
  
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
      >
        {children}
      </a>
    )
  }
  
  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  )
}