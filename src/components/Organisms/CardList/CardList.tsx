import EmptyListMessage from "@/components/Atoms/EmptyListMessage/EmptyListMessage"
import TotalCartDisplay from "@/components/Atoms/TotalCartDisplay/TotalCartDisplay"
import ProductItem from "@/components/Molecules/ProductItem/ProductItem"
import { CartContext } from "@/context/CartContext"
import { getTotalCart } from "@/utils/getTotalCart"
import { useContext, useMemo } from "react"

interface ICardListProps {
  cartItems: IProductList
}


const CardList = ({ cartItems }: ICardListProps) => {
  const { dispatch } = useContext(CartContext)

  const increaseProductQuantity = (item: IProductData) => dispatch({ type: 'ADD_CART', payload: item })
  const decreaseProductQuantity = (item: IProductData) => dispatch({ type: 'REMOVE_ITEM', payload: item })

  const totalCart = useMemo(() => {
    return getTotalCart(cartItems)
  }, [cartItems])

  if (!cartItems?.length) {
    return <EmptyListMessage content="Carrinho vazio." />
  }

  return (
    <ul className="p-2 mx-4 border-2 rounded-sm border-solid border-slate-500">
      {cartItems?.map((product: IProductData) => {
        const { id, product: productName, quantity, price } = product

        return (
          <ProductItem
            key={id}
            title={productName}
            price={price}
            quantity={quantity}
            handleAddProduct={() => increaseProductQuantity(product)}
            handleDescreaseProduct={() => decreaseProductQuantity(product)}
            className="border-b-2 border-solid border-slate-500"
            />
        )}
      )}
      <TotalCartDisplay content={totalCart} />
    </ul>
  )
}


export default CardList