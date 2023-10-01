import { formatCurrencyToString } from "@/utils/formatCurrency";
import { updateQuantity } from "@/utils/updateQuantity";
import { createContext, useReducer } from "react";

const sessionList = sessionStorage.getItem('cartList') || undefined
  const defaultList = sessionList ? JSON.parse(sessionList) : []

const INITIAL_STATE: IProductList = defaultList

const cartReducer = (state: IProductList, action: ICartReducerAction) => {
  const currentId = action?.payload?.id
  const itemIndex = state?.findIndex(({ id }) => currentId === id)


  switch (action.type) {
    case 'ADD_CART':
      if (itemIndex >= 0) {
        const data = updateQuantity(state, currentId, 'plus')
        sessionStorage.setItem('cartList', JSON.stringify(data))

        return data
      }

      const list = [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ]
      sessionStorage.setItem('cartList', JSON.stringify(list))

      return list

    case 'REMOVE_ITEM':
      const data = updateQuantity(state, currentId, 'minus')
      sessionStorage.setItem('cartList', JSON.stringify(data))

      return data

    default:
      return state
  }
}

export const CartContext = createContext<any>(INITIAL_STATE)

export const CartProvider: React.FC<IProvider> = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const totalItems = cartItems?.length
  const getCartTotal = () => {
    const cartTotalValue = cartItems?.reduce((acc, item) => {
    const { quantity, price } = item
    const priceToNumber = Number(price?.replaceAll('.', '')?.replaceAll(',', '.'))
    const totalItemPrice = priceToNumber * (quantity || 1)
    return acc + totalItemPrice
    }, 0)

    return formatCurrencyToString(String(cartTotalValue))
  }


  return (
    <CartContext.Provider value={{ cartItems, dispatch, totalItems, totalCart: getCartTotal() }}>
      {children}
    </CartContext.Provider>
  )
}
