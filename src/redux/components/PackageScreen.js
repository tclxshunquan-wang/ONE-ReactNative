import React from 'react';
import {
    ScrollView,
    View, StyleSheet
} from 'react-native';
import {List, Button, Card, FormInput, ListItem} from 'react-native-elements'

let android = [
    {title: 'ReactNative打离线包-android篇', url: 'https://github.com/cnsnake11/blog/blob/master/ReactNative开发指导/ReactNative打离线包-android篇.md'},
    {
        title: 'ReactNative打离线包-android篇',
        url: 'https://segmentfault.com/a/1190000004192816'
    },
    {title: '深度解析Gradle编译React native时遇到的那些坑【适用于Android开发者】', url: 'http://blog.csdn.net/u013552863/article/details/53638070'},
];

let ios = [
    {title: 'ReactNative打离线包-ios篇', url: 'https://github.com/cnsnake11/blog/blob/master/ReactNative开发指导/ReactNative打离线包-ios篇.md'},
    {
        title: 'ReactNative打离线包-ios篇',
        url: 'http://www.jianshu.com/p/bb7c5f1d304e'
    },
    {title: 'ReactNative打离线包-ios篇', url: 'https://segmentfault.com/a/1190000004189538'},
];
/**
 *@fileName:PackageScreen.js
 *@author:shunq_wang
 *@date:2017/8/18 下午5:47
 *@disc:打包教程
 **/
class PackageScreen extends React.Component {
    static navigationOptions=({navigation})=>{
        return {
            title:navigation.state.params.title,
        }
    };
    render() {
        return (
            <ScrollView>
                <View>
                    <Card
                        containerStyle={styles.card}
                        title={'ReactNative打离线包-android篇'}
                        titleStyle={{textAlign:'left',fontWeight:'normal'}}
                    >
                            {
                                android.map((item, i) => (
                                    <ListItem
                                        onPress={()=>{this.props.navigation.navigate('WebScreen',{url:item.url,title:item.title})}}
                                        key={i}
                                        title={item.title}
                                    />
                                ))
                            }
                    </Card>
                    <Card
                        containerStyle={styles.card}
                        title={'ReactNative打离线包-ios篇'}
                        titleStyle={{textAlign:'left',fontWeight:'normal'}}
                    >
                        {
                            ios.map((item, i) => (
                                <ListItem
                                    onPress={()=>{this.props.navigation.navigate('WebScreen',{url:item.url,title:item.title})}}
                                    key={i}
                                    title={item.title}
                                />
                            ))
                        }
                    </Card>
                </View>
            </ScrollView>
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
export default PackageScreen
