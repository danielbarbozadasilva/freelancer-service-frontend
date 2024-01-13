import axios from 'axios'
import { getToken } from './auth'
import store from '../store'
import { logoutAction } from '../store/auth/auth.action'
import { logoutUser } from '../store/auth/auth.reducer'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()
    switch (error.response.status) {
      
      case 401:
        if (!getToken()) {
          logoutAction()
          store.dispatch(logoutUser())
        }
        return Promise.reject(error)
      case 403:
        navigate('/error403')
        return Promise.reject(error)
      case 404:
        navigate('/error404')
        return Promise.reject(error)
      case 500:
        navigate('/error500')
        return Promise.reject(error)
      default:
        return Promise.reject(error)
    }
  }
)

export default http
