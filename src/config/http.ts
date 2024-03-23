import axios from 'axios'
import { getToken } from './auth'
import { logoutAction } from '../store/auth/auth.action'
import { navigate } from '@reach/router'
import { toast } from 'react-toastify'

const http = axios.create({
  baseURL: process.env.REACT_APP_API
})

http.defaults.headers['content-type'] = 'application/json'

if (getToken()) {
  http.defaults.headers.token = getToken()
}

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.code === 'ERR_NETWORK') {
      navigate('/error500')
    }

    switch (error.response?.status) {
      case 401:
        if (getToken()) {
          logoutAction()
          navigate('/signin')
          toast.warning('Token temporário expirado!')
        }
        break
      case 403:
        navigate('/error403')
        break
      case 404:
        navigate('/error404')
        break
      case 500:
        navigate('/error500')
        break
      default:
        break
    }
    
    window.location.reload()
    return Promise.reject(error)
  }
)

export default http
