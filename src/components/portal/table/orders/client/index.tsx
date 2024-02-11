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
import { IOrder } from '../types'
import TableButton from '../../../button/table'
import { Std } from './styled'
import { navigate } from '@reach/router'
import { createConversationAction } from '../../../../../store/conversation/conversation.action'
import { createMessageAction } from '../../../../../store/message/message.action'

const TableOrdersClient: React.FC = () => {
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
    let dataMessage;
    let dataConversation = {
      isSeller: order.user.isSeller,
      userId: order.user._id,
      to: order.buyer._id
    }
    dispatch(createConversationAction(dataConversation)).then((item) => {
      dataMessage = {
        conversationId: item.payload.data._id,
        userId: order.user._id,
        description: 'Olá! Agradeço por me contratar, seu pedido ficará pronto em breve!',
        isSeller: order.user.isSeller
      }
      dispatch(createMessageAction(dataMessage)).then((item) => {
        navigate(`message/${dataMessage.conversationId}`)
        navigate(0)
      })
    })
  }

  return (
    <>
      {orderByUser?.length ? (
        <div>
          <Table bordered hover responsive striped>
            <thead>
              <tr>
                <th>Desenvolvedor</th>
                <th>E-mail</th>
                <th>Serviço</th>
                <th>Data da Solicitação</th>
                <th>Tempo de entrega</th>
                <th>Transação completa</th>
                <th>Detalhes</th>
                <th>Chat</th>
              </tr>
            </thead>
            <tbody>
              {orderByUser.map((item, i) => (
                <tr key={i}>
                  <Std>{item.user.name}</Std>
                  <Std>{item.user.email}</Std>
                  <Std>{item.product.title}</Std>
                  <Std>{item.createdAt}</Std>
                  <Std>{item.product.deliveryTime}</Std>
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
              <p>Data/Hora: {selectedOrder?.createdAt}</p>
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

export default TableOrdersClient
