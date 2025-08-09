import React from 'react'

interface CodeBlockProps {
  children: React.ReactNode
  language?: string
  className?: string
}

export default function CodeBlock({
  children,
  language = 'javascript',
  className = ''
}: CodeBlockProps) {
  return (
    <div className={`code-block scrollbar-thin ${className}`}>
      <div className="flex items-center justify-between mb-3 pb-3 border-b border-[var(--border-color)]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-[var(--text-muted)] font-mono">{language}</span>
      </div>
      <pre className="font-mono text-sm text-[var(--text-primary)]">
        <code>{children}</code>
      </pre>
    </div>
  )
}