'use client'
import { ProductProvider } from '@/context/ProductContext'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Molecules/Navbar/Navbar'

const ProvidersTemplate: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ProductProvider>
      <CartProvider>
        <Navbar />
        {children}
      </CartProvider>
    </ProductProvider>
  )
}

export default ProvidersTemplate