import ProductItem from "@/components/Molecules/ProductItem/ProductItem"

const CardList = ({ data }: ICartList) => {

  if (!data?.length) {
    return (
      <div className="flex justify-center mt-5 p-2 mx-4 border-2 rounded-sm border-solid border-slate-500">
        <h2>Nenhum item no carrinho.</h2>
      </div>)
  }
    
  return (
    <ul className="p-2 mx-4 border-2 rounded-sm border-solid border-slate-500">
      {data?.map((product: IProductData, index: number) => {
        const { id, productName, price } = product
        const lastItem = data?.length === index + 1
        return (
          <ProductItem
            key={id}
            quantity={Math.floor(Math.random() * 10)}
            title={productName}
            price={price}
            {...(!lastItem ? { className: 'border-b-2 border-solid border-slate-500' } : {})}
            />
        )}
      )}
    </ul>
  )
}


export default CardList