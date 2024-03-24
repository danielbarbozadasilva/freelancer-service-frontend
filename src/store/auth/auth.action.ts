import http from '../../config/http'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { removeToken, saveAuth } from '../../config/auth'
import { authService, registerService } from '../../services/auth.service'
import { ISignIn, ISignUp } from './types'
import { navigate } from '@reach/router'

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
          navigate('/dashboard/users')
        } else {
          navigate('/')
        }
        toast.success(`${result.data.message} ${data.data.username}`)
        return data
      }
    } catch (error: any) {
      toast.error(error.response.data.message)
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
      const result = await registerService(data, config)
      toast.success(`${result.data.message}`)
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
)

export const logoutAction = () => {
  removeToken()
}
