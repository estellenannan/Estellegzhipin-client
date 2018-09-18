


//注册路由组件
import React, {Component} from 'react';
import {NavBar,List,WingBlank,WhiteSpace,InputItem,Radio,Button} from 'antd-mobile'
// import PropTypes from 'prop-types'

import Logo from '../../components/logo/logo'


export default class Register extends Component {
state = ({
  username:'',
  password:'',
  password2:'',
  type:'dashen'
});


// setusername = (val) =>{
//   this.setState({
//     username:val
//   })
// } 过于麻烦得设置好几个

//回调监听改变的输入
handleChange = (name,val) => {
this.setState({//更新状态
  [name]: val//对象里面的变量名用[]包裹 obj.[name]
})
};

//注册的回调
  register = () => {
    // alert(this.state);
    console.log(this.state)
  };

  //登录
  goLogin = () => {
    //利用编程式导航跳转
    this.props.history.replace('/login');
  };

  render () {
const {type} = this.state;
    return (
      <div>
        <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
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
            <InputItem
              type='password'
              placeholder='请确认输入密码'
              onChange={(val) => this.handleChange('password2',val)}
            >
              确认密码：
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
            <Button type='primary' onClick={this.register}>注 &nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}> 已有账户</Button>

          </List>
        </WingBlank>
      </div>
    )
  }
}

