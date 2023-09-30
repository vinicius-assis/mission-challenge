import ProductList from "@/components/Organisms/ProductList/ProductList";
import { productItems } from "../../../mock/productItems";

export default function Register() {
  return (
    <main>
      <ProductList data={productItems} />
    </main>
  )
}
