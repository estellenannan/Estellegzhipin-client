

//主界面路由组件
import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'

import Message  from '../message/message';
import LaobanInfo  from '../laoban-info/laoban-info';
import Laoban  from '../laoban/laoban';
import DashenInfo  from '../dashen-info/dashen-info';
import Dashen  from '../dashen/dashen';
import Personal from '../personal/personal';
import NavFooter  from '../../components/nav-footer/nav-footer'
import {getUser} from '../../redux/actions'


 class Main extends Component {
   navList = [
     {
       path: '/laoban', // 路由路径
       component: Laoban,
       title: '大神列表',
       icon: 'dashen',
       text: '大神',
     },
     {
       path: '/dashen', // 路由路径
       component: Dashen,
       title: '老板列表',
       icon: 'laoban',
       text: '老板',
     },
     {
       path: '/message', // 路由路径
       component: Message,
       title: '消息列表',
       icon: 'message',
       text: '消息',
     },
     {
       path: '/personal', // 路由路径
       component: Personal,
       title: '用户中心',
       icon: 'personal',
       text: '个人',
     }
   ];


  render () {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route path='/laobanInfo' component = {LaobanInfo} />
          <Route path='/dashenInfo' component = {DashenInfo} />

          <Route path='/laoban' component = {Laoban}  />
          <Route path='/dashen' component = {Dashen} />
          <Route path='/message' component = {Message} />
          <Route path='/personal' component = {Personal} />
        </Switch>

        <NavFooter navList={this.navList}/>
      </div>
    )
  }
}
export default connect(
  state => ({user: state.user}),
  {getUser}
)(Main)

