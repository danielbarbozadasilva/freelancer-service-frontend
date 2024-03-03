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
import { navigate } from '@reach/router'
import { createConversationAction, listByIdConversationAction } from '../../../../../store/conversation/conversation.action'
import { createMessageAction } from '../../../../../store/message/message.action'
import { IDataConversation } from '../types'

const TableOrdersClient: React.FC = () => {
  const orderByUser: IOrder[] = useAppSelector((state) => state.order.orderByUser)
  const [modal, setModal] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null)
  const dispatch = useAppDispatch()

  const toggleModal = (order: IOrder) => {
    setSelectedOrder(order)
    setModal(!modal)
  }

  const handlerChat = (order: IOrder) => {
    if (order.user && order.buyer) {
      let dataMessage: IMessage
      let dataConversation: IDataConversation = {
        isSeller: order.user.isSeller,
        userId: order.user._id,
        to: order.buyer._id
      }      
      dispatch(listByIdConversationAction({ userId: dataConversation.userId, buyerId: dataConversation.to })).then((resp) => {
        if (resp.payload.data[0]._id) {
          navigate(`message/${dataMessage.conversationId}`)
          navigate(0)
        } else {
          dispatch(createConversationAction(dataConversation)).then((item) => {
            if (order.user) {
              dataMessage = {
                conversationId: item.payload.data._id,
                userId: order.user._id,
                description: 'Olá! Bem vindo ao chat, aqui você pode interagir melhor com o Freelancer e tirar todas as suas dúvidas.',
                isSeller: order.user.isSeller
              }
            }
          dispatch(createMessageAction(dataMessage)).then(() => {
            navigate(`message/${dataMessage.conversationId}`)
            navigate(0)
          })
      })
      }
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
                <th>Desenvolvedor</th>
                <th>E-mail</th>
                <th>Serviço</th>
                <th>Data da Solicitação</th>
                <th>Tempo de entrega - Dias</th>
                <th>Transação completa</th>
                <th>Detalhes</th>
                <th>Chat</th>
              </tr>
            </thead>
            <tbody>
              {orderByUser.map((item, i) => (
                <tr key={i}>
                  <Std>{item.user?.name}</Std>
                  <Std>{item.user?.email}</Std>
                  <Std>{item.product?.title}</Std>
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
              <p><strong>Título: </strong>{selectedOrder?.title}</p>
              <p><strong>Preço: </strong>{selectedOrder?.price}</p>
              <p><strong>Data/Hora: </strong>{String(selectedOrder?.createdAt)}</p>
              <p><strong>Transação finalizada: </strong>{selectedOrder?.isCompleted ? 'Sim' : 'Não'}</p>
              <p><strong>Código do Pagamento: </strong>{selectedOrder?.payment_intent}</p>
              <p style={{ wordWrap: 'break-word' }}><strong>Descrição do Pedido: </strong>{selectedOrder?.description}</p>
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
