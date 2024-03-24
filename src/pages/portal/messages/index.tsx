import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { PageTitle, IDataSendUpdate, IDataSend, IUser } from './types'
import {
  listAllConversationAction,
  updateConversationAction
} from '../../../store/conversation/conversation.action'
import { Helmet } from 'react-helmet'
import FormMessages from '../../../components/portal/messages'
import { SContainer, TitlePage } from '../../../assets/styled'

const Messages: React.FC<PageTitle> = ({ title }) => {
  const user: IUser = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch()

  const info: IDataSend = {
    isSeller: user.isSeller,
    userId: user.id
  }

  useEffect(() => {
    dispatch(listAllConversationAction(info))
  }, [dispatch])

  const handleSubmit = (data: IDataSendUpdate): void => {
    dispatch(updateConversationAction(data)).then(() => {
      dispatch(listAllConversationAction(info))
    })
  }

  return (
    <>
      <Helmet title={title} />
      <SContainer>
        <TitlePage>Mensagens</TitlePage>
        <FormMessages submit={handleSubmit} />
      </SContainer>
    </>
  )
}

export default Messages
