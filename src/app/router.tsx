import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from '~/pages/error';
import { LoginPage } from '~/pages/login';
import { MainPage } from '~/pages/main';

import { ProtectedLayout, RootLayout } from './layouts';

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
      {
        element: <ProtectedLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: ':specialist/main',
            element: <MainPage />,
          },
        ],
      },
    ],
  },
]);
