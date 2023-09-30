'use client'

import CardList from "@/components/Organisms/CardList/CardList";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export default function CartPage() {
  const { cartItems } = useContext(CartContext)

  return (
    <main>
      <CardList data={cartItems} />
    </main>
  )
}
