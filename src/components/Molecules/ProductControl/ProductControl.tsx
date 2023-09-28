import Button from "@/components/Atoms/Button/Button"

const ProductControl = ({ price, disabledRemove }: IProductControl) => {
  return (
    <div className="flex">
      <Button disabled={disabledRemove} content="-" variant="danger" className="mr-1 text-sm font-medium text-right" />
      <p style={{ minWidth: '80px'}} className="mr-1 py-1 px-3 rounded-sm bg-gray-300 text-black text-sm font-medium text-right">{`R$${price}`}</p>
      <Button content="+" className="text-sm font-medium text-right" />
    </div>
  )
}

export default ProductControl
