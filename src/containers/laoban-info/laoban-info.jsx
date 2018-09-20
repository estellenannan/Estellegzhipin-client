
/*
老板信息完善路由组件
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NavBar,List,InputItem, TextareaItem, Button,WingBlank} from 'antd-mobile'
import {Redirect} from 'react-router-dom'


import {UpdateUser} from "../../redux/actions";
import HeaderSelector from '../../components/header-selector/header-selector'
//HeaderSelector调用的公共组件

class LaobanInfo extends Component {

  state = {
    header: '',
    info:'',
    post: '',
    salary: '',
    company:''
  };
  setHeader=(header) => {//设置更新header
    this.setHeader({
      header
    })
  };
  handleChange = (name,val) => {
    this.setState(
      {  [name]:val
      })
  };

  render () {
    //如果信息完善了 就直接跳转到老板主界面
    const {user} = this.props;
    if (user.header) {
      return <Redirect to='./laoban'/>
    }

    return (
      <div>
    <NavBar>老板信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <WingBlank>
        <List>
          <InputItem
            placeholder='请输入招聘职位'
            onChange={ (val) => {this.handleChange('post',val)}}
          >
            招聘职位：</InputItem>
          <InputItem
            placeholder='请输入公司名称'
            onChange={ (val) => {this.handleChange('company',val)}}
          >
            公司名称：</InputItem>
          <InputItem
            placeholder='请输入职位薪资'
            onChange={ (val) => {this.handleChange('salary',val)}}
          >
            职位薪资：</InputItem>
          <TextareaItem
            title="职位要求"
            placeholder='请输入职位要求'
            onChange={(val) => {this.handleChange('info',val)}}
          ></TextareaItem>
        </List>
        </WingBlank>
        <Button type='primary'
                onClick = {this.props.UpdateUser(this.state)}
        > 保存</Button>
      </div>
    )
  }
}

export default connect (
  state => ({user: state.user}),
  {UpdateUser}
)(LaobanInfo)
