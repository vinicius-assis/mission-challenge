import { formatCurrencyToString } from "./formatCurrency"

export const getTotalCart = (cartItems: IProductList): string => {
  if (!cartItems) {
    return '0'
  }
  const total = cartItems?.reduce((acc, item) => {
    const { quantity, price } = item
    const priceToNumber = Number(price?.replaceAll('.', '')?.replaceAll(',', '.'))
    const totalItemPrice = priceToNumber * (quantity || 1)
    return acc + totalItemPrice
  }, 0)
  return formatCurrencyToString(String(total.toFixed(2)))
}
