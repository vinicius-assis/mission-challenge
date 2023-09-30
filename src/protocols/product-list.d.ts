interface IProductList {
  data?: Array<IProductData>
}

interface IProductData {
  id: string
  product: string
  price: number
}