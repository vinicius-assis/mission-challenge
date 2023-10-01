import { memo } from "react"
import ProductControl from "../ProductControl/ProductControl"
import { formatCurrencyToString } from "@/utils/formatCurrency"

const ProductItem = ({
  id,
  title,
  price,
  quantity,
  className,
  hiddenRemoveButton,
  handleAddProduct,
  handleDescreaseProduct
}:IProductItem) => {
  const formattedPrice = Number(price?.replaceAll('.', '')?.replaceAll(',', '.'))
  const totalPrice = quantity ? (formattedPrice * quantity).toFixed(2) : price
  const itemPrice = formatCurrencyToString(String(totalPrice))
  return (
    <li className={`flex justify-between py-2 ${className}`}>
      <div className="flex">
        {!!quantity && <p className="mr-2 italic">{quantity}x</p>}
        <h4 className="text-base font-semibold">{title}</h4>
      </div>
        <ProductControl
          id={id}
          price={itemPrice}
          hiddenRemoveButton={hiddenRemoveButton}
          handleAddProduct={handleAddProduct}
          handleDescreaseProduct={handleDescreaseProduct}
        />
    </li>
  )
}

export default memo(ProductItem)
