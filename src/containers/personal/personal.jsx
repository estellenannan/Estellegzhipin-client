/*
个人中心路由组件
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'

import NavFooter  from '../../components/nav-footer/nav-footer'


class Personal extends Component {
  render () {
    return (
      <div>Personal</div>
    )
  }
}
export default connect (
  state => ({}),
  {}
)(Personal)