import { createBrowserRouter } from 'react-router-dom';

import { BriefPage } from '~/pages/brief';
import { ErrorPage } from '~/pages/error';
import { LoginPage } from '~/pages/login';
import { MainPage } from '~/pages/main';
import { PhotoPage } from '~/pages/photo';

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
          {
            path: ':specialist/photo',
            element: <PhotoPage />,
          },
          {
            path: ':specialist/brief',
            element: <BriefPage />,
          },
        ],
      },
    ],
  },
]);
