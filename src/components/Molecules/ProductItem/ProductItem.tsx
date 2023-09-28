const ProductItem = ({ title, price }:IProductItem) => {
  return (
    <li className="flex justify-between">
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="text-sm font-medium">{price}</p>
    </li>
  )
}

export default ProductItem
