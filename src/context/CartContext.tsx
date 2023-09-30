import { createContext, useReducer } from "react";

interface IProvider {
  children: React.ReactNode
}

const INITIAL_STATE: any = []

const productReducer = (state: Array<any>, action: any) => {
  switch (action.type) {
    case 'ADD_CART':
      const currentId = action?.payload?.id
      const duplicatedIndex = state.findIndex(({ id }) => id === currentId)
      console.log(duplicatedIndex)
      if (duplicatedIndex >= 0) {
        state[duplicatedIndex].quantity++
        console.log(state)
        return state
      }
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ]
    default:
      return state
  }
}

export const CartContext = createContext<any>(INITIAL_STATE)

export const CartProvider: React.FC<IProvider> = ({ children }) => {
  const [cartItems, dispatch] = useReducer(productReducer, INITIAL_STATE)
  const totalItems = cartItems?.length
  return (
    <CartContext.Provider value={{ cartItems, dispatch, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}
