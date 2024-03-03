import React, { useEffect, useState } from 'react'
import {
  listAllClientAction,
  listClientByIdAction,
  removeClientAction,
  updateClientAction
} from '../../../../store/client/client.action'
import Title from '../../../../components/dashboard/title/index'
import DataListComponent from '../../../../components/dashboard/admin/client/index'
import DialogModal from '../../../../components/dialog/index'
import FormClientUpdate from '../../../../components/dashboard/admin/client/form/update/index'
import Remove from '../../../../components/dashboard/admin/client/form/remove/index'
import { Helmet } from 'react-helmet'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { ClientProps, IModal, UserInterface } from './types'

const Client: React.FC<ClientProps> = (props) => {
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState<IModal>({})
  const client: UserInterface[] = useAppSelector((state) => state.client.all)
  const clientById: UserInterface = useAppSelector(
    (state) => state.client.clientid
  )
  const loading: boolean = useAppSelector((state) => state.client.loading)

  useEffect(() => {
    dispatch(listAllClientAction())
  }, [dispatch])

  const toggleModal = (type = 1, id: string): void => {
    if (id) {
      dispatch(listClientByIdAction(id)).then(() =>
        setModal({ type, id, status: true })
      )
    } else {
      setModal({ type, id, status: true })
    }
  }

  const closeModal = () => setModal({ status: false, type: 1 })

  const deleteClient = (): void => {
    if (modal?.id) {
      dispatch(removeClientAction(modal?.id)).then(() => {
        setModal({ status: false })
        dispatch(listAllClientAction())
      })
    }
  }

  const updateClient = (form: FormData): void => {
    dispatch(updateClientAction({ id: modal?.id, data: form })).then(() => {
      setModal({ status: false })
      dispatch(listAllClientAction())
    })
  }

  const actions = () => null

  return (
    <>
      <Helmet title={props.title} />
      <Title title="Cliente" actions={actions} />
      {!client?.length ? (
        <h6>Não há clientes disponiveis</h6>
      ) : (
        <DataListComponent
          data={client}
          loading={loading}
          modal={toggleModal}
        />
      )}
      <DialogModal
        title="Cliente"
        open={modal.status || false}
        close={closeModal}
      >
        <>
          {modal.type === 1 ? (
            <FormClientUpdate submit={updateClient} data={clientById} />
          ) : modal.type === 2 ? (
            <Remove open={!!modal} close={closeModal} remove={deleteClient} />
          ) : null}
        </>
      </DialogModal>
    </>
  )
}

export default Client
