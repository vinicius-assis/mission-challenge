import { useContext, useState } from "react"
import { v4 as uuid } from 'uuid'

import Button from "@/components/Atoms/Button/Button"
import Loading from "@/components/Atoms/Loading/Loading"
import ProductInput from "@/components/Molecules/ProductInput/ProductInput"
import { ProductContext } from "@/context/ProductContext"

const DEFAULT_FIELD = {
  product: '',
  price: ''
}

const ProductForm = () => {
  const [products, setProducts] = useState<Array<IProductData>>([{ id: uuid(), ...DEFAULT_FIELD}])
  const { dispatch } = useContext(ProductContext)

  const [registerLoading, setRegisterLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const productLabel = `Produto${products?.length > 1 ? 's' : ''}`

  const handleAddProductField = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setProducts((oldValue) => [...oldValue, { id: uuid(), ...DEFAULT_FIELD}])
  }

  const handleRemoveProductField = (itemIndex: number) => (event: React.MouseEvent<HTMLElement>) =>  {
    event.preventDefault()
    setProducts((oldValue) => {
      const filteredValues = oldValue.filter((_: unknown, index: number) => index !== itemIndex)
      return filteredValues
    })
  }

  const handleUpdateFieldValue = (index: number) => (field: string, value: string) => {
    const newProducts = [...products]
    newProducts[index] = {
      ...products[index],
      [field]: value
    }
    setProducts(newProducts)
  }

  const handleRegisterProducts = (event: React.FormEvent) => {
    event.preventDefault()
    setRegisterLoading(true)
    try {
      const filteredProducts = products?.filter((item) => item.price && item.product)
      dispatch({ type: 'REGISTER_PRODUCTS', payload: filteredProducts })
      setSuccessMessage(true)
    } catch (error) {
      throw `An error occurred: ${error}`
    }
    setTimeout(() => {
      setRegisterLoading(false)
    }, 1000)
  }

  if (successMessage) {
    return (
      <div className="container">
        <h4 className="text-base font-semibold mb-4 text-center">Lista cadastrada com sucesso!</h4>
        <div className="flex space-x-4 w-full justify-center">
          <Button to="/" content="Voltar para lista" />
          <Button onClick={() => setSuccessMessage(false)} variant="success" content="Cadastrar mais produtos" />
        </div>
      </div>
    )
  }


  return registerLoading ? <Loading content={`Cadastrando ${productLabel}`} /> : (
    <form>
      {products?.map((_, index: number, array) => (
        <ProductInput
          key={index}
          addProductField={handleAddProductField}
          removeField={handleRemoveProductField(index)}
          disabledRemove={array.length === 1}
          handleChange={handleUpdateFieldValue(index)}
          noLabels={index !== 0}
        />
      ))}
      <div className="flex justify-end">
        <Button onClick={handleRegisterProducts} type="submit" variant="success" content={`Cadastrar ${productLabel}`} />
      </div>
    </form>
  )
}

export default ProductForm