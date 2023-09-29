import Button from "@/components/Atoms/Button/Button";
import HeaderWrapper from "@/components/Atoms/HeaderWrapper/HeaderWrapper";
import ProductList from "@/components/Organisms/ProductList/ProductList";
import { productItems } from "../../mock/productItems";

export default function Home() {
  return (
    <main>
      <ProductList data={productItems} />
    </main>
  )
}
