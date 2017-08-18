
import React from 'react';
import BarcodeScanner from 'react-native-barcodescanner';
import {bindActionCreators} from 'redux';
import * as homeAction from '../actions/HomeAction';
import {connect} from 'react-redux';

let tip=true;
/**
 *@fileName:QCodeScreen.js
 *@author:shunq_wang
 *@date:2017/8/18
 *@disc:二维码扫描
 **/
class QCodeScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title,
        }

    };


    constructor(props) {
        super(props);
        this.barcodeReceived = this.barcodeReceived.bind(this);
        this.state = {
            torchMode: 'off',
            cameraType: 'back',
        };
        tip=true
    }

    barcodeReceived(e) {
        if(e && tip){
            this.props.actions.setDis({id:2,Barcode:e.data,Type:e.type});
            this.props.navigation.goBack();
            tip=false
        }
    }

    render() {
        return (
            <BarcodeScanner
                onBarCodeRead={(e)=>this.barcodeReceived(e)}//扫描结果回掉
                style={{ flex: 1 }}
                torchMode={this.state.torchMode}
                cameraType={this.state.cameraType}
            />
        );
    }
}
export default connect(state => ({
        ...state,//配置全局store 中所有的state
        state: state.homeReducer
    }),
    (dispatch) => ({
        actions: bindActionCreators(homeAction, dispatch)
    })
)(QCodeScreen);
