interface IInput {
  name: string
  label: string
  placeholder?: string
  currencySign?: string
  noLabels?: boolean
  onChange?: ChangeEvent<HTMLInputElement>
}

interface IProductInput {
  noLabels?: boolean
  disabledRemove?: boolean
  removeField: (event: React.MouseEvent<HTMLElement>) => void
  addProductField: (event: React.MouseEvent<HTMLElement>) => void
  handleChange: (field: string, value: string) => void
}

interface IRegisterInputGroup {
  noLabels?: boolean
  handleUpdateFields: (name: string) =>  (value: string) => void
}