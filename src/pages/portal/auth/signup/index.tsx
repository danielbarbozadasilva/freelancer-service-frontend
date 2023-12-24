import React from 'react'
import { signUpAction } from '../../../../store/auth/auth.action'
import { useAppDispatch } from '../../../../hooks'
import FormSignUp from '../../../../components/portal/auth/signup'
import { TypeSignUp } from '../../../types'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import {
  signUpUser,
  loadingUser,
  finishLoadingUser
} from '../../../../store/auth/auth.reducer'

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const submitForm = async (form: TypeSignUp) => {
    dispatch(loadingUser())
    await signUpAction(form).then((result) => {
      if (result) {
        dispatch(signUpUser())
        navigate('/')
      }
      dispatch(finishLoadingUser())
    })
  }

  return (
    <>
      <Helmet title="Cadastrar" />
      <FormSignUp submit={submitForm} />
    </>
  )
}
export default SignUp
