const Input = ({ name, label, placeholder = 'Insira o nome do Produto', currencySign }: IInput) => {

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-white">{label}</label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {currencySign && <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{currencySign}</span>
        </div>}
        <input
          className={`block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${currencySign ? 'pl-8' : ' pl-1.5'}`}
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          />
      </div>
    </div>
  )
}

export default Input
