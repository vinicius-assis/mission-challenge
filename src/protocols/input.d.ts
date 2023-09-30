interface IInput {
  name: string
  label: string
  placeholder?: string
  currencySign?: string
  onChange?: ChangeEvent<HTMLInputElement>
}