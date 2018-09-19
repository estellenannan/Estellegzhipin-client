
//包含n个action creator 函数的模块
//同步action：对象
//异步action：dispatch函数
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER
} from './action-types';

import {
  reqRegister,
  reqLogin,
  reqUpdateUser
} from "../api/index";


//注册登录成功了的同步action
const authSuccess = user => ({type:AUTH_SUCCESS,data:user} );

// 接收用户的同步action
const receiveUser = user => ({type:RECEIVE_USER,data:user});

// 重置用户的同步action
const resetUser = msg => ({type:RESET_USER,data:msg});

//注册登录失败了的同步action
const errorMsg = msg => ({type:ERROR_MSG,data:msg});


//注册的异步action
export function register({username,password,password2,type}) {
  //做表单验证 同步
  if (!username) {
    return errorMsg('请指定用户名');
  } else if (!password) {
    return errorMsg('请指定密码');
  } else if (!password2 === password) {
    return errorMsg('请确认密码');
  } else if (!type) {
    return errorMsg('请确定用户类型');
  }


  return async dispatch => {
    // 发异步ajax请求 注册
    const response = await reqRegister({username,password,type});
     const result = response.data; //{code:0/1...}
    if(result.code ===0){//成功
      const user = result.data;
      dispatch(authSuccess(user));
    } else {//失败 分发一个错误信息
      const msg = result.data;
      dispatch(errorMsg(msg));
    }
  }
}


//登录的异步action
export function login({username,password}) {
  return async dispatch => {


    //做表单验证 异步  用return 因为后面还有异步请求
    if (!username || !password) {
   return dispatch(errorMsg('用户名或密码异常'));
    }

    // 发异步ajax请求 登录
    const response = await reqLogin({username,password});
    const result = response.data; //{code:0/1...}
    if(result.code ===0){//成功
      const user = result.data;
      dispatch(authSuccess(user));
    } else {//失败 分发一个错误信息
      const msg = result.data;
      dispatch(errorMsg(msg));
    }
  }
}

//更新用户的异步action
export function UpdateUser(user) {
  return async dispatch => {
    // 发异步ajax请求
    const response = await reqUpdateUser(user);
    const result = response.data; //{code:0/1...}
    if(result.code ===0){//更新用户成功
      const user = result.data;
      dispatch(receiveUser(user));
    } else {//失败 分发一个错误信息
      const msg = result.data;
      dispatch(resetUser(msg));
    }
  }
}







/*
async和await
1. 作用?
    简化promise的使用(不再使用.then来指定异步回调函数)
    以同步编程方式实现异步流程效果
2. 使用?
   用await: 在返回promise的函数调用左侧(不想要promise, 而是想要异步返回的结果)
   用async: await所在函数定义的左侧
 */