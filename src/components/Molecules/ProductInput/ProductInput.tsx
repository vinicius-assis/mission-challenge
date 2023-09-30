import { memo } from "react"
import Input from "@/components/Atoms/Input/Input"
import Button from "@/components/Atoms/Button/Button"

interface IInputData {
  price: string
  product: string
}

const ProductInput = ({ addProductField, disabledRemove, removeField, handleChange }: any) => {
  const handleUpdateFields = (event: any) => {
    const { target } = event
    const { name, value } = target
    handleChange(name, value)
  }

  return (
    <div className="flex space-x-1 mb-2">
      <Input name="product" label="Produto" onChange={handleUpdateFields} />
      <Input name="price" label="Preço" placeholder="0,00" currencySign="R$"  onChange={handleUpdateFields} />
      <Button onClick={removeField} content="-" variant="danger" className="self-end h-9" disabled={disabledRemove} />
      <Button onClick={addProductField} content="+" className="self-end h-9" />
    </div>
  )
}

export default memo(ProductInput)
