/*
老板的主界面路由组件
 */

import React, {Component} from 'react';

import {connect} from 'react-redux'


//要自动时时收集数据
 class Laoban extends Component {


  render () {
    return (
      <div>Laoban</div>
    )
  }
}
export default connect (
  state => ({ }),
  { }
)(Laoban)
