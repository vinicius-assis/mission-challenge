'use client'

import ProductList from "@/components/Organisms/ProductList/ProductList";
import { productItems } from "../../mock/productItems";

export default function Home() {
  return (
    <main>
      <ProductList data={productItems} />
    </main>
  )
}
