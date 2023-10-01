export const formatCurrencyToString = (value: string) => {
  let result = value

  result = result.replace(/\D/g, "")
  result = result.replace(/(\d)(\d{2})$/g, "$1,$2")
  result = result.replace(/(?=(\d{3})+(\D))\B/g, "." )
  return result
}