import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom"
import './index.css';
import App from './App';
import Sobre from "./pages/Sobre/Sobre";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" >
        <App />
      </Route>
      <Route path="/sobre">
        <Sobre />
      </Route>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
