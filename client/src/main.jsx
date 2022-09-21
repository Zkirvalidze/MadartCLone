import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Layout from './components/Layout';
import { StateContext } from './context/StateContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContext>
        <Layout>
          <App />
        </Layout>
      </StateContext>
    </BrowserRouter>
  </React.StrictMode>
);
