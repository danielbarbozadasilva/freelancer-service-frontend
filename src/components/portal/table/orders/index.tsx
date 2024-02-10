import React, { useState } from 'react'
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import { useAppSelector } from '../../../../hooks'
import { IOrder } from './types'
import TableButton from '../../button/table'
import { Std } from './styled'

const TableSubscribers: React.FC = () => {
  const orderByUser: IOrder[] = useAppSelector((state) => state.order.orderByUser)
  const [modal, setModal] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null)

  const toggleModal = (order: IOrder) => {
    setSelectedOrder(order)
    setModal(!modal)
  }

  return (
    <>
      {orderByUser?.length ? (
        <div>
          <Table bordered hover responsive striped>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Data/Hora</th>
                <th>Finalizado</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {orderByUser.map((item, i) => (
                <tr key={i}>
                  <Std>{item.title}</Std>
                  <Std>{item.price}</Std>
                  <Std>{item.createdAt}</Std>
                  <Std>{item.isCompleted ? 'Sim' : 'Não'}</Std>
                  <td>
                    <TableButton title="Detalhes" onClick={() => toggleModal(item)} />
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

export default TableSubscribers
