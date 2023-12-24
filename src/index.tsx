import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routers'
import { Provider } from 'react-redux'
import store from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <RouterProvider router={MainRoutes()} />
    <ToastContainer />
  </Provider>
)
