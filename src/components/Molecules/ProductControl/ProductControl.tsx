import Button from "@/components/Atoms/Button/Button"
import ProductPriceLabel from "@/components/Atoms/ProductPriceLabel/ProductPriceLabel"

const ProductControl = ({ price, disabledRemove, hiddenRemoveButton, handleAddProduct, handleDescreaseProduct }: IProductControl) => {
  return (
    <div className="flex">
      {!hiddenRemoveButton && <Button onClick={handleDescreaseProduct} disabled={disabledRemove} content="-" variant="danger" className="mr-1 text-sm font-medium text-right" />}
      <ProductPriceLabel price={price} />
      <Button
        content="+"
        onClick={handleAddProduct}
        className="text-sm font-medium text-right" />
    </div>
  )
}

export default ProductControl
