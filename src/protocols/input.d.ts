interface IInput {
  name: string
  label: string
  placeholder?: string
  currencySign?: string
  onChange?: ChangeEvent<HTMLInputElement>
}

interface IProductInput {
  addProductField: (e: React.MouseEvent<HTMLElement>) => void
  removeField: (event: React.MouseEvent<HTMLElement>) => void
  disabledRemove?: boolean
  handleChange: (field: string, value: string) => void
}

interface IRegisterInputGroup {
  handleUpdateFields: (name: string) =>  (value: string) => void
}