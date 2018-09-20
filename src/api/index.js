/*
包含多个接口请求函数的模块 函数返回值还是promise
 */

import ajax from './ajax'

const configBase = '';

//请求注册接口
export const reqRegister = ({username,password,type} )=> ajax(configBase +'/register',{username,password,type},'POST');


//请求登录接口
export const reqLogin = ({username,password} )=> ajax(configBase + '/login',{username,password},'POST');


//请求更新用户接口
export const reqUpdateUser = (user )=> ajax(configBase + '/update',user,'POST');


