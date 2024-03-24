import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../hooks'
import { IConversation, IUser, PageType } from './types'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Table } from 'reactstrap'
import TableButton from '../button/table'
import { Std } from './styled'

const FormMessages: React.FC<PageType> = ({ submit }) => {
  const conversation: IConversation[] = useAppSelector((state) => state.conversation.all)
  const user: IUser = useAppSelector((state) => state.auth.user)
  moment.locale('pt-br')

  const handleRead = (id: string, isSeller: boolean) => {
    submit({ id, isSeller })
  }

  return (
    <>
      {conversation?.length ? (
        <div>
          <Table bordered hover responsive striped>
            <thead>
              <tr>
                <th>{user.isSeller ? 'Comprador' : 'Freelancer'}</th>
                <th>Últimas mensagens</th>
                <th>Data</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {conversation.map((item: IConversation, i: number) => (
                <tr
                  className={
                    !user.isSeller && !item.readByBuyer ? 'active' : ''
                  }
                  key={item.id}
                >
                  <Std>
                    {user.isSeller
                      ? item.buyerId.username
                      : item.sellerId.username}
                  </Std>
                  <Std>
                    <Link to={`/message/${item._id}`} className="link">
                      {item?.lastMessage?.substring(0, 20)}...
                    </Link>
                  </Std>
                  <Std>{moment(item.updatedAt).fromNow()}</Std>
                  <td>
                    <TableButton
                      title="Marcar lido"
                      onClick={() => handleRead(item.id, user.isSeller)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div>Você não possui nenhuma mensagem.</div>
      )}
    </>
  )
}

export default FormMessages
