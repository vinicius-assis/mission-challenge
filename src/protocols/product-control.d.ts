interface IProductControl {
  id?: string
  price: string
  disabledRemove?: boolean
  hiddenRemoveButton?: boolean
  handleAddProduct?: () => void
  handleDescreaseProduct?: () => void
}