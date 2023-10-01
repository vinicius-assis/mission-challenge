import { createContext, useReducer } from "react";

const INITIAL_STATE: IProductList = []

const cartReducer = (state: IProductList, action: ICartReducerAction) => {
  const currentId = action?.payload?.id
  const itemIndex = state?.findIndex(({ id }) => currentId === id)


  switch (action.type) {
    case 'ADD_CART':
      if (itemIndex >= 0) {
        const updatedState = state.reduce((acc: IProductList, item) => {
          const { quantity, id } = item
          if (currentId === id) {
            return [
              ...acc,
              {
                ...item,
                quantity: (quantity || 0) + 1
              }
            ]
          }
          return [
            ...acc,
            item
          ]
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
      const updatedState = state.reduce((acc: IProductList, item) => {
        const { quantity, id } = item
        if (currentId === id) {
          if (quantity === 1) {
            return acc
          }
          return [
            ...acc,
            {
              ...item,
              quantity: (quantity || 1) - 1
            }
          ]
        }
        return [
          ...acc,
          item
        ]
      }, [])

      return updatedState

    default:
      return state
  }
}

export const CartContext = createContext<any>(INITIAL_STATE)

export const CartProvider: React.FC<IProvider> = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const totalItems = cartItems?.length
  return (
    <CartContext.Provider value={{ cartItems, dispatch, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}
