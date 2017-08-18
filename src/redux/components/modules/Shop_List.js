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
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const VIEWABILITY_CONFIG = {
    minimumViewTime: 1000,
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
};
import data from "../../../res/CircleTabData";
const {width, height} = Dimensions.get('window');
/**
 *@fileName:Shop_List.js
 *@author:shunq_wang
 *@date:2017/8/18 下午5:43
 *@disc:商品列表
 **/
class Shop_List extends React.PureComponent {
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
            <View style={styles.itemContainer}>
                <Divider style={{height:5}}/>
                <Image
                    source={{uri:item.img}}
                    style={{height:150,width:width}}/>
                <View style={{padding:10,marginTop:5}}>
                    <Text style={{fontSize:14,marginTop:5}}>{item.name}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row',marginTop:5,alignItems:'flex-end'}}>
                            <Text style={{fontSize:16,color:'#f44336'}}>¥{(Math.random()*100).toFixed(2)}</Text>
                            <Text style={{fontSize:10,color:'#888586',marginBottom:3,marginLeft:3}}>已拼{(Math.random()*10).toFixed(1)}万件</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={{flexDirection:'row'}}>
                                {
                                    [require('../../../../images/icon-person1.png'),require('../../../../images/icon-person2.png'), require('../../../../images/icon-person3.png')].map((item, i) => {
                                        return (
                                            <Image
                                                key={i}
                                                source={item}
                                                style={{height:30,width:30,borderRadius:15}}/>
                                        )
                                    })
                                }
                            </View>

                            <Button
                                iconRight
                                onPress={()=>{}}
                                title={"去拼单"}
                                textStyle={{paddingLeft:5}}
                                buttonStyle={styles.but}
                                borderRadius={5}
                                fontSize={12}
                                icon={{name: 'chevron-right'}}
                            />
                        </View>
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
    but: {
        width: 70,
        height: 25,
        backgroundColor: '#f44336'
    }

});
export default Shop_List;

