/*  包含n个reducer函数的模块
* reducer函数：根据老的state和指定的action 产生新的state
* */


import {combineReducers} from 'redux';
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USER_LIST
} from './action-types';
import getRedirectPath from '../untils/index'
const initUser = {
  username: '',
  type: '',
  msg: '',
  redirectTo: ''
};
function user (state=initUser,action) {
  switch (action.type){
    case AUTH_SUCCESS:
      const user = action.data;
      return {...user, redirectTo: getRedirectPath(user.type, user.header)};
    case ERROR_MSG:
      const msg = action.data;
      return {...state,msg};
    case RECEIVE_USER://接收
      return action.data;
    case RESET_USER:
      return {...initUser, msg: action.data};
    default:
      return state
  }
}

// 管理userList数据
const initUserList = [];
function userList  (state=initUserList,action) {
  switch (action.type){
    case RECEIVE_USER_LIST:
      return action.data;
    default:
      return state
  }
}


export default combineReducers({
  user,
  userList
})
/*
combineReducers()执行的结果是一个新的reducer函数
整合后的reducer管理的状态结构为:  {user: user(), userList: userList()}
 */
