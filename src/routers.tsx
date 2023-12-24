import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/portal/home'
import Error404 from './pages/error/404'
import Layout from './components/layout/main'
import SignIn from './pages/portal/auth/signin'
import SignUp from './pages/portal/auth/signup'

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
          element: <SignIn />
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
