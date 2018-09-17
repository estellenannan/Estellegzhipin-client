//登录路由组件

import React, {Component} from 'react';
import {NavBar,List,WingBlank,WhiteSpace,InputItem,Radio,Button} from 'antd-mobile'
// import PropTypes from 'prop-types'

import Logo from '../../components/logo/logo'


export default class Login extends Component {
  state = ({
    username:'',
    password:'',
    type:'dashen'
  });

//回调监听改变的输入
  handleChange = (name,val) => {
    this.setState({
      [name] :val
    })
  };

//登录的回调
  login = () => {
    alert(this.state);
    // console.log(this.state)
  };

  //注册
  goRegister = () => {
    //利用编程式导航跳转到注册
    this.props.history.replace('/register');
  };

  render () {
    const {type} = this.state;
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem
              placeholder='请输入用户名'
              onChange={(val) => this.handleChange('username',val)}
            >
              用户名：
            </InputItem>
            <WhiteSpace/>
            <InputItem
              type='password'
              placeholder='请输入密码'
              onChange={(val) => this.handleChange('password',val)}
            >
              密码：
            </InputItem>
            <WhiteSpace/>

            {/* type类型*/}
            <List.Item>
              <span>用户类型：</span>&nbsp;&nbsp;
              <Radio
                checked={type==='dashen'}
                onChange={(val) => this.handleChange('type','dashen')}
              >
                大神</Radio>&nbsp;&nbsp;
              <Radio
                checked={type==='laoban'}
                onChange={(val) => this.handleChange('type','laoban')}
              >
                老板</Radio>
            </List.Item>

            <WhiteSpace/>
            <Button type='primary' onClick={this.login}>登 &nbsp;&nbsp;录</Button>
            <WhiteSpace/>
            <Button onClick={this.goRegister}> 还没有账户</Button>

          </List>
        </WingBlank>
      </div>
    )
  }
}



