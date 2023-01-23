import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Layout from './components/Layout';
import { StateContext } from './context/StateContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryCLient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryCLient}>
      <StateContext>
        <Layout>
          <App />
          <ReactQueryDevtools initialIsOpen />
        </Layout>
      </StateContext>
    </QueryClientProvider>
  </BrowserRouter>
);
