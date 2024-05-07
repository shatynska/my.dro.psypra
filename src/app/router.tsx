import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from '~/pages/error';
import { LoginPage } from '~/pages/login';

import { RootLayout } from './layouts/RootLayout';

// TODO Implement lazy loadings for routes
export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);
