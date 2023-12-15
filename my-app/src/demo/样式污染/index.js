import React from 'react';
import ReactDOM from 'react-dom/client';
// 全局引入的样式比重是最轻的
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
