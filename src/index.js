import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
