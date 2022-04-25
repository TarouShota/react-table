import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/tabulator';
import { ReadCsv } from './jstable';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ReactTable } from './components/react-table';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    {/* <App /> */}
    <ReadCsv />
    {/* <ReactTable /> */}
    {/* <Home /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();