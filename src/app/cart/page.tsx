import Button from "@/components/Atoms/Button/Button";
import HeaderWrapper from "@/components/Atoms/HeaderWrapper/HeaderWrapper";
import ProductList from "@/components/Organisms/ProductList/ProductList";
import { cartItems } from "../../../mock/cartItems";

export default function CartPage() {
  return (
    <main>
      <ProductList data={cartItems} />
    </main>
  )
}
