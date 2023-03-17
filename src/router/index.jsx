import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../Layouts';
import { LoginPage, RegisterPage } from '../pages';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
          { path: 'login', element: <LoginPage />,  },
          { path: 'register', element: <RegisterPage /> },
      ]
    },
]);