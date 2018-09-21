

/*
大神信息完善路由组件
 */

import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NavBar,InputItem, TextareaItem, Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

import {UpdateUser} from "../../redux/actions";
import HeaderSelector from '../../components/header-selector/header-selector'


class DashenInfo extends Component {
  state = {
    header: '',
    info:'',
    post: ''
  };


  setHeader=(header) => {//设置更新header
this.setState({
  header
})
  };

  handleChange = (name,val) => {
this.setState(
  {  [name]:val
  })
  };

  render () {
    //如果信息完善了 就直接跳转到大神主界面
    const {user} = this.props;
    if (user.header) {
        return <Redirect to='./dashen'/>
    }

    return (
      <div>
       <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>

        <InputItem
          placeholder='请输入求职岗位'
          onChange={ val => this.handleChange('post',val)}
        >
          求职岗位:</InputItem>

        <TextareaItem
        title="个人介绍:"
        placeholder='请输入个人介绍'
        rows={2}
        onChange={ val => this.handleChange('info',val)}
        />

        <Button type='primary'
                onClick = {this.props.UpdateUser(this.state)}
        >
          保存</Button>
      </div>
    )
  }
}

        export default connect (
          state => ({user: state.user}),
          {UpdateUser}
        )(DashenInfo)