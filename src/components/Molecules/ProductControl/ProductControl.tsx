import Button from "@/components/Atoms/Button/Button"
import ProductPriceLabel from "@/components/Atoms/ProductPriceLabel/ProductPriceLabel"

const ProductControl = ({ price, disabledRemove, hiddenRemoveButton }: IProductControl) => {
  return (
    <div className="flex">
      {!hiddenRemoveButton && <Button disabled={disabledRemove} content="-" variant="danger" className="mr-1 text-sm font-medium text-right" />}
      <ProductPriceLabel price={price} />
      <Button content="+" className="text-sm font-medium text-right" />
    </div>
  )
}

export default ProductControl
