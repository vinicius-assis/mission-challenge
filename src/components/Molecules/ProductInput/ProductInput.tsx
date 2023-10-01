import { memo } from "react"
import Input from "@/components/Atoms/Input/Input"
import Button from "@/components/Atoms/Button/Button"
import RegisterInputGroup from "../RegisterInputGroup/RegisterInputGroup"

const ProductInput = ({ addProductField, disabledRemove, removeField, handleChange, noLabels }: IProductInput) => {
  const handleUpdateFields = (name: string) =>  (value: string) => {
    handleChange(name, value)
  }

  return (
    <div className="flex space-x-1 mb-2">
      <RegisterInputGroup handleUpdateFields={handleUpdateFields} noLabels={noLabels} />
      <Button onClick={removeField} content="-" variant="danger" className="self-end h-9" disabled={disabledRemove} />
      <Button onClick={addProductField} content="+" className="self-end h-9" />
    </div>
  )
}

export default memo(ProductInput)
