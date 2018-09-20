/*
大神信息完善路由组件
 */


import React, {Component} from 'react';
import {connect} from 'react-redux'
import {UpdateUser} from "../../redux/actions";
import HeaderSelector from '../../components/header-selector/header-selector'

class DashenInfo extends Component {
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
        )(DashenInfo)