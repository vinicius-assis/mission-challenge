
export const updateQuantity = (state: IProductList, currentId: string, action: 'minus' | 'plus') =>
  state.reduce((acc: IProductList, item) => {
    const { quantity, id } = item
    const defaultQuantity = quantity || 1
    const actionResult = action === 'minus' ? defaultQuantity - 1 : defaultQuantity + 1
    if (currentId === id) {
      if (quantity === 1 && action === 'minus') {
        return acc
      }
      return [
        ...acc,
        {
          ...item,
          quantity: actionResult
        }
      ]
    }
    return [
      ...acc,
      item
    ]
  }, [])