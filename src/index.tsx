import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/reset.css';
import './index.css';
// import { prefetchSubApp } from './qiankun';
// prefetchSubApp()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App />
);

reportWebVitals(console.log); 