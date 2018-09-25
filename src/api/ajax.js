//使用axios封装一个iAjax的请求函数
//返回值是一个promise函数对象

import axios from 'axios'




export default function ajax (url,data={},type='GET') {

  if (type === 'GET') {
//将data中的数据转化成query字符串接到url中
    //Object.keys(data):得到obj对象自身所有属性的属性名的数组
    //举个例子：get的方式  http://ww.wan.com?user=XXX&id=123
    let queryString = '';
      Object.keys(data).forEach(key => {
        const value = data[key];//属性名变成了变量
        queryString += key + '=' + value +'&'
    });
if(queryString){//有的请求不需要参数这时需要进行判断，不需要的就直接不写了
  //要截取字符串 &不需要 再重新赋值
       queryString = queryString.substring(0,queryString.length-1);
       url += '?' + queryString;
}
    // 发get请求
    return axios.get(url)

  } else {//POST请求
return axios.post(url,data)
  }

}



