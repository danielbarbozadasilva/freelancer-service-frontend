export interface ListOrdersProps {
  open: boolean
  close: () => void
  orders: IOrder[]
}

export interface IOrder {
  id: string
  description: string
  title: string
  price: number
  isCompleted: boolean
  isSeller: boolean
  payment_intent: string
  createdAt: Date
  updatedAt: Date
}
