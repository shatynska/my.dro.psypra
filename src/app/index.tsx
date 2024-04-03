import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryProvider } from '~/shared/ui/QueryProvider';
import { Home } from '../pages/home';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <Home />
    </QueryProvider>
  </React.StrictMode>,
);
