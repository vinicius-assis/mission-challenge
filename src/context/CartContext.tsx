import { getCartCookies, getProductListCookies, setCartCookies } from "@/app/actions";
import { updateQuantity } from "@/utils/updateQuantity";
import { createContext, useEffect, useMemo, useReducer } from "react";


const INITIAL_STATE: IProductList = []

const cartReducer = (state: IProductList, action: ICartReducerAction) => {
  const { payload } = action
  const currentId = Array.isArray(payload) ? payload[0]?.id : payload?.id
  const itemIndex = state?.findIndex(({ id }) => currentId === id)


  switch (action.type) {
    case 'GET_INITIAL_VALUE':
      if (Array.isArray(payload)) {
        return [ ...payload ]
      }
      return [payload]
    case 'ADD_CART':
      if (itemIndex >= 0) {
        const data = updateQuantity(state, currentId, 'plus')
        setCartCookies(data)

        return data
      }

      const list = [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ]
      setCartCookies(list)

      return list

    case 'REMOVE_ITEM':
      const data = updateQuantity(state, currentId, 'minus')
      setCartCookies(data)

      return data

    default:
      return state
  }
}

export const CartContext = createContext<any>(INITIAL_STATE)

export const CartProvider: React.FC<IProvider> = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const totalItems = useMemo(() => cartItems?.length, [cartItems])

  const handleDefaultState = (value: IProductList) => dispatch({ type: 'GET_INITIAL_VALUE', payload: value })

  useEffect(() => {
    if (!cartItems?.length) {
      const getDefaultValue = async() => {
        const cookies = await getCartCookies()
        if (cookies?.length) {
          handleDefaultState(cookies)
        }
      }
      getDefaultValue()
    }
  }, [])

  return (
    <CartContext.Provider value={{ cartItems, dispatch, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}
