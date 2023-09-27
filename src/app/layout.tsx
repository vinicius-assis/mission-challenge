import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission Challenge',
  description: 'An application to add, list and show your products in cart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
