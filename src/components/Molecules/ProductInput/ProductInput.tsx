import { memo } from "react"
import Input from "@/components/Atoms/Input/Input"
import Button from "@/components/Atoms/Button/Button"

const ProductInput = ({ onAppendInput, onRemoveItem, disabledRemove }: any) => {
  return (
    <div className="flex space-x-1 mb-2">
      <Input name="product" label="Produto" />
      <Input name="price" label="Preço" placeholder="0,00" currencySign="R$" />
      <Button onClick={onRemoveItem} content="-" variant="danger" className="self-end h-9" disabled={disabledRemove} />
      <Button onClick={onAppendInput} content="+" className="self-end h-9" />
    </div>
  )
}

export default memo(ProductInput)
