import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { IMessage, IUser, PageType } from './types'
import './styled.scss'
import Loading from '../../loading/page'
import BasicButton from '../button/basic'
import { listByIdMessageAction } from '../../../store/message/message.action'

const FormMessage: React.FC<PageType> = ({ submit }) => {
  const message: IMessage[] = useAppSelector((state) => state.message.all)
  const user: IUser = useAppSelector((state) => state.auth.user)
  const loading: boolean = useAppSelector((state) => state.message.loading)
  const [form, setForm] = useState({} as IMessage)
  const dispatch = useAppDispatch()
  const { id } = useParams<string>()

  useEffect(() => {
    if (id) {
      dispatch(listByIdMessageAction(id))
    }
  }, [dispatch])


  const handleChange = ({ target }: any) => {
    const { value, name } = target
    setForm({
      ...form,
      userId: user.id,
      conversationId: message[0].conversationId,
      [name]: value
    })
  }

  const submitForm = () => {
    submit(form)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Mensagens</Link>
        </span>
        <div className="messages">
          {message.map((item: IMessage, i:number) => (
            <div
              className={item.userId === user.id ? 'owner item' : 'item'}
              key={i}
            >
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="write">
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Escreva uma mensagem..."
          />
          <BasicButton title="Enviar" onClick={submitForm} />
        </div>
      </div>
    </div>
  )
}

export default FormMessage
