interface IProductControl {
  price: number
  disabledRemove?: boolean
  hiddenRemoveButton?: boolean
  handleAddProduct?: () => void
  handleDescreaseProduct?: () => void
}