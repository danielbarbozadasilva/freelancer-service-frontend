import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
import { AccountBox, Group } from '@mui/icons-material';
import PanelLayout from './components/layout/panel/layout-panel';
import Profile from './pages/private/client/profile/index';
import Category from './pages/private/admin/category/index';
import Client from './pages/private/admin/client/index';
import Home from './pages/portal/home';
import Error403 from './pages/error/403';
import Error404 from './pages/error/404';
import Error500 from './pages/error/500';
import Layout from './components/layout/main';
import SignIn from './pages/portal/auth/signin';
import SignUp from './pages/portal/auth/signup';
import MyProductsPage from './pages/portal/myproducts/index';
import AddProductPage from './pages/portal/addProduct';
import OrdersPage from './pages/portal/orders/index';
import Messages from './pages/portal/messages/index';
import Message from './pages/portal/message/index';
import ProductPage from './pages/portal/product/index';
import CategoryProducts from './pages/portal/products/index';
import { useAppSelector } from './hooks';
import { isAuthenticated } from './config/auth';

interface MenuItem {
  title: string;
  icon: JSX.Element;
  route: string;
  visibleMenu: boolean;
  enabled: boolean;
  component: React.ComponentType<{ title: string }>;
  authorization: string[];
}

export const Menu: MenuItem[] = [
  {
    title: 'Perfil',
    icon: <AccountBox />,
    route: '/profile',
    visibleMenu: true,
    enabled: true,
    component: Profile,
    authorization: ['admin'],
  },
  {
    title: 'Categorias',
    icon: <DashboardIcon />,
    route: '/category',
    visibleMenu: true,
    enabled: true,
    component: Category,
    authorization: ['admin'],
  },
  {
    title: 'Clientes',
    icon: <Group />,
    route: '/clients',
    visibleMenu: true,
    enabled: true,
    component: Client,
    authorization: ['admin'],
  },
];

const MainRoutes: React.FC = () => {
  const typeUser = useAppSelector((state) => state.auth.user.permissions)
  const authorizedRoutes = typeUser?.length? Menu.filter((route) => route.authorization.includes(typeUser[0])) : [];

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route index element={<Home title="Home" />} />
                <Route path="signin" element={<SignIn title="Login" />} />
                <Route path="signup" element={<SignUp title="Cadastrar" />} />
                <Route path="error404" element={<Error404 title="Erro 404" />} />
                <Route path="error403" element={<Error403 title="Erro 403" />} />
                <Route path="error500" element={<Error500 title="Erro 500" />} />
                <Route path="myproducts" element={<MyProductsPage title="Produtos" />} />
                <Route path="orders" element={<OrdersPage title="Pedidos" />} />
                <Route path="messages" element={<Messages title="Mensagens" />} />
                <Route path="message/:id" element={<Message title="Mensagens" />} />
                <Route path="add" element={<AddProductPage title="Cadastrar" />} />
                <Route path="product/:id" element={<ProductPage title="Produtos" />} />
                <Route path="category/:id" element={<CategoryProducts title="Produtos" />} />
              </Routes>
            </Layout>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <PanelLayout>
              <Routes>
                {isAuthenticated() && authorizedRoutes.map(({ component: Component, route, title }, i) => (
                  <Route key={i} path={route} element={<Component title={title} />} />
                ))}
                <Route path="*" element={<Error404 title="Ocorreu um erro" />} />
              </Routes>
            </PanelLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default MainRoutes;