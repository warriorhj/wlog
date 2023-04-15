/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-14 22:45:39
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-14 22:45:39
 * @FilePath: \wlog\scripts\config\env.js
 */
// process: 当前node进程
// process.env: 系统环境的信息
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  isDevelopment,
  isProduction
};
