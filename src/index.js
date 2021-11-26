import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Button} from './App'
import BootstrapTest from "./BootstrapTest";
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
    text-align: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
      <BigButton as="a">Send</BigButton>
      <BootstrapTest/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
