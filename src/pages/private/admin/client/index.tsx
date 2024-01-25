import React, { useCallback, useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import {
  listAllClientAction,
  listClientByIdAction,
  removeClientAction,
  updateClientAction
} from '../../../../store/client/client.action'
import Title from '../../../../components/dashboard/title/index'
import DataList from '../../../../components/dashboard/admin/client/index'
import DialogModal from '../../../../components/dialog/index'
import FormClientUpdate from '../../../../components/dashboard/admin/client/form/update/index'
import Remove from '../../../../components/dashboard/admin/client/form/remove/index'
import { Helmet } from 'react-helmet'
import {
  deleteClient,
  finishLoadingClient,
  listAllClient,
  listByIdClient,
  loadingClient,
  updateClient
} from '../../../../store/client/client.reducer'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { ClientProps, IModal } from './types'

const Client: React.FC<ClientProps> = (props) => {
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState<IModal>({})
  const client = useAppSelector((state) => state.client.all)
  const clientById = useAppSelector((state) => state.client.clientid)
  const loading = useAppSelector((state) => state.client.loading)

  const callClients = useCallback(() => {
    dispatch(loadingClient())
    listAllClientAction().then((result) => {
      if (result) {
        dispatch(listAllClient(result))
      }
      dispatch(finishLoadingClient())
    })
  }, [dispatch])

  useEffect(() => {
    callClients()
  }, [callClients])

  const toggleModal = (type = 1, data: any = {}) => {
    const id = data?.id || null
    if (id){
      dispatch(loadingClient())
      listClientByIdAction(id).then((result) => {
        if (result) {
          dispatch(listByIdClient(result))
        }
        dispatch(finishLoadingClient())
        setModal({ type, id, status: true })
      })
    } else {
      setModal({ type, id, status: true })
    }
  }

  const closeModal = () => setModal({ status: false, type: 1 })

  const submitForm = async (form: any) => {
    switch (modal.type) {
      case 1:
        await updateClientAction(modal?.id as string, form).then(() => {
          dispatch(loadingClient())
          dispatch(updateClient())
          dispatch(finishLoadingClient())
        })
        setModal({ status: false })
        return

      case 2:
        await removeClientAction(modal.id as string).then(() => {
          dispatch(loadingClient())
          dispatch(deleteClient(modal.id as any))
          dispatch(finishLoadingClient())
        })
        setModal({ status: false })
        callClients()
        return

      default:
        return false
    }
  }

  const actions = () => null

  return (
    <>
      <Helmet title={props.title} />
      <Title title="Cliente" actions={actions} />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          {!client?.length ? (
            <h6>Não há clientes disponiveis</h6>
          ) : (
            <DataList data={client} loading={loading} modal={toggleModal} />
          )}
        </Grid>
      </Grid>

      <DialogModal
        title="Cliente"
        open={modal.status || false}
        close={closeModal}
      >
        <>
          {modal.type === 1 ? (
            <FormClientUpdate submit={submitForm} data={clientById} />
          ) : modal.type === 2 ? (
            <Remove
              open={!!modal}
              close={closeModal}
              remove={submitForm as any}
            />
          ) : null}
        </>
      </DialogModal>
    </>
  )
}

export default Client
