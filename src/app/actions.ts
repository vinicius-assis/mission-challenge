'use server'

import { cookies } from 'next/headers'

export const setCartCookies = (data: any): void => {
  const stringfyData = JSON.stringify(data)
  cookies().set('cartList', stringfyData)
}

export const getCartCookies = (): Array<IProductData> => {
  const cartCookies = cookies().get('cartList')?.value || ''

  if (cartCookies) {
    const parsedValue = JSON.parse(cartCookies)
    return parsedValue
  }

  return []
}
Array<IProductData>

export const setProductListCookies = (data: any): void => {
  const stringfyData = JSON.stringify(data)
  cookies().set('productList', stringfyData)
}

export const getProductListCookies = (): Array<IProductData> => {
  const listCookies = cookies().get('productList')?.value || ''
  if (listCookies) {
    const parsedValue = JSON.parse(listCookies)
    return parsedValue
  }

  return []
}

