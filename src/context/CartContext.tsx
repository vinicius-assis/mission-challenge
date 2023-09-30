import { createContext, useReducer } from "react";

interface IProvider {
  children: React.ReactNode
}

const INITIAL_STATE: any = []

const productReducer = (state: Array<any>, action: any) => {
  const currentId = action?.payload?.id
  const itemIndex = state?.findIndex(({ id }) => currentId === id)


  switch (action.type) {
    case 'ADD_CART':
      if (itemIndex >= 0) {
        const updatedState = state.reduce((acc, item, index) => {
          const { quantity } = item
          if (index === itemIndex) {
            return [
              ...acc,
              {
                ...item,
                quantity: quantity + 1
              }
            ]
          }
          return acc
        }, [])
        return updatedState
      }
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ]

    case 'REMOVE_ITEM':
      const updatedState = state.reduce((acc, item, index) => {
        const { quantity } = item
        if (quantity === 1) {
          return acc
        }
        if (index === itemIndex) {
          return [
            ...acc,
            {
              ...item,
              quantity: quantity - 1
            }
          ]
        }
        return acc
      }, [])

      return updatedState

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
