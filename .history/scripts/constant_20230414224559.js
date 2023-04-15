/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-14 22:45:51
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-14 22:45:56
 * @FilePath: \wlog\scripts\constant.js
 */
// 一些公共常量
const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '../');

const SERVER_HOST = 'localhost';
const SERVER_PORT = 8080;

module.exports = {
  ROOT_PATH,
  SERVER_HOST,
  SERVER_PORT
};
