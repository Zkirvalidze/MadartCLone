import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Layout from './components/Layout';
import { StateContext } from './context/StateContext';
import { store } from './app/store';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StateContext>
          <Layout>
            <App />
          </Layout>
        </StateContext>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
