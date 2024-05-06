import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from '../pages/home';

import './index.css';
import { QueryProvider, ReduxProvider } from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <QueryProvider>
        <Home />
      </QueryProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
