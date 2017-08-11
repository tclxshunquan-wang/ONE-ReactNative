import React from 'react';
import {
    ScrollView,
    View,
    AsyncStorage,
    StyleSheet,
    Text
} from 'react-native';
import {List, Button, Card, FormInput,ListItem} from 'react-native-elements'
const saveData = {
    data: "",
    save_time: ""
};
let urls=[
    {title:'AsyncStorage',url:'http://reactnative.cn/docs/0.47/asyncstorage.html#content'},
    {title:'【React Native开发】React Native API模块之AsyncStorage(持久化存储)使用详解(29)',url:'http://www.lcode.org/react-native-api模块之asyncstorage持久化存储使用详解29/'},
    {title:'AsyncStorage存储key管理小技巧',url:'http://blog.csdn.net/sinat_17775997/article/details/60468845'},
];
class StorageScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title,
        }
    };

    constructor(props) {
        super(props);
        this.getDataForCache=this.getDataForCache.bind(this);
        this.saveDataToCache=this.saveDataToCache.bind(this);
        this.deleteDataFromCache=this.deleteDataFromCache.bind(this);
        this.state={
            txtRes:'',
            cacheName:'testName',
            tip:''
        }
    }

    getDataForCache(name, IsCache = true) {
        let _this=this;
        if (!IsCache)
            return null;
        if (name === undefined) {
            return null
        } else {
            return new Promise(function (resolve, reject) {
                try {
                    AsyncStorage.getItem(name).then((value) => {
                        //noinspection JSValidateTypes
                        if (value == null || value === undefined) {
                            _this.setState({
                                tip:"暂无数据"
                            });
                            resolve(null);
                        } else {
                            let Data = JSON.parse(value);
                            _this.setState({
                                tip:"获取本地数据" + value+"\n10s自动删除"
                            });
                            resolve(Data.data);
                            //60s自动删除缓存
                            let now_Time = new Date().getTime();
                            let old_Time = Number(Data.save_time);
                            if (now_Time > old_Time && (now_Time / 1000 - old_Time / 1000) >=10) {
                                _this.deleteDataFromCache(name, (err) => {
                                    if (err) {
                                        resolve(null)
                                    }
                                });
                            }
                        }

                    })
                } catch (e) {
                    reject(null)
                }
            })
        }
    }

    saveDataToCache(name, value) {
        if (typeof (value) === 'string') {
            saveData.data = value;
        } else if (typeof (value) === 'object') {
            saveData.data = value;
        } else {
            return
        }
        saveData.save_time = new Date().getTime().toString();
        this.setState({
            tip:"保存本地数据" + JSON.stringify(saveData, null, 2)
        });
        if (value !== undefined && value != null) {
            AsyncStorage.setItem(name, JSON.stringify(saveData));
        }
    }

    deleteDataFromCache(name, callback) {
        let _this=this;
        if (name !== undefined && name !== null) {
            AsyncStorage.removeItem(name, (error) => {
                callback(error);
                _this.getDataForCache(name);
            })
        }

    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Card
                        containerStyle={styles.card}
                        title={'简单例子'}
                        titleStyle={{textAlign:'left',fontWeight:'normal'}}
                    >
                        <FormInput onChangeText={(res)=>{
                            this.setState({
                                txtRes:res
                            })
                            }}/>
                        <Text style={{top:10}}>{this.state.tip}</Text>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                            <Button
                                iconRight
                                title={"存数据"}
                                buttonStyle={styles.but}
                                borderRadius={5}
                                fontSize={12}
                                onPress={()=>this.saveDataToCache(this.state.cacheName,this.state.txtRes)}
                            />
                            <Button
                                iconRight
                                title={"取数据"}
                                color={'#fff'}
                                buttonStyle={[styles.but,{backgroundColor:'#42a5f5'}]}
                                borderRadius={5}
                                fontSize={12}
                                onPress={()=>this.getDataForCache(this.state.cacheName)}
                            />
                            <Button
                                iconRight
                                title={"删数据"}
                                color={'#fff'}
                                buttonStyle={[styles.but]}
                                borderRadius={5}
                                fontSize={12}
                                onPress={()=>this.deleteDataFromCache(this.state.cacheName,()=>{})}
                            />
                        </View>
                    </Card>
                    <Card
                        containerStyle={styles.card}
                        title={'相关文章'}
                        titleStyle={{textAlign:'left',fontWeight:'normal'}}
                    >
                            {
                                urls.map((item, i) => (
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
        flex:1,
        marginBottom:10

    },
    but: {
        width: 80,
        height: 30,
        marginTop: 15
    }

});
export default StorageScreen
