import ReactDOM from 'react-dom/client';

import React from 'react';

import { queryClient } from '@reactQuery/index';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const element = document.querySelector('#root') as HTMLElement;
if (element === null) throw new Error('Root container missing in index.html');

const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
