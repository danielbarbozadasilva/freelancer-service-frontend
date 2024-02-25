import React from 'react'
import { signInAction } from '../../../../store/auth/auth.action'
import { useAppDispatch } from '../../../../hooks'
import FormSignIn from '../../../../components/portal/auth/signin'
import { TypeSignIn } from '../../../types'
import { Helmet } from 'react-helmet'
import { PageTitle } from './types'

const SignIn: React.FC<PageTitle> = ({ title }) => {
  const dispatch = useAppDispatch()

  const submitForm = async (form: TypeSignIn) => {
    dispatch(signInAction(form))
  }

  return (
    <>
      <Helmet title={title} />
      <FormSignIn submit={submitForm} />
    </>
  )
}
export default SignIn
