import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter  } from "react-router-dom";
import { ContextProvider } from './context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContextProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);
