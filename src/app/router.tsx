import { createBrowserRouter } from 'react-router-dom';

import { BriefPage } from '~/pages/brief';
import { ContactsPage } from '~/pages/contacts';
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
        index: true,
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
            path: ':specialist/contacts',
            element: <ContactsPage />,
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
