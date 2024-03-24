import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'
import { Provider } from 'react-redux'
import store from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainRoutes from './routers'
import { ThemeProvider } from 'styled-components'
import theme from './plugins/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <MainRoutes />
      </React.StrictMode>
      <ToastContainer />
    </ThemeProvider>
  </Provider>
)
