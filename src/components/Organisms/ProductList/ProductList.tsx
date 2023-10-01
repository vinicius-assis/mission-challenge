import { useContext } from "react"
import { CartContext } from "@/context/CartContext"

import EmptyListMessage from "@/components/Atoms/EmptyListMessage/EmptyListMessage"
import ProductItem from "@/components/Molecules/ProductItem/ProductItem"

interface IProductListProps {
  data: IProductList
}

const ProductList = ({ data }: IProductListProps) => {
  const { dispatch } = useContext(CartContext)

  const handleAddProduct = (item: IProductData) => dispatch({ type: 'ADD_CART', payload: item })

if (!data?.length) {
    return <EmptyListMessage content="Nenhum item cadastrado." />
  }

    
  return (
    <ul className="p-2 mx-4 border-2 rounded-sm border-solid border-slate-500">
      {data?.map((item: IProductData, index: number) => {
        const { id, product: productName, price } = item
        const lastItem = data?.length === index + 1
        return (
          <ProductItem
            key={id}
            title={productName}
            price={price}
            handleAddProduct={() => handleAddProduct(item)}
            hiddenRemoveButton
            {...(!lastItem ? { className: 'border-b-2 border-solid border-slate-500' } : {})}
            />
        )}
      )}
    </ul>
  )
}


export default ProductList