'use client'
import HeaderWrapper from '@/components/Atoms/HeaderWrapper/HeaderWrapper'
import Button from '@/components/Atoms/Button/Button'
import { usePathname } from 'next/navigation'
import { ProductProvider } from '@/context/ProductContext'

const BaseTemplate: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const pathName = usePathname()

  return (
    <>
      <HeaderWrapper>
        {pathName !== '/register' && <Button to="/register" content="Cadastrar Produto" />}
        {pathName !== '/' && <Button to="/" content="Lista de Produtos" />}
        {pathName !== '/cart' && <Button to="/cart" content="Carrinho" />}
      </HeaderWrapper>
      <ProductProvider>{children}</ProductProvider>
    </>
  )
}

export default BaseTemplate