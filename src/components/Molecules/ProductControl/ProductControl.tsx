import Button from "@/components/Atoms/Button/Button"
import ProductPriceLabel from "@/components/Atoms/ProductPriceLabel/ProductPriceLabel"
import { CartContext } from "@/context/CartContext"
import { useContext } from "react"

const ProductControl = ({ id, price, disabledRemove, hiddenRemoveButton, handleAddProduct, handleDescreaseProduct }: IProductControl) => {
  const { cartItems } = useContext(CartContext)
  const alreadyAdd = cartItems?.some((item: any) => item.id === id)

  return (
    <div className="flex">
      {!hiddenRemoveButton && <Button onClick={handleDescreaseProduct} disabled={disabledRemove} content="-" variant="danger" className="mr-1 text-sm font-medium text-right" />}
      <ProductPriceLabel price={price} />
      <Button
        disabled={alreadyAdd}
        content="+"
        onClick={handleAddProduct}
        className="text-sm font-medium text-right" />
    </div>
  )
}

export default ProductControl
