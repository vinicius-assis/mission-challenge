import Button from "@/components/Atoms/Button/Button"
import ProductControl from "../ProductControl/ProductControl"

const ProductItem = ({ title, price, className }:IProductItem) => {
  return (
    <li className={`flex justify-between py-2 ${className}`}>
      <h4 className="text-base font-semibold">{title}</h4>
      <ProductControl price={price} />
    </li>
  )
}

export default ProductItem
