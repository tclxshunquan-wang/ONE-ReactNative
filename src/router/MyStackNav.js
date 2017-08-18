import {StackNavigator,NavigationActions} from 'react-navigation';
import React, {Component} from 'react';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import Color from '../res/color'
import Tab from './MyTabNav'
import MyHomeScreen from '../redux/components/MyHomeScreen'
import WebScreen from '../redux/components/WebScreen'
import HttpScreen from '../redux/components/HttpScreen'
import ReduxScreen from '../redux/components/ReduxScreen'
import QCodeScreen from '../redux/components/QCodeScreen'
import StorageScreen from '../redux/components/StorageScreen'
import PackageScreen from '../redux/components/PackageScreen'
import ChartScreen from '../redux/components/ChartScreen'
import AxisLineChartScreen from '../res/charts/AxisLineChartScreen'
import BarChartScreen from '../res/charts/BarChartScreen'
import BubbleChartScreen from '../res/charts/BubbleChartScreen'
import CandleStickChartScreen from '../res/charts/CandleStickChartScreen'
import CombinedChartScreen from '../res/charts/CombinedChartScreen'
import GroupBarChartScreen from '../res/charts/GroupBarChartScreen'
import HorizontalBarChartScreen from '../res/charts/HorizontalBarChartScreen'
import LineChartScreen from '../res/charts/LineChartScreen'
import LiveUpdateChartScreen from '../res/charts/LiveUpdateChartScreen'
import PieChartScreen from '../res/charts/PieChartScreen'
import RadarChartScreen from '../res/charts/RadarChartScreen'
import ScatterChartScreen from '../res/charts/ScatterChartScreen'
import StackedBarChartScreen from '../res/charts/StackedBarChartScreen'
import TimeSeriesLineChartScreen from '../res/charts/TimeSeriesLineChartScreen'
import ZeroLineChartScreen from '../res/charts/ZeroLineChartScreen'
import Shop_Info from '../redux/components/modules/Shop_Info'
import Shop_Car from '../redux/components/modules/Shop_Car'

const RootReducer = StackNavigator(
    {
        Tab: {screen: Tab},//tab路由
        // MyHomeScreen: {screen: MyHomeScreen},//具有路由功能的页面 其他单页面也可以在这里进行配置
        WebScreen: {screen: WebScreen},
        HttpScreen: {screen: HttpScreen},
        ReduxScreen:{screen:ReduxScreen},
        QCodeScreen:{screen:QCodeScreen},
        StorageScreen:{screen:StorageScreen},
        PackageScreen:{screen:PackageScreen},
        ChartScreen:{screen:ChartScreen},
        AxisLineChartScreen:{screen:AxisLineChartScreen},
        BarChartScreen:{screen:BarChartScreen},
        BubbleChartScreen:{screen:BubbleChartScreen},
        CandleStickChartScreen:{screen:CandleStickChartScreen},
        CombinedChartScreen:{screen:CombinedChartScreen},
        GroupBarChartScreen:{screen:GroupBarChartScreen},
        HorizontalBarChartScreen:{screen:HorizontalBarChartScreen},
        LineChartScreen:{screen:LineChartScreen},
        LiveUpdateChartScreen:{screen:LiveUpdateChartScreen},
        PieChartScreen:{screen:PieChartScreen},
        RadarChartScreen:{screen:RadarChartScreen},
        ScatterChartScreen:{screen:ScatterChartScreen},
        StackedBarChartScreen:{screen:StackedBarChartScreen},
        TimeSeriesLineChartScreen:{screen:TimeSeriesLineChartScreen},
        ZeroLineChartScreen:{screen:ZeroLineChartScreen},
        Shop_Info:{screen:Shop_Info},
        Shop_Car:{screen:Shop_Car}
    },
    {
        initialRouteName:'Tab',
        navigationOptions: { //通用配置 参考 https://reactnavigation.org/docs/navigators 属性 全局属性
            headerBackTitle: null,
            headerTintColor: '#fff',
            showIcon: true,
            swipeEnabled: false,
            animationEnabled: false,
            headerStyle: {
                backgroundColor: Color.bule_500,
            }
        },
        mode: 'screen',
        headerMode: 'screen',//float 共用一个header 意思就是有title文字渐变效果。screen- 各用各的header 意思就是没有title文字渐变效果。
        cardStyle: {},
        transitionConfig: () => ({
            screenInterpolator: CardStackStyleInterpolator.forHorizontal//forVertical 页面切换动画方式
        })
    });

/**
 * 处理安卓返回键
 */
// let lastBackPressed=0;
// const defaultStateAction = RootReducer.router.getStateForAction;
// RootReducer.router.getStateForAction = (action,state) => {
//     if(state && action.type === NavigationActions.BACK && state.routes.length === 1) {
//             // ToastAndroid.show(Constant.hint_exit,ToastAndroid.SHORT);
//
//             lastBackPressed = Date.now();
//             const routes = [...state.routes];
//             return {
//                 ...state,
//                 ...state.routes,
//                 index: routes.length - 1,
//             };
//     }
//     return defaultStateAction(action,state);
// };

export default RootReducer;

//侧边栏 三者嵌套关系：侧边栏->跳转->选项卡 （DrawerNavigator->StackNavigator->TabNavigator）
// export default DrawerNavigator({
//        nav: { screen: nav },
//        MyDrawerLayout:{screen:MyDrawerLayout}
//    }, {
//        drawerWidth: windowWidth*4 / 5, // 抽屉宽
//        drawerPosition: 'left', // 抽屉在左边还是右边
//        contentComponent: (props)=>{return <MyDrawerLayout {...props}/>},  // 自定义抽屉组件
//        contentOptions: {
//          initialRouteName: nav, // 默认页面组件
//        }
//    });
