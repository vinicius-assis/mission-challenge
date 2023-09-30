import { useState } from "react"
import { StorageContext } from "./Storage"

export const StorageProvider = ({ children }: any) => {
  const [products, setProducts] = useState()

  return (
    <StorageContext.Provider value={{products}}>
      {children}
    </StorageContext.Provider>
  )
}