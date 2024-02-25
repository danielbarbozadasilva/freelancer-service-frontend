import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks'
import {
  listByIdMessageAction,
  createMessageAction
} from '../../../store/message/message.action'
import FormMessage from '../../../components/portal/message'
import { IMessage, PageTitle } from './types'

const Message: React.FC<PageTitle> = ({ title }) => {
  const dispatch = useAppDispatch()
  const { id } = useParams<string>()

  useEffect(() => {
    if (id) {
      dispatch(listByIdMessageAction(id))
    }
  }, [dispatch])

  const submitForm = (form: IMessage): void => {
    dispatch(createMessageAction(form)).then(() => {
      if (id) {
        dispatch(listByIdMessageAction(id))
      }
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
