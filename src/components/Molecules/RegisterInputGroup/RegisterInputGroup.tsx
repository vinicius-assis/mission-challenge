import Input from "@/components/Atoms/Input/Input"

const RegisterInputGroup = ({ handleUpdateFields }: IRegisterInputGroup) => {
  return (
    <>
      <Input name="product" label="Produto" onChange={handleUpdateFields} />
      <Input name="price" label="Preço" placeholder="0,00" currencySign="R$"  onChange={handleUpdateFields} />
    </>
  )
}

export default RegisterInputGroup