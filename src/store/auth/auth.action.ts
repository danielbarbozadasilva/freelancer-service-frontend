import { removeToken, saveAuth } from '../../config/auth'
import { authService, registerService } from '../../services/auth.service'
import http from '../../config/http'
import { toast } from 'react-toastify'
import { navigate } from '@reach/router'

export const signInAction = async (data: object) => {
  try {
    const result = await authService(data)
    if (result?.data) {
      const { data } = result.data
      saveAuth(data)
      http.defaults.headers.token = data.token
      if (data.data.permissions.includes('admin')) {
        navigate('/dashboard/profile')
        navigate(0)
      } else {
        navigate('/')
      }
      toast.success(`Seja Bem-vindo(a)! ${data.data.username}`)
      return data
    }
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
  }
}

export const signUpAction = async (data: object) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    await registerService(data, config)
    toast.success('Usuário criado com sucesso!')
    return true
  } catch (error: any) {
    toast.error(error?.response?.data?.message)
    return false
  }
}

export const logoutAction = () => {
  removeToken()
}
