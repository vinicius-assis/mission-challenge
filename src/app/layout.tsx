import ProvidersTemplate from '@/components/Templates/ProvidersTemplate/ProvidersTemplate'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission Challenge',
  description: 'An App developed using Next.JS',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
return (
    <html lang="pt-BR">
      <body>
        <ProvidersTemplate>
          {children}
        </ProvidersTemplate>
      </body>
    </html>
  )
}
