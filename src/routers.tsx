import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/portal/home'
import Error404 from './pages/error/404'
import Error403 from './pages/error/403'
import Layout from './components/layout/main'
import SignIn from './pages/portal/auth/signin'
import SignUp from './pages/portal/auth/signup'

const isAuthenticated = ()=>{
  return true
}

export default function MainRoutes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error404 title="Página não encontrada" />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'SignIn',
          element: isAuthenticated()? <SignIn /> : <Error403 title="Ocorreu um erro" />
        },
        {
          path: 'SignUp',
          element: <SignUp />
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Layout />,
      errorElement: <Error404 title="Página não encontrada" />,
      children: [
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'SignIn',
          element: isAuthenticated()? <SignIn /> : <Error403 title="Ocorreu um erro" />
        },
        {
          path: 'SignUp',
          element: <SignUp />
        }
      ]
    }
  ])
  return router
}
