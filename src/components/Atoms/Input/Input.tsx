const Input = ({ currency }: any) => {
  const placeholder = currency ? '0.00' : 'Insira o nome do Produto'

  return (
    <div>
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {currency && <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">R$</span>
        </div>}
        <input
          className="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="price"
          id="price"
          placeholder={placeholder}
          />
      </div>
    </div>
  )
}

export default Input
