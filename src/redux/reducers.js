/*  包含n个reducer函数的模块
* reducer函数：根据老的state和指定的action 产生新的state
* */


import {combineReducers} from 'redux';


const initUser = {
  username: '',
  type: '',
  msg: '',
  redirectTo: ''
};
function user (state=initUser,action) {
  switch (action.type){
   /* case :
      return
    case :
      return*/
    default:
      return state
  }
}


export default combineReducers({
  user
})
/*
combineReducers()执行的结果是一个新的reducer函数
整合后的reducer管理的状态结构为:  对象: {xxx: xxx(), yyy: yyy()}
 */
