interface IProductItem {
  title: string
  price: string
  className?: string
  quantity?: number
  hiddenRemoveButton?: boolean
  handleAddProduct?: () => void
  handleDescreaseProduct?: () => void
}

interface IProductData {
  id: string
  product: string
  price: string
  quantity?: number
}