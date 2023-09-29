const DEFAULT_STYLE = 'mr-1 py-1 px-3 rounded-sm bg-gray-300 text-black text-sm font-medium text-right'

const ProductPriceLabel = ({ price, minWith = '80px', className = '' }: IProductPriceLabel) => {
  return (
    <p
      style={{ minWidth: minWith}}
      className={`${DEFAULT_STYLE} ${className}`}
    >
      {`R$${price}`}
    </p>
  )
}

export default ProductPriceLabel
