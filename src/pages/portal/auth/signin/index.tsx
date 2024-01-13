import React from 'react'
import { signInAction } from '../../../../store/auth/auth.action'
import { useAppDispatch } from '../../../../hooks'
import FormSignIn from '../../../../components/portal/auth/signin'
import { TypeSignIn } from '../../../types'
import { Helmet } from 'react-helmet'
import { signInUser, loadingUser } from '../../../../store/auth/auth.reducer'

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch()

  const submitForm = async (form: TypeSignIn) => {
    dispatch(loadingUser())
    const result = await signInAction(form)
    dispatch(signInUser(result))
  }

  return (
    <>
      <Helmet title="Logar" />
      <FormSignIn submit={submitForm} />
    </>
  )
}
export default SignIn
