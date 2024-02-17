import React, { useState } from 'react'
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import { useAppDispatch, useAppSelector } from '../../../../../hooks'
import { IMessage, IOrder } from '../types'
import TableButton from '../../../button/table'
import { Std } from './styled'
import { createConversationAction } from '../../../../../store/conversation/conversation.action'
import { createMessageAction } from '../../../../../store/message/message.action'
import { navigate } from '@reach/router'

const TableOrdersBuyer: React.FC = () => {
  const orderByUser: IOrder[] = useAppSelector(
    (state) => state.order.orderByUser
  )
  const [modal, setModal] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null)
  const dispatch = useAppDispatch()

  const toggleModal = (order: IOrder) => {
    setSelectedOrder(order)
    setModal(!modal)
  }

  const handlerChat = (order: IOrder) => {
    const { user, buyer } = order
    if (user && buyer) {
      let dataMessage: IMessage
      let dataConversation = {
        isSeller: user.isSeller,
        userId: user.id,
        to: buyer.id
      }
      dispatch(createConversationAction(dataConversation)).then((item) => {
        dataMessage = {
          conversationId: item.payload.data.id,
          userId: user.id,
          description:
            'Olá! Agradeço por me contratar, seu pedido ficará pronto em breve!',
          isSeller: user.isSeller
        }
        dispatch(createMessageAction(dataMessage)).then(() => {
          navigate(`message/${dataMessage.conversationId}`)
          navigate(0)
        })
      })
    }
  }

  return (
    <>
      {orderByUser?.length ? (
        <div>
          <Table bordered hover responsive striped>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>E-mail cliente</th>
                <th>Serviço</th>
                <th>Preço</th>
                <th>Solicitação</th>
                <th>Prazo conclusão - dias</th>
                <th>Finalizado</th>
                <th>Detalhes</th>
                <th>Chat</th>
              </tr>
            </thead>
            <tbody>
              {orderByUser.map((item, i) => (
                <tr key={i}>
                  <Std>{item.buyer?.username}</Std>
                  <Std>{item.buyer?.email}</Std>
                  <Std>{item.product?.title}</Std>
                  <Std>{item.price}</Std>
                  <Std>{String(item.createdAt)}</Std>
                  <Std>{item.product?.deliveryTime}</Std>
                  <Std>{item.isCompleted ? 'Sim' : 'Não'}</Std>
                  <td>
                    <TableButton
                      title="Detalhes"
                      onClick={() => toggleModal(item)}
                    />
                  </td>
                  <td>
                    <TableButton
                      title="Chat"
                      onClick={() => handlerChat(item)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalHeader toggle={() => setModal(!modal)}>
              Detalhes do Pedido
            </ModalHeader>
            <ModalBody>
              <p>Título: {selectedOrder?.title}</p>
              <p>Preço: {selectedOrder?.price}</p>
              <p>Data/Hora: {String(selectedOrder?.createdAt)}</p>
              <p>Finalizado: {selectedOrder?.isCompleted ? 'Sim' : 'Não'}</p>
              <p>Pagamento: {selectedOrder?.payment_intent}</p>
              <p>Descrição: {selectedOrder?.description}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={() => setModal(!modal)}>
                Fechar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      ) : (
        <div>Você não possui nenhum pedido.</div>
      )}
    </>
  )
}

export default TableOrdersBuyer
