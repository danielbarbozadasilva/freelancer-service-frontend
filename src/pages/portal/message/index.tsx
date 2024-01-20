import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from "../../../hooks";
import { finishLoadingMessage, listMessage, loadingMessage, createMessage } from "../../../store/message/message.reducer";
import { listByIdMessageAction, createMessageAction } from "../../../store/message/message.action";
import FormMessage from '../../../components/portal/message'
import { IMessage, PageTitle } from './types';

const Message: React.FC<PageTitle> = ({ title }) => {  
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

  const submitForm = async (form: IMessage) => {
    dispatch(loadingMessage())
    await createMessageAction(form).then((result) => {
      if (result) {
        dispatch(createMessage(result))
      }
      dispatch(finishLoadingMessage())
    })
    dispatch(loadingMessage())
    await listByIdMessageAction(id as string).then((result) => {
      if (result) {
        dispatch(listMessage(result))
      }
      dispatch(finishLoadingMessage())
    })
  }
  
  return (
    <>
      <Helmet title={title} />
      <FormMessage submit={submitForm} />
    </>
  )
}
export default Message
