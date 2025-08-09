import { StylesProvider } from './styles-provider'
import './globals.css'

export const metadata = {
  title: 'Naurie AI - Innovative AI Solutions for Forward Thinking Businesses',
  description: 'AI-powered voice agents and receptionists that handle inbound and outbound calls 24/7. Transform your business communication with Naurie AI.',
}

export const viewport = {
  themeColor: '#146ef5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StylesProvider>
          {children}
        </StylesProvider>
      </body>
    </html>
  )
}
