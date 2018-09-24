
//公共的底部列表

import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

const  Item = TabBar.Item;


 class NavFooter extends Component {

   static propTypes = {
     navList: PropTypes.array.isRequired
   };
//main 里设置了navList d的大数组
   /*  navList = [
        {
          path: '/laoban', // 路由路径
          component: Laoban,
          title: '大神列表',
          icon: 'dashen',
          text: '大神',
        },*/
   render() {

     const path = this.props.location.pathname;
     const navList = this.props.navList.filter(nav => !nav.hide);
     return (
       <div>
         <TabBar>
           {
             navList.map((nav,inex) => (
      <Item
        title={nav.text}
        icon={{uri:require(`./images/${nav.icon}.png`)}}
        selectedIcon={{uri:require(`./images/${nav.icon}.selected.png`)}}
        selected={path === nav.path}
        onPress={() => this.props.history.replace(nav.path)}
      >
      </Item>
                    ))
           }
         </TabBar>
       </div>
     )

   }
 }


export default withRouter(NavFooter)// 向NavFooter组件传递路由相关属性: history/location/match



/*<Item icon={}
      title=""
      selected={}
      onPress={}
>
</Item>*/
 /*Item的属性  onPress	bar 点击触发，需要自己改变组件 state & selecte={true}	Function	(){}
 selected	是否选中*/
/*// TabBar  hidden	是否隐藏	Boolean	fals*/

/*    <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >*/