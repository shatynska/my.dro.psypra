import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';
import {
  BrowserRouterProvider,
  QueryProvider,
  ReduxProvider,
} from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <QueryProvider>
        <BrowserRouterProvider />
      </QueryProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
