import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';
import MyHomeScreen from '../redux/components/MyHomeScreen'
import ShopScreen from '../redux/components/ShopScreen'
import AboutMeScreen from '../redux/components/AboutMeScreen'

// 注册tabs
export default  TabNavigator({
    Home: {
        screen: MyHomeScreen,
        navigationOptions:{
        tabBarLabel: '首页',
        title: '首页',
        headerTintColor:'#000',
        headerTitleStyle: {
          alignSelf:'center',
        },
        tabBarIcon:({tintColor}) => (
                    <Image
                        source={require('../../images/home_up.png')}
                        style={[{tintColor: tintColor},styles.icon]}
                    />
                ),
        }
    },
    Shop: {
        screen: ShopScreen,
        navigationOptions: {
        tabBarLabel: '商城',
        tabBarVisible:true,
        title: '商城',
        headerTintColor:'#000',
        headerTitleStyle: {
          alignSelf:'center',
        },
        tabBarIcon:({tintColor}) => (
                      <Image
                          source={require('../../images/shop_up.png')}
                          style={[{tintColor: tintColor},styles.icon]}
                      />
                  ),
        }
    },
    Me: {
        screen: AboutMeScreen,
        navigationOptions: {
            tabBarLabel: '作者',
            tabBarVisible:true,
            title: '作者',
            headerTintColor:'#000',
            headerTitleStyle: {
                alignSelf:'center',
            },
            tabBarIcon:({tintColor}) => (
                <Image
                    source={require('../../images/me_up.png')}
                    style={[{tintColor: tintColor},styles.icon]}
                />
            ),
        }
    }
  }, {
      animationEnabled: true, // 切换页面时是否有动画效果
      tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
      swipeEnabled: false, // 是否可以左右滑动切换tab
      backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
      tabBarOptions: {
          upperCaseLabel:false,
          activeTintColor: '#2196f3', // 文字和图片选中颜色
          inactiveTintColor: '#999', // 文字和图片未选中颜色
          showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
          indicatorStyle: {
              height:0 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
          },
          style: {
              backgroundColor: '#f5f5f5', // TabBar 背景色
              height: 50,
              borderTopWidth:0.5,
              borderTopColor:'#eeeeee',
          },
          labelStyle: {
              fontSize: 10, // 文字大小
              marginTop:0
          },
      }
});

const styles = StyleSheet.create({//每一个tab样式 可单独指定
    icon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        top:0
    }
});
