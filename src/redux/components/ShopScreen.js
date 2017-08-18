import React from "react";
import {View} from "react-native";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import Tb1 from "./modules/Shop_Tab1";
import Tb2 from "./modules/Shop_Tab2";
import data from "../../res/CircleTabData";
/**
 *@fileName:ShopScreen.js
 *@author:shunq_wang
 *@date:2017/8/18 下午5:48
 *@disc:商城
 **/
class ShopScreen extends React.PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={{flex:1}}>
                <ScrollableTabView
                    tabBarUnderlineStyle={{height:2,backgroundColor:'#42a5f5'}}
                    style={{height:10}}
                    initialPage={0}
                    tabBarTextStyle={{fontSize:12}}
                    tabBarActiveTextColor="#42a5f5"//设置选中Tab的文字颜色。
                    tabBarInactiveTextColor=""//设置未选中Tab的文字颜色。
                    tabBarBackgroundColor="#fff"//设置整个Tab这一栏的背景颜色
                    renderTabBar={() => <ScrollableTabBar />}
                >
                    <Tb1 tabLabel="首页"
                         circleTabList1={data.tab1.list1}
                         circleTabList2={data.tab1.list2}
                         {...this.props}/>
                    <Tb2 tabLabel="服饰"
                         circleTabList1={data.tab2.list1}
                         circleTabList2={data.tab2.list2}
                         {...this.props}/>
                    <Tb2 tabLabel="男装"
                         circleTabList1={data.tab3.list1}
                         circleTabList2={data.tab3.list2}
                         {...this.props}/>
                    <Tb2 tabLabel="母婴"
                         circleTabList1={data.tab4.list1}
                         circleTabList2={data.tab4.list2}
                         {...this.props}/>
                    <Tb2 tabLabel="家具"
                         circleTabList1={data.tab5.list1}
                         circleTabList2={data.tab5.list2}
                         {...this.props}/>
                    <Tb2 tabLabel="美食"
                         circleTabList1={data.tab6.list1}
                         circleTabList2={data.tab6.list2}
                         {...this.props}/>
                </ScrollableTabView>
            </View>
        );
    }
}

export default ShopScreen