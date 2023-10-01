'use client'

import ProductList from "@/components/Organisms/ProductList/ProductList";
import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";

export default function Home() {
  const { products } = useContext(ProductContext)

  return (
    <main className="container mx-auto">
      <ProductList products={products} />
    </main>
  )
}
