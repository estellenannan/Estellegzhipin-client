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
    for (let i = 0; i < 20; i++) {
      HeaderList.push({ //data	传入的菜单数据	类型是Array<{icon, text}>
        icon: require('../../assets/images/头像'+(i+1)+'.png'), // 图片对象
//加载的头像图片模块 用require
        text: '头像'+(i+1)
      })
    }
    //动态确定头部 //List的属性 renderHeader
    const {icon} = this.state;
    const headerUi = icon ? <div><span>已选择头像</span> <img src={icon} alt="icon"/></div> : '还没有选择头像';

    return (
      <div>
       <List renderHeader = { () =>  headerUi } >
        <Grid data={HeaderList}
              onClick={this.selectHeader}
              columnNum={5}  >
        </Grid >
      </List>
      </div>
    )
  }
}

