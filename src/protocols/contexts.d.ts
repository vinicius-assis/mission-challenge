interface IProvider {
  children: React.ReactNode
}

type IProductList = Array<IProductData>

interface ICartReducerAction {
  type: 'ADD_CART' | 'REMOVE_ITEM'
  payload: IProductData
}

interface IProductReducerAction {
  type: 'REGISTER_PRODUCTS'
  payload: IProductList
}