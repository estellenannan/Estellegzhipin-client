/*  包含n个reducer函数的模块
* reducer函数：根据老的state和指定的action 产生新的state
* */


import {combineReducers} from 'redux';


const initXxx = 1;
function xxx (state=initXxx,action) {
  switch (action.type){
    default:
      return state
  }
}
const initXxx2 = {};
function xxx2 (state=initXxx2,action) {
  switch (action.type){
    default:
      return state
  }
}

export default combineReducers({
  xxx,
  xxx2
})
/*
combineReducers()执行的结果是一个新的reducer函数
整合后的reducer管理的状态结构为:  对象: {xxx: xxx(), yyy: yyy()}
 */
