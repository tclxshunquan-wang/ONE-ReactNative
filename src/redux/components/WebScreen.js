import React from 'react';
import {
    StyleSheet,
    View,
    WebView,
    ActivityIndicator
} from 'react-native';
const WEBVIEW_REF = 'webview';
/**
 *@fileName:WebScreen.js
 *@author:shunq_wang
 *@date:2017/8/18 下午5:48
 *@disc:WebView
 **/
class WebScreen extends React.Component {
    static navigationOptions=({navigation})=>{
        return {
            title:navigation.state.params.title,
        }
    };


    constructor(props) {
        super(props);
        this.state={
            url:''
        }
        console.disableYellowBox = true;
    }

    componentDidMount(){
        this.setState({
            url:this.props.navigation.state.params.url?this.props.navigation.state.params.url:''
        })
    }

    render() {
        return (
            <View
                style={{flex:1}}
            >
                <WebView
                    ref={WEBVIEW_REF}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    renderLoading={()=>{
                        return(
                              <ActivityIndicator style={styles.ind} color="black" size="large"/>
                        )
                    }}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    webView: {
        backgroundColor: '#fff',
    },
    ind:{
        alignItems:'center',
        justifyContent:'center'
    }

});
export default WebScreen
