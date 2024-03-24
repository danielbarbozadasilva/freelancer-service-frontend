import React, { useEffect, useState } from 'react'
import Title from '../../../../components/dashboard/title/index'
import DataListComponent from '../../../../components/dashboard/admin/orders/index'
import { Helmet } from 'react-helmet'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { OrdersProps, IModal, IOrder } from './types'
import { listAllOrdersAction } from '../../../../store/order/order.action'

const Orders: React.FC<OrdersProps> = (props) => {
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState<IModal>({})
  const orders: IOrder[] = useAppSelector((state) => state.order.all)
  const loading: boolean = useAppSelector((state) => state.user.loading)

  useEffect(() => {
    dispatch(listAllOrdersAction())
  }, [dispatch])

  const toggleModal = (type = 1, data: IOrder): void => {
    setModal({ type, status: true })
  }

  const actions = () => null

  return (
    <>
      <Helmet title={props.title} />
      <Title title="Pedidos" actions={actions} />
      {!orders?.length ? (
        <h6>Não há pedidos disponiveis</h6>
      ) : (
        <DataListComponent
          data={orders}
          loading={loading}
          modal={toggleModal}
        />
      )}
    </>
  )
}

export default Orders
