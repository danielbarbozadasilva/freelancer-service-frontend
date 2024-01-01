import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainRoutes from './routers'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import theme from './plugins/theme'

const googleFontNunito =
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap'
const googleFontMontserrat =
  'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100&display=swap'
  
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="stylesheet" href={googleFontNunito} />
        <link rel="stylesheet" href={googleFontMontserrat} />
      </Helmet>
      <React.StrictMode>
        <MainRoutes />
      </React.StrictMode>
      <ToastContainer />
    </ThemeProvider>
  </Provider>
)
