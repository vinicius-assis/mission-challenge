'use client'
import Button from "@/components/Atoms/Button/Button";
import Loading from "@/components/Atoms/Loading/Loading";
import ProductInput from "@/components/Molecules/ProductInput/ProductInput";
import { FormEvent, useState } from "react";

export default function Register() {
  const [products, setProducts] = useState([{}])
  const [registerLoading, setRegisterLoading] = useState(false)

  const handleAppendInput = (event: MouseEvent) => {
    event.preventDefault()
    setProducts((oldValue: any) => [...oldValue, {}])
  }

  const handleRemoveItem = (event: MouseEvent, itemIndex: number) => {
    event.preventDefault()
    setProducts((old) => {
      const filteredValues = old.filter((_, index) => index !== itemIndex)
      return filteredValues
    })
  }

  const handleRegisterProducts = (event: FormEvent) => {
    setRegisterLoading(true)
    event.preventDefault()
    setTimeout(() => {
      sessionStorage.setItem('products', JSON.stringify(products))
      setRegisterLoading(false)
    }, 1000)
  }

  const productLabel = `Produto${products?.length > 1 ? 's' : ''}`

  return registerLoading ? <Loading content={`Cadastrando ${productLabel}`} /> : (
    <form className="container mx-auto">
      {products?.map((_, index: number, array) => (
        <ProductInput
          key={index}
          onAppendInput={handleAppendInput}
          onRemoveItem={(e: MouseEvent) => handleRemoveItem(e, index)}
          disabledRemove={array.length === 1}
        />
      ))}
      <div className="flex justify-end">
        <Button onClick={handleRegisterProducts} type="submit" variant="success" content={`Cadastrar ${productLabel}`} />
      </div>
    </form>
  )
}
