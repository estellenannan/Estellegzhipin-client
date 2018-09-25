//登录路由组件

import React, {Component} from 'react';
import {NavBar,List,WingBlank,WhiteSpace,InputItem,Button} from 'antd-mobile'
// import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

import {login} from '../../redux/actions'
import Logo from '../../components/logo/logo'


 class Login extends Component {
  state = ({
    username:'',
    password:''
  });

//回调监听改变的输入
  handleChange = (name,val) => {
    this.setState({
      [name] :val
    })
  };

//登录的回调
  login = () => {
    const {username,password} = this.state;
    this.props.login(username,password);
    console.log(this.state)
  };

  //注册
  goRegister = () => {
    //利用编程式导航跳转到注册
    this.props.history.replace('/register');
  };

  render () {

    const {redirectTo, msg} = this.props.user;
    if(redirectTo) {
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            {msg ? <p className='error-msg'>{msg}</p> :null}
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

            <Button type='primary' onClick={this.login}>登 &nbsp;&nbsp;录</Button>
            <WhiteSpace/>
            <Button onClick={this.goRegister}> 还没有账户</Button>

          </List>
        </WingBlank>
      </div>
    )
  }
}

//固定写法!!!
export default connect(
  state => ({user: state.user}),
  {login}
)(Login)


