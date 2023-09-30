import CardList from "@/components/Organisms/CardList/CardList";
import { cartItems } from "../../../mock/cartItems";

export default function CartPage() {
  return (
    <main>
      <CardList data={cartItems} />
    </main>
  )
}
