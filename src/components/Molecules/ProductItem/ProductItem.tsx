import { memo } from "react"
import ProductControl from "../ProductControl/ProductControl"

const ProductItem = ({
  title,
  price,
  quantity,
  className,
  hiddenRemoveButton,
  handleAddProduct,
  handleDescreaseProduct
}:IProductItem) => {
  const formattedPrice = Number(price?.replaceAll('.', '')?.replaceAll(',', '.'))
  const itemPrice = (quantity ? (formattedPrice * quantity).toFixed(2) : formattedPrice) as number
  return (
    <li className={`flex justify-between py-2 ${className}`}>
      <div className="flex">
        {!!quantity && <p className="mr-2 italic">{quantity}x</p>}
        <h4 className="text-base font-semibold">{title}</h4>
      </div>
        <ProductControl
          price={itemPrice}
          hiddenRemoveButton={hiddenRemoveButton}
          handleAddProduct={handleAddProduct}
          handleDescreaseProduct={handleDescreaseProduct}
        />
    </li>
  )
}

export default memo(ProductItem)
