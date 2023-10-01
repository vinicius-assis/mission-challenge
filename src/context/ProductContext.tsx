import { getProductListCookies } from "@/app/actions";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE: Array<IProductData> = []

const productReducer = (state: IProductList, action: IProductReducerAction) => {
  switch (action.type) {
    case 'REGISTER_PRODUCTS':
      const list = [
        ...state,
        ...action.payload
      ]
      return list
    default:
      return state
  }
}

export const ProductContext = createContext<any>(INITIAL_STATE)

export const ProductProvider: React.FC<IProvider> = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, INITIAL_STATE)

  const handleDefaultState = (value: IProductList) => dispatch({ type: 'REGISTER_PRODUCTS', payload: value })

  useEffect(() => {
    if (!products?.length) {
      const getDefaultValue = async() => {
        const cookies = await getProductListCookies()
        if (cookies?.length) {
          handleDefaultState(cookies)
        }
      }
      getDefaultValue()
    }
  }, [])

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}
