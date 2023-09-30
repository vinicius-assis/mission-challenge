import { createContext, useReducer } from "react";

interface IProvider {
  children: React.ReactNode
}

const INITIAL_STATE: any = []

const productReducer = (state: any, action: any) => {
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
