// Import necessary components and functions
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
import { AccountBox, Group } from '@mui/icons-material';
import PanelLayout from './components/layout/panel/layout-panel';
import Profile from './pages/private/client/profile/index';
import Category from './pages/private/admin/category/index';
import Client from './pages/private/admin/client/index';
import Home from './pages/portal/home'
import Error403 from './pages/error/403';
import Error404 from './pages/error/404';
import Error500 from './pages/error/500';
import Layout from './components/layout/main';
import SignIn from './pages/portal/auth/signin';
import SignUp from './pages/portal/auth/signup';

export const Menu = [
  {
    title: 'Perfil',
    icon: <AccountBox />,
    route: '/profile',
    visibleMenu: true,
    enabled: true,
    component: Profile,
    authorization: ['client']
  },
  {
    title: 'Categorias',
    icon: <DashboardIcon />,
    route: '/category',
    visibleMenu: true,
    enabled: true,
    component: Category,
    authorization: ['administrator']
  },
  {
    title: 'Clientes',
    icon: <Group />,
    route: '/clients',
    visibleMenu: true,
    enabled: true,
    component: Client,
    authorization: ['administrator']
  }
]

const MainRoutes = () => {
  const isAuthenticated = true;
  const typeUser = ''; 
 
  const rotasAutorizadas = Menu;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="SignIn" element={isAuthenticated ? <SignIn /> : <Error403 title="Ocorreu um erro" />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Error404" element={<Error404 title="" />} />
          <Route path="Error403" element={<Error403 title="" />} />
          <Route path="Error500" element={<Error500 title="" />} />
        </Route>
        <Route path="/" element={<PanelLayout />}>
          {rotasAutorizadas.map(({ component: Component, route, title }, i) => (
            <Route key={i} path={route} element={<Component title={title} />} />
          ))}
          <Route path="*" element={<Error404 title="Ocorreu um erro" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoutes;