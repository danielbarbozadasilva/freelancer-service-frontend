import React, { useEffect, useCallback } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
// import {
//   listAllClientAction,
//   removeClientAction
// } from '../../../../store/client/client.action'
import Title from '../../../../components/dashboard/title/index'
import DataList from '../../../../components/dashboard/admin/client/index'
import DialogModal from '../../../../components/dialog'
import Remove from '../../../../components/dashboard/admin/client/form/remove/index'
import { StyleContainer, SearchContainer } from '../styled'
import { Helmet } from 'react-helmet'

const Client = (props:any) => {
  const dispatch = useDispatch()
  // const [modal, setModal] = React.useState({})
  // const clients = useSelector((state) => state.client.all)
  // const loading = useSelector((state) => state.client.loading)

  // const callClient = useCallback(() => {
  //   dispatch(listAllClientAction())
  // }, [dispatch])

  // useEffect(() => {
  //   callClient()
  // }, [callClient])

  // const toogleModal = (type = 1, id = null) => {
  //   setModal({ type, id, status: true })
  // }

  // const closeModal = () => setModal({ status: false, type: 1 })

  // const submitForm = (form) => {
  //   dispatch(removeClientAction(modal.id)).then(() => setModal(false))
  // }

  // const actions = () => (
  //   <StyleContainer>
  //     <SearchContainer>
  //       <Search />
  //     </SearchContainer>
  //   </StyleContainer>
  // )
  const actions = () => null

  return (
    <>
      {/* <Helmet title={props.title} />
      <Title title="Clientes" subTitle="Página de Clientes" actions={actions} />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          <DataList data={clients} loading={loading} modal={toogleModal} />
        </Grid>
      </Grid>

      <DialogModal
        title="Cliente"
        open={modal.status || false}
        close={closeModal}
      >
        <>
          <Remove open={!!modal} close={closeModal} remove={submitForm} />
        </>
      </DialogModal> */}
      
      <Helmet title={props.title} />
      <Title title="Cliente" actions={actions} />
      <h1>1111Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti illum voluptate, eveniet sunt rerum error culpa voluptates fugit ut provident sed ad, dignissimos incidunt libero. Quidem accusamus maiores asperiores. Itaque!</h1>
      {/* <ProfileForm submit={submitForm} /> */}
    
    </>
  )
}

export default Client
