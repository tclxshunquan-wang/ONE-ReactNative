import React from 'react';
import {
    StyleSheet,
    View,
    Animated,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
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
const IMGS = [
    {
        name:'新鲜水果精选红富士苹果2.5kg 80-85mm 山西特产',
         img:'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201705/26/052f792370e64da190c51743b9882d63.jpg'
    },
    {
        name:'优选100 新奇士美国进口夏橙 12个装 单果重约140-200g 新鲜水果',
        img:'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201705/26/311f740d66c9458c93658b0829aacad3.jpg'
    },
    {
        name:'宏辉果蔬 苹果 烟台红富士 12个 单果约75mm 总重约2.1kg 新鲜水果',
        img:'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201705/26/4cb49807dccc4a5f812b24a59a21f646.jpg'
    },
    {
        name:'展卉 越南进口红心火龙果 3个装中果 单果约300~350g 新鲜水果',
        img:'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201705/26/5cc2b4aeadfa4d25943be62ba8d1d465.png'
    },
    {
        name:'展卉 泰国进口山竹 1kg 新鲜水果',
        img:'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201705/26/67069fdfa31b413fa8f43f7847b49203.jpeg'
    },
    {
        name:'爱奇果 智利进口 奇异果 12个装 单果约90-110g 新鲜水果',
        img:'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201705/26/7e47a2f74f5e49d19e84fae5b55d5560.jpeg'
    },
    {
        name:'华润 美仑达 精选鲜橙 2kg装 铂金果 新鲜水果',
        img:'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201705/26/a01797b20e474a3b8939485ac72c89f6.jpg'
    },
    {
        name:'【第2件立减3元】展卉 陕西大荔冬枣甜脆枣 500g 单果约12-16g（大果） 新鲜水果',
        img:'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201705/26/c07bcda3d7c845a08a0e1731510ce086.jpeg'
    },
    {
        name:'展卉 百香果西番莲 12个装 单果50-80g 新鲜水果',
        img:'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201705/26/c6f89927d0fb4990a6943c425112fb2f.jpg'
    },
    {
        name:'展卉 泰国进口椰青 2个装 单果约750g 赠送开椰器和吸管 新鲜水果',
        img:'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201705/26/d256c4fee1e04da1865e58af17924470.jpeg'
    },
    {
        name:'国产红心火龙果 4个装中果 单果约330g 新鲜水果',
        img:'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201705/26/dc70c0613285421bbc1f05d2507150a6.jpg'
    }
];
const {width, height} = Dimensions.get('window');
class Shop_List extends React.Component {
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
                            <Text style={{fontSize:16,color:'#f44336'}}>¥9.6</Text>
                            <Text style={{fontSize:10,color:'#888586',marginBottom:3,marginLeft:3}}>已拼8.2万件</Text>
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
                    data={IMGS}
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
export default connect(state => ({
        ...state,//配置全局store 中所有的state
        state: state.homeReducer
    }),
    (dispatch) => ({
        actions: bindActionCreators(commentAction, dispatch)
    })
)(Shop_List);

