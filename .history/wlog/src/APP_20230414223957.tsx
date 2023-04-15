/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-14 22:34:23
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-14 22:34:28
 * @FilePath: \wlog\wlog\src\APP.tsx
 */


// 创建react函数组件
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from '@/redux/store';

const APP