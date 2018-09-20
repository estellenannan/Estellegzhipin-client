import React, {Component} from 'react';

import PropTypes from 'prop-types'

import {List,Grid} from 'antd-mobile'

export default class HeaderSelector extends Component {


  static propTypes = {
     setHeader: PropTypes.func.isRequired
};

  state = {
    icon: null
  };

  selectHeader = ({icon, text}) => {//选择头像的回调
   this.setState({
  icon  //更新自身的icon
});
    this.props.setHeader(text)//更新父组件
  };


 /* grid的  data	传入的菜单数据	类型是Array<{icon, text}>
  onClick	点击每个菜单的回调函数	(el: Object, index: number)*/
  render () {
    const HeaderList = [];
    for (let i = 0; i <HeaderList .length; i++) {
      HeaderList.push({ //data	传入的菜单数据	类型是Array<{icon, text}>
        icon:require(`./images/头像${i+1}.png`),//加载的头像图片模块 用require
        text:`头像${i+1}`
      })
    }
    //动态确定头部
const {icon} = this.state;
    const headerUI = icon ? <div><span>已选择头像</span> <img src={icon} /></div> : '还没有选择头像';

    return (//List的属性 renderHeader
      <div>
       <List renderHeader={() => {headerUI}}>//List的属性
        <Grid data={HeaderList}
              onClick={this.selectHeader}
              columnNum={5}
        />
      </List>
      </div>
    )
  }
}

