'use client'

import Button from "@/components/Atoms/Button/Button"
import HeaderWrapper from "@/components/Atoms/HeaderWrapper/HeaderWrapper"
import { CartContext } from "@/context/CartContext"
import { usePathname } from "next/navigation"
import { useContext } from "react"

const Navbar = () => {
  const pathName = usePathname()
  const { totalItems } = useContext(CartContext)

  return (
    <HeaderWrapper>
      {pathName !== '/register' && <Button to="/register" content="Cadastrar Produto" />}
      {pathName !== '/' && <Button to="/" content="Lista de Produtos" />}
      {pathName !== '/cart' && <Button to="/cart" content={`Carrinho${totalItems ? `(${totalItems})` : ''}`} />}
    </HeaderWrapper>
  )
}

export default Navbar