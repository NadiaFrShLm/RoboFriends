import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';               // CSS файл 
import 'tachyons';                  // библиотека CSS классов
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();
