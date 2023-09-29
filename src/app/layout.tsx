'use client'

import HeaderWrapper from '@/components/Atoms/HeaderWrapper/HeaderWrapper'
import './globals.css'
import Button from '@/components/Atoms/Button/Button'
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname()

  return (
    <html lang="pt-BR">
      <body>
        <HeaderWrapper>
          {pathName !== '/register' && <Button to="/register" content="Cadastrar Produto" />}
          {pathName !== '/' && <Button to="/" content="Lista" />}
          {pathName !== '/cart' && <Button to="/cart" content="Carrinho" />}
        </HeaderWrapper>
        {children}
      </body>
    </html>
  )
}
