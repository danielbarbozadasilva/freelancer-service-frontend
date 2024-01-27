import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import OrdersForm from '../../../../components/portal/auth/Orders/index'
import Loading from '../../../../components/loading/page/index'
// import {
//   listByIdClientAction,
//   updateClientOrdersAction
// } from '~/store/client/client.action'
import Title from '../../../../components/dashboard/title/index'
import { Helmet } from 'react-helmet'

const Orders = (props: any) => {
  // const dispatch = useDispatch()
  // const clientid = useSelector((state) => state.auth.clientid)
  // const userid = useSelector((state) => state.auth.userid)
  // const loading = useSelector((state) => state.auth.loading)

  // const submitForm = (form) => {
  //   dispatch(updateClientOrdersAction(clientid, userid, form))
  // }

  // if (loading) {
  //   return <Loading />
  // }

  // useEffect(() => {
  //   dispatch(listByIdClientAction(clientid))
  // }, [dispatch])

  const actions = () => null

  return (
    <>
      <Helmet title={props.title} />
      <Title title="Pedidos" actions={actions} />
      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti illum voluptate, eveniet sunt rerum error culpa voluptates fugit ut provident sed ad, dignissimos incidunt libero. Quidem accusamus maiores asperiores. Itaque!</h1>
      {/* <OrdersForm submit={submitForm} /> */}
    </>
  )
}

export default Orders
