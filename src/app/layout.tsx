import ProvidersTemplate from '@/components/Templates/ProvidersTemplate/ProvidersTemplate'
import './globals.css'

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
