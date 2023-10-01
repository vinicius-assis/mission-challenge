import { createContext, useReducer } from "react";

  const sessionList = window ? sessionStorage.getItem('productList') : undefined
  const defaultList = sessionList ? JSON.parse(sessionList) : []

const INITIAL_STATE: Array<IProductData> = defaultList

const productReducer = (state: IProductList, action: IProductReducerAction) => {
  switch (action.type) {
    case 'REGISTER_PRODUCTS':
      console.log(action.payload)
      const list = [
        ...state,
        ...action.payload
      ]
      sessionStorage.setItem('productList', JSON.stringify(list))

      return list
    default:
      return state
  }
}

export const ProductContext = createContext<any>(INITIAL_STATE)

export const ProductProvider: React.FC<IProvider> = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, INITIAL_STATE)

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}
