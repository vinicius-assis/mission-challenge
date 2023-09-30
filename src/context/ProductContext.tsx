import { createContext, useReducer } from "react";

const INITIAL_STATE: Array<IProductData> = []

const productReducer = (state: IProductList, action: IProductReducerAction) => {
  switch (action.type) {
    case 'REGISTER_PRODUCTS':
      return [
        ...state,
        ...action.payload
      ]
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
