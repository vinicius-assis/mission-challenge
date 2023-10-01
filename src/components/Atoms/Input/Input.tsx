import { formatCurrencyToString } from "@/utils/formatCurrency"
import { useState } from "react"

const Input = ({
  name,
  label,
  placeholder = 'Insira o nome do Produto',
  currencySign,
  onChange = undefined
}: IInput) => {
  const [inputValue, setInputValue] = useState('')

  const handleInput = (value: string) => {
    const formatedValue = currencySign ? formatCurrencyToString(value) : value
    setInputValue(formatedValue)
    onChange(formatedValue)
  }

  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-white">{label}</label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {currencySign && <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{currencySign}</span>
        </div>}
        <input
          onChange={(event) => {
            handleInput(event?.target?.value)
          }}
          className={`block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${currencySign ? 'pl-8' : ' pl-1.5'}`}
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          value={inputValue}
          />
      </div>
    </div>
  )
}

export default Input
