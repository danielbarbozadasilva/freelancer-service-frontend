import http from '../../config/http'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { navigate } from '@reach/router'
import { toast } from 'react-toastify'
import { removeToken, saveAuth } from '../../config/auth'
import { authService, registerService } from '../../services/auth.service'
import { ISignIn, ISignUp } from './types'

export const signInAction = createAsyncThunk(
  'auth/signin',
  async (data: ISignIn) => {
    try {
      const result = await authService(data)
      if (result?.data) {
        const { data } = result.data
        saveAuth(data)
        http.defaults.headers.token = data.token
        if (data.data.permissions.includes('admin')) {
          navigate('/dashboard/clients')
          navigate(0)
        } else {
          navigate('/')
          navigate(0)
        }
        toast.success(`Seja Bem-vindo(a)! ${data.data.username}`)
        return data
      }
    } catch (error: any) {
      toast.error('E-mail ou senha inválidos!')
    }
  }
)

export const signUpAction = createAsyncThunk(
  'auth/signup',
  async (data: ISignUp) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      await registerService(data, config)
      toast.success('Usuário criado com sucesso!')
    } catch (error: any) {
      toast.error('Ocorreu um erro!')
    }
  }
)

export const logoutAction = () => {
  removeToken()
}
