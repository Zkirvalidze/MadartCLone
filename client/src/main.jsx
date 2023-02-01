import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import Layout from './components/Layout';
import { StateContext } from './context/StateContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      retry: 1,
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <QueryClientProvider client={queryCLient}>
      <StateContext>
        <Layout>
          <App />
          <ReactQueryDevtools initialIsOpen />
        </Layout>
      </StateContext>
    </QueryClientProvider>
  </Router>
);
