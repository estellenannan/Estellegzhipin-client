/*
消息列表路由组件
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'

import NavFooter  from '../../components/nav-footer/nav-footer'

class Message extends Component {
  render () {
    return (
      <div>Message</div>
    )
  }
}
export default connect (
  state => ({}),
  {}
)(Message)