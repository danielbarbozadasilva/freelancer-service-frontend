import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from "../../../hooks";
import { finishLoadingMessage, listMessage, loadingMessage, createMessage } from "../../../store/message/message.reducer";
import { listByIdMessageAction, createMessageAction } from "../../../store/message/message.action";
import FormMessage from '../../../components/portal/message'

const Message: React.FC = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(loadingMessage())
    listByIdMessageAction(id as string).then((result) => {
      if (result) {
        dispatch(listMessage(result))
      }
      dispatch(finishLoadingMessage())
    })
  }, [dispatch])

  
  return (
    <>
      <Helmet title="Cadastrar" />
      <FormMessage />
    </>
  )
}
export default Message
