import React from "react";
import {
    StyleSheet,
    View,
    Animated,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    Dimensions
} from "react-native";
import {CheckBox, Button, Divider, Icon} from 'react-native-elements'
import {bindActionCreators} from 'redux';
import * as commentAction from '../../actions/CommentAction';
import {connect} from 'react-redux';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const VIEWABILITY_CONFIG = {
    minimumViewTime: 1000,
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
};
import data from "../../../res/CircleTabData";
const {width, height} = Dimensions.get('window');
/**
 *@fileName:Shop_Car.js
 *@author:shunq_wang
 *@date:2017/8/18
 *@disc:购物车
 **/
class Shop_Car extends React.PureComponent {

    static navigationOptions=({navigation})=>{
        return {
            title:"购物车",
        }

    };


    _keyExtractor = (item, index) => `${item.id}_${index}`;

    constructor(props) {
        super(props);
        this.itemView = this.itemView.bind(this);
        this.startPage = this.startPage.bind(this);
    }

    startPage = (item) => {

    };

    componentDidMount() {
    }

    itemView = ({item}) => {
        return(
            <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate('Shop_Info',{title:'商品详情'})}}
            >
                <Divider style={{height:5}}/>
                <View style={styles.itemContainer}>
                    <Image
                        source={{uri:item.img}}
                        style={{height:100,width:100}}/>
                    <View style={{padding:10,marginTop:5}}>
                        <Text style={{fontSize:12}} numberOfLines={3}>{item.name}</Text>
                            <View style={{flexDirection:'row',alignItems:'center',position:'absolute',bottom:5,}}>
                                <Button
                                    iconRight
                                    title={"+"}
                                    textStyle={{color:'#fff',fontSize:12}}
                                    buttonStyle={styles.but1}
                                    borderRadius={5}
                                    fontSize={12}
                                />
                                <Text >{parseInt(Math.random()*100)}</Text>
                                <Button
                                    iconRight
                                    title={"-"}
                                    textStyle={{color:'#fff',fontSize:12}}
                                    buttonStyle={styles.but2}
                                    borderRadius={5}
                                    fontSize={12}
                                />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>)
    };


    render() {
        return (
            <View
                style={{flex:1}}
            >
                <AnimatedFlatList
                    style={{flex:1}}
                    renderItem={this.itemView}
                    data={data.ListData}
                    ListFooterComponent={this._renderFooter}
                    onRefresh={this._onRefresh}
                    viewabilityConfig={VIEWABILITY_CONFIG}
                    keyExtractor={this._keyExtractor}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection:'row',
    },
    card: {
        marginBottom: 5
    },
    title: {
        fontSize: 14,
    },
    line: {
        flex: 1,
        height: 0.5,
        backgroundColor: '#888586'
    },
    disTxt: {
        fontSize: 12,
        color: '#888586'
    },
    but1: {
        width: 60,
        height: 25,
        backgroundColor: '#f44336'
    },
    but2: {
        width: 60,
        height: 25,
        backgroundColor: '#888586'
    }

});


export default connect(state => ({
        ...state,//配置全局store 中所有的state
        state: state.reduxReducer
    }),
    (dispatch) => ({
        actions: bindActionCreators(commentAction, dispatch)
    })
)(Shop_Car);


