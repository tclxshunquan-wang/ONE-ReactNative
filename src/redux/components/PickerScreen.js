import React from 'react';
import {
  Text,
  View,
  StyleSheet,
    ScrollView
} from 'react-native';
import SimplePicker from './modules/SimplePicker';


/**
 *@fileName:ReduxScreen.js
 *@author:shunq_wang
 *@date:2017/8/18 下午5:47
 *@disc:通讯录选择器
 **/
class PickerScreen extends React.Component {

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
        <SimplePicker/>
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

export default PickerScreen
