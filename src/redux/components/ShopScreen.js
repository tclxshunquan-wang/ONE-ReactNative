import React from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {Divider, ListItem} from 'react-native-elements'
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view'
import Tb1 from './modules/Shop_Tab1'

const {width, height} = Dimensions.get('window');
class ShopScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
                    <Tb1 tabLabel="首页" {...this.props}/>
                    <Tb1 tabLabel="首页"/>
                    <Tb1 tabLabel="首页"/>
                    <Tb1 tabLabel="首页"/>
                    <Tb1 tabLabel="首页"/>
                    <Tb1 tabLabel="首页"/>
                    <Tb1 tabLabel="首页"/>
                    <Tb1 tabLabel="首页"/>
                    <Tb1 tabLabel="首页"/>

                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        flex: 1
    },
    card: {
        marginBottom: 5
    },
    page: {
        flex: 1
    },

});
export default ShopScreen