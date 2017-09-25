import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import {List, Button, Card, ListItem} from 'react-native-elements'
import TabBars from "./modules/TabBars"

/**
 *@fileName:ReduxScreen.js
 *@author:shunq_wang
 *@date:2017/8/18 下午5:47
 *@disc:Redux教程
 **/
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

    render() {
        return (
            <View style={{flex:1}}>
                <TabBars
                    Routes={[
                                { key: '1', title: 'First' },
                                { key: '2', title: 'Second'},
                            ]}
                    Index={1}
                    IsLineIndicator={false}
                >
                    <View/>
                    <View/>
                </TabBars>
                <TabBars
                    Routes={[
                                { key: '1', title: 'First' },
                                { key: '2', title: 'Second'},
                                { key: '3', title: 'First' },
                                { key: '4', title: 'Second'},
                                { key: '5', title: 'First' },
                                { key: '6', title: 'Second'},
                            ]}
                    Index={1}
                    IsLineIndicator={false}
                    ScrollEnabled={true}
                >
                    <View/>
                    <View/>
                    <View/>
                    <View/>
                    <View/>
                    <View/>
                </TabBars>
                <TabBars
                    Routes={[
                                { key: '1', title: 'First' },
                                { key: '2', title: 'Second'},
                            ]}
                    Index={0}
                >
                    <View/>
                    <View/>
                </TabBars>
                <TabBars
                    Routes={[
                                { key: '1', title: 'First' },
                                { key: '2', title: 'Second'},
                                { key: '3', title: 'First' },
                                { key: '4', title: 'Second'},
                                { key: '5', title: 'First' },
                                { key: '6', title: 'Second'},
                            ]}
                    Index={1}
                    IsLineIndicator={true}
                    ScrollEnabled={true}
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
