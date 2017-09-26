import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import {List, Button, Card, ListItem} from 'react-native-elements'
import TabBars from "./modules/TabBars"
import TabViewPage from "./modules/TabViewPage"

/**
 *@fileName:ReduxScreen.js
 *@author:shunq_wang
 *@date:2017/8/18 下午5:47
 *@disc:Redux教程
 **/
const list=[{name:"页面一"},{name:"页面二"},{name:"页面三"},{name:"页面四"}];
class ScrollTabBarScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title,
        }

    };

    state: State = {
        index: 0,
        routes: [
            {key: '1', title: '111'},
            {key: '2', title: '1111'},
        ],
    };

    componentWillMount() {
        console.log(this.props)

    }

    _renderPage=(res,id)=>{
        return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}><Text>{`name:${res.name}  RowID${id}`}</Text></View>
    };

    render() {
        return (
            <View style={{flex:1,backgroundColor:"#FFF"}}>
                    <TabViewPage
                        Index={0}
                        dataSource={list}
                        style={{flex:1}}
                        renderPage={this._renderPage}
                    />
                <TabBars
                    style={{flex:1,backgroundColor:"#FFF"}}
                    containerStyle={{borderRadius:25,borderColor:"#00000000",backgroundColor:"#bdbdbd",}}
                    InactiveTextColor="#FFF"
                    ActiveTextColor="#D6356C"
                    TextStyle={{fontWeight:"bold",textAlign:"center",alignSelf:"center",marginTop:8}}
                    Routes={[
                                { key: '1', title: 'First' },
                                { key: '2', title: 'Second'},
                            ]}
                    Index={1}
                    isLineIndicator={false}
                    scrollEnabled={false}
                >
                    <View/>
                    <View/>
                </TabBars>
                <TabBars
                    style={{flex:1,backgroundColor:"#FFF"}}
                    containerStyle={{backgroundColor:"#bdbdbd",}}
                    Routes={[
                                { key: '1', title: 'First' },
                                { key: '2', title: 'Second'},
                                { key: '3', title: 'First' },
                                { key: '4', title: 'Second'},
                                { key: '5', title: 'First' },
                                { key: '6', title: 'Second'},
                            ]}
                    Index={1}
                    isLineIndicator={false}
                    scrollEnabled={true}
                >
                    <View/>
                    <View/>
                    <View/>
                    <View/>
                    <View/>
                    <View/>
                </TabBars>
                <TabBars
                    style={{flex:1,backgroundColor:"#FFF"}}
                    containerStyle={{backgroundColor:"#bdbdbd",}}
                    Routes={[
                                { key: '1', title: 'First' },
                                { key: '2', title: 'Second'},
                                { key: '3', title: 'First' },
                                { key: '4', title: 'Second'},
                                { key: '5', title: 'First' },
                                { key: '6', title: 'Second'},
                            ]}
                    Index={1}
                    isLineIndicator={true}
                    scrollEnabled={true}
                >
                    <View/>
                    <View/>
                    <View/>
                    <View/>
                    <View/>
                    <View/>
                </TabBars>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginBottom: 10

    },
    but: {
        width: 80,
        height: 30,
        marginTop: 15
    }

});

export default ScrollTabBarScreen
