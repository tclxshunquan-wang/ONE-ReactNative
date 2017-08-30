import {StackNavigator,NavigationActions} from 'react-navigation';
import React, {Component} from 'react';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import Color from '../res/color'
import Tab from './MyTabNav'
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
import VideoScreen from '../redux/components/VideoScreen'
import AnimatableScreen from '../redux/components/AnimatableScreen'
import PickerScreen from '../redux/components/PickerScreen'

const RootReducer = StackNavigator(
    {
        Tab: {screen: Tab},//tab路由
        WebScreen: {screen: WebScreen},//webview
        HttpScreen: {screen: HttpScreen},//网络请求
        ReduxScreen:{screen:ReduxScreen},//redux
        QCodeScreen:{screen:QCodeScreen},//二维码
        StorageScreen:{screen:StorageScreen},//持久化存储
        PackageScreen:{screen:PackageScreen},//打包
        ChartScreen:{screen:ChartScreen},//图表
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
        Shop_Info:{screen:Shop_Info},//商品详情
        Shop_Car:{screen:Shop_Car},//购物车
        VideoScreen:{screen:VideoScreen},//视频
        AnimatableScreen:{screen:AnimatableScreen},//动画
        PickerScreen:{screen:PickerScreen}//通讯录选择器
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
export default RootReducer;

