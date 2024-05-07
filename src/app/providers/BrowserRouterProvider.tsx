import { RouterProvider } from 'react-router-dom';

import { router } from '../router';

export function BrowserRouterProvider() {
  // TODO Refine fallbackElement
  return (
    <RouterProvider router={router} fallbackElement={<p>Завантаження...</p>} />
  );
}
