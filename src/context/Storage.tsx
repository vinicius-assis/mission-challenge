import { createContext } from "react";

const INITIAL_VALUE: Array<any> = [{
  id: '',
  name: '',
  price: '',
  quantity: 0
}]


export const StorageContext = createContext<Array<IProductReducerState | undefined>>(INITIAL_VALUE)