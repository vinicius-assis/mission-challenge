import ProductItem from "@/components/Molecules/ProductItem/ProductItem"

const ProductList = ({ data }: IProductList) => {

  if (!data?.length) {
    return (
      <div className="flex justify-center mt-5 p-2 mx-4 border-2 rounded-sm border-solid border-slate-500">
        <h2>Nenhum item cadastrado.</h2>
      </div>)
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
            hiddenRemoveButton
            {...(!lastItem ? { className: 'border-b-2 border-solid border-slate-500' } : {})}
            />
        )}
      )}
    </ul>
  )
}


export default ProductList