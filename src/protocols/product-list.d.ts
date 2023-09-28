interface IProductList {
  data?: Array<IProductData>
}

interface IProductData {
  id: string
  productName: string
  price: string
}