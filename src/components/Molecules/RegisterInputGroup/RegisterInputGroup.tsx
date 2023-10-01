import Input from "@/components/Atoms/Input/Input"

const RegisterInputGroup = ({ handleUpdateFields, noLabels }: IRegisterInputGroup) => {
  return (
    <>
      <Input noLabels={noLabels} name="product" label="Produto" onChange={handleUpdateFields('product')} />
      <Input noLabels={noLabels} name="price" label="Preço" placeholder="0,00" currencySign="R$"  onChange={handleUpdateFields('price')} />
    </>
  )
}

export default RegisterInputGroup