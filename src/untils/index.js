/*
包含n个工具函数的模块
 */

/*
得到需要自动跳转的path
结果
  /laobaninfo
  /dasheninfo
  /laoban
  /dashen
条件:
  type
  header
 */


export default  function  getRedirectPath (type,header){
let path = '';

if (type === 'laoban') {
    path = '/laoban';
} else {
  path = '/dashen';
}

if(!header) {
  path += 'info'//信息还没有完善需要填补
}

return path;
}