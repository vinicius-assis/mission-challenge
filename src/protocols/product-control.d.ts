interface IProductControl {
  price: string
  disabledRemove?: boolean
  hiddenRemoveButton?: boolean
  handleAddProduct?: () => void
  handleDescreaseProduct?: () => void
}