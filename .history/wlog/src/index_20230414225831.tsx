/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-14 22:31:05
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-14 22:58:31
 * @FilePath: \wlog\wlog\src\index.tsx
 */
// 创建react首页
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';



import App from './App';

if (module?.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


