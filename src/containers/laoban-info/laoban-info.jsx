
/*
老板信息完善路由组件
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {UpdateUser} from "../../redux/actions";
import HeaderSelector from '../../components/header-selector/header-selector'
//HeaderSelector调用的公共组件

class LaobanInfo extends Component {
  render () {
    return (
      <div>

      </div>
    )
  }
}

export default connect (
  state => ({user: state.user}),
  {UpdateUser}
)(LaobanInfo)
