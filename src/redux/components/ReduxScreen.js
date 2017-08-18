import React from 'react';
import {
  Text,
  View,
  StyleSheet,
    ScrollView
} from 'react-native';
import {bindActionCreators} from 'redux';
import * as commentAction from '../actions/CommentAction';
import {connect} from 'react-redux';
import {List, Button, Card, ListItem} from 'react-native-elements'

let dis="        Redux is a predictable state container for JavaScript apps.(If you're looking for a WordPress framework, check out Redux Framework.)"
         +"\n        It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger."
         +"\n        You can use Redux together with React, or with any other view library."
         +"It is tiny (2kB, including dependencies).";
let urls=[
    {title:'Redux学习(一)之添加Redux到自己的项目',url:'http://www.jianshu.com/p/b4aff60ee4df'},
    {title:'React-Navigation与Redux整合详解',url:'http://www.lcode.org/react-navigation-redux/'},
    {title:'说一说 React 和 Redux 你知道或者不知道的一些事情',url:'https://juejin.im/post/590fb6fea0bb9f00589d7667'},
];
class ReduxScreen extends React.Component {

    static navigationOptions=({navigation})=>{
        return {
            title:navigation.state.params.title,
        }

    };

    componentWillMount() {
        console.log(this.props)

    }
    render() {
    return (

        <ScrollView>
            <View>
                <Card
                    containerStyle={styles.card}
                    title={dis}
                    titleStyle={{textAlign:'left',fontWeight:'normal'}}
                >
                    <Text>简单例子</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Button
                            iconRight
                            onPress={()=>{this.props.actions.add()}}
                            title={"+"}
                            buttonStyle={styles.but}
                            borderRadius={5}
                            fontSize={12}
                        />
                        <Text style={{top:5}}>{this.props.state.sum}</Text>
                        <Button
                            iconRight
                            onPress={()=>{this.props.actions.del()}}
                            title={"-"}
                            buttonStyle={styles.but}
                            borderRadius={5}
                            fontSize={12}
                        />
                    </View>
                    <Text style={{top:10}}>相关文章</Text>
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

export default connect(state => ({
        ...state,//配置全局store 中所有的state
        state: state.reduxReducer
    }),
    (dispatch) => ({
        actions: bindActionCreators(commentAction, dispatch)
    })
)(ReduxScreen);
