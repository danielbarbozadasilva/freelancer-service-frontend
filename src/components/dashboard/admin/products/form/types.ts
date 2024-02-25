import { IOrders, IProduct } from "../types"

export interface IProductModal {
  open: boolean
  data: IProduct
}

export interface DataListProps {
  data: IOrders[]
  modal: any
  loading: boolean
}

