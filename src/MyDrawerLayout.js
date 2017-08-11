import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const w = windowWidth * 3 / 4;
const containHeight=windowHeight
export default  class MyDrawerLayout extends React.Component {
  static navigationOptions=({navigation})=>{
    return ({
        title:'侧边栏'
    })
  }
  navigationView=()=>{
        let ShopJobType = "员工";
         return (
             <View style={styles.nav_contain}>
                 <View style={styles.nav_n1}>
                     <Text style={{
                         marginTop: 20,
                         color: '#fff',
                         fontSize: 18,
                     }}>{"  (" + ShopJobType + ")"}</Text>
                     <Text style={{
                         marginTop: 10,
                         color: '#8BC34A',
                         fontSize: 16,
                     }}>张三</Text>
                 </View>
                 <View style={{width: w, height: containHeight - 300}}>

                 </View>
                 <View >
                     <Text >{1.1}</Text>
                         <Text style={{fontSize: 14, color: '#888586'}}>退出登录</Text>
                 </View>
             </View>
         );
      };
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#25372d',paddingTop:20,alignItems: 'center',justifyContent: 'center',}}>
      {this.navigationView()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
    contain: {flex: 1,justifyContent: 'center'},
    iconStyle: {
        width: 26,
        height: 25,
    },
    textStyle: {
        color: '#999',
    },
    selectedTextStyle: {
        color: 'black',
    },
    leftContent: {
        flex: 1,
        width: windowWidth * 4 / 5,
        alignItems: "center",
        marginTop: 40,
    },
    tx1: {color: '#888586', fontSize: 15,},
    v1: {
        width: windowWidth * 4 / 5,
        height: 50,
        justifyContent: 'center'
    },
    T1: {
        width: windowWidth * 4 / 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tx2: {marginTop: 20, color: '#fff', fontSize: 15, textAlign: 'left'},
    nav_contain: {
        width: w,
        height: containHeight,
        top: 15,
        backgroundColor: '#25372d',
        alignItems: 'center'
    },
    nav_close: {
        height: 35,
        alignItems: 'center',
        width: w - 30,
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#404f46',
    },
    nav_n1: {width: w, height: 200, alignItems: 'center', justifyContent: 'center'},
    nav_n2: {width: w, height: 100, alignItems: 'center', justifyContent: 'center'},
    item_contain: {alignItems: 'center', width: w, height: 60},
    item_i1: {height: 50, width: w / 2 - 35, justifyContent: 'center', alignItems: 'flex-end', marginRight: 20},
    item_i2: {height: 50, width: w / 2, justifyContent: 'center', marginLeft: 5},
    version: {fontSize: 12, color: '#4b564f', height: 40, paddingTop: 10},
    line: {
        width: w - 50,
        alignItems: 'center',
        height: 0.5,
        backgroundColor: '#888586'
    }
});
