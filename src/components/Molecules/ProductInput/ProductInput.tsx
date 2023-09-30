import { memo } from "react"
import Input from "@/components/Atoms/Input/Input"
import Button from "@/components/Atoms/Button/Button"

const ProductInput = () => {
  return (
    <div className="flex space-x-1">
      <Input name="product" label="Produto" />
      <Input name="price" label="Preço" placeholder="0,00" currencySign="R$" />
      <Button content="+" className="self-end h-9" />
    </div>
  )
}

export default memo(ProductInput)
