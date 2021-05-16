import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { SnackbarProvider } from 'notistack';


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.common['token'] = localStorage.getItem('JWTtoken');

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      autoHideDuration={3000}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

