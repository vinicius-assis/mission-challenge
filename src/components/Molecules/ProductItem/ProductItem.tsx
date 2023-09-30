import ProductControl from "../ProductControl/ProductControl"

const ProductItem = ({ title, price, quantity,  className, hiddenRemoveButton }:IProductItem) => {
  const itemPrice = (quantity ? (Number(price) * quantity).toFixed(2) : price) as number
  return (
    <li className={`flex justify-between py-2 ${className}`}>
      <div className="flex">
        {!!quantity && <p className="mr-2 italic">{quantity}x</p>}
        <h4 className="text-base font-semibold">{title}</h4>
      </div>
        <ProductControl price={itemPrice} hiddenRemoveButton={hiddenRemoveButton} />
    </li>
  )
}

export default ProductItem
