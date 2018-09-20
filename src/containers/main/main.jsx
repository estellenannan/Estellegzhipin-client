

//主界面路由组件
import React, {Component} from 'react';
import {Router,Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import Message  from '../message/message';
import LaobanInfo  from '../laoban-info/laoban-info';
import Laoban  from '../laoban/laoban';
import DashenInfo  from '../dashen-info/dashen-info';
import Dashen  from '../dashen/dashen';
import Personal from '../personal/personal';


 class Main extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Router path='/laobanInfo' component={LaobanInfo}></Router>
          <Router path='/dashenInfo' component={DashenInfo}></Router>

          <Router path='/laoban' component={Laoban}></Router>
          <Router path='/dashen' component={Dashen}></Router>
          <Router path='/message' component={Message}></Router>
          <Router path='/personal' component={Personal}></Router>
        </Switch>
      </div>
    )
  }
}
export default connect(
  state => ({user: state.user}),
  {}
)(Main)

