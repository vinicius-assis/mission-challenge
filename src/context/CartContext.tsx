import { createContext, useReducer } from "react";

interface IProvider {
  children: React.ReactNode
}

const INITIAL_STATE: any = []

const productReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'REGISTER_CART':
      return [
        ...state,
        ...action.payload
      ]
    default:
      return state
  }
}

export const CartContext = createContext<any>(INITIAL_STATE)

export const CartProvider: React.FC<IProvider> = ({ children }) => {
  const [cart, dispatch] = useReducer(productReducer, INITIAL_STATE)
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
