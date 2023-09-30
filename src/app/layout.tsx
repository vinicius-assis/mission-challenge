import BaseTemplate from '@/components/Templates/BaseTemplate/BaseTemplate'
import './globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
return (
    <html lang="pt-BR">
      <body>
        <BaseTemplate>
          {children}
        </BaseTemplate>
      </body>
    </html>
  )
}
