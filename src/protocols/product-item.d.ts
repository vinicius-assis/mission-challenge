interface IProductItem {
  title: string
  price: number
  className?: string
  quantity?: number
  hiddenRemoveButton?: boolean
  handleAddProduct?: () => void
}