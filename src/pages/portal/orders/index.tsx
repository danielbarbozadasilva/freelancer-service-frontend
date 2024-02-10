import React, { useEffect } from 'react'
import { listByIdUserOrdersAction } from '../../../store/order/order.action'
import TableSubscribers from '../../../components/portal/table/orders/index'
import { TitlePage, SContainer } from '../../../assets/styled'
import { PageTitle } from "./types";
import { Helmet } from "react-helmet";
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { IUser } from '../messages/types'

const OrdersPage: React.FC<PageTitle> = ({ title }) => {
  const dispatch = useAppDispatch()
  const user: IUser = useAppSelector((state) => state.auth.user)

  useEffect(() => {
    dispatch(listByIdUserOrdersAction(user))
  }, [dispatch])

  return (
    <>
      <Helmet title={title} />
      <SContainer>
        <TitlePage>Pedidos</TitlePage>
        <TableSubscribers />
      </SContainer>
    </>
  )
}

export default OrdersPage

