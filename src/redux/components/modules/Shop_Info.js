import React from 'react';
import {
    RefreshControl,
    Dimensions,
    StyleSheet,
    View,
    Image,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native';
import {Divider, Icon, Button} from 'react-native-elements'
import ViewPager from 'react-native-viewpager'
const IMGS = [
    'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201702/20/2562bc79dbfc4613b9e6d9b14e9ad660.png',
    'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201702/21/3d27f1d2cbed4f1e9b0bc41438f476a1.jpg',
    'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201702/22/9b33f06f22944077a1e38cdaf5541bee.png',
];
const dataSource = new ViewPager.DataSource({
    pageHasChanged: (p1, p2) => p1 !== p2,
});
const {width, height} = Dimensions.get('window');
const codeTime = 60;
class Shop_Info extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title,
        }

    };


    constructor(props) {
        super(props);
        this._renderPage = this._renderPage.bind(this);
        this.timeView = this.timeView.bind(this);
        this.showTime = this.showTime.bind(this);
        this.state = {
            dataSource: dataSource.cloneWithPages(IMGS),
            height: 500,
            data: 1818235982
        };
        this._index = 1818235982;
        this._timer = null;
    }

    //倒计时
    countTime() {
        this._timer = setInterval(() => {
            this.setState({data: this._index--});
            if (this.state.data <= 0) {
                this._timer && clearInterval(this._timer);
                alert("时间到了");
            }
        }, 1000);
    }

    showTime() {
        // 获取某个时间格式的时间戳
        let timestamp3 = this.state.data;
        let newDate = new Date();
        newDate.setTime(timestamp3 * 1000);
        Date.prototype.format = function (format) {
            let date = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S+": this.getMilliseconds()
            };
            if (/(y+)/i.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            for (let k in date) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1
                        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                }
            }
            return format;
        };
        return newDate.format('h:m:s')

    }

    componentWillUnmount() {
        this._timer && clearInterval(this._timer);
    }

    componentDidMount() {
        this.countTime()

    }

    _renderPage = (data, pageID) => {
        return (
            <Image
                source={{uri: data}}
                style={styles.page}/>
        )

    };

    render() {
        return (
            <View style={styles.itemContainer}>
                <ScrollView
                    style={[styles.itemContainer,{paddingBottom:50}]}
                    refreshControl={
                    <RefreshControl
                        refreshing={false}
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                    />
                }>
                    <View style={styles.itemContainer}>
                        <View style={{height:300}}>
                            <ViewPager
                                style={{flex:1}}
                                isLoop={false}
                                autoPlay={false}
                                dataSource={this.state.dataSource}
                                renderPage={this._renderPage}
                            />
                        </View>
                        <View style={{padding:10}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                    <Text style={{fontSize:16,color:'#f44336'}}>¥9.6</Text>
                                    <Text
                                        style={{fontSize:10,color:'#888586',marginBottom:3,marginLeft:3}}>已拼8.2万件</Text>
                                </View>
                                <Text style={{fontSize:10,color:'#888586',marginTop:5}}>已团823121件 . 2人团</Text>
                            </View>
                            <Text style={{fontSize:16,marginTop:5}}> 宏辉果蔬 苹果 烟台红富士 12个 单果约75mm 总重约2.1kg 新鲜水果</Text>
                            <Text style={{fontSize:12,color:'#888586',marginBottom:3,marginLeft:3,marginTop:5}}>
                                中粮我买网所售商品均经严格的供应商资质审查、商品审查、入库全检、出货全检流程。由于部分商品包装可能会更换，我买网所示商品图片仅作为参考，关于商品的更详尽信息如包装、产地、生产日期等，以收到商品实物为准</Text>
                        </View>
                        <Divider style={{height:5}}/>
                        <View style={{paddingLeft:10,paddingRight:10}}>
                            <View
                                style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:30}}>
                                <Text style={{fontSize:12}}>123人在开团</Text>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{fontSize:12,color:'#888586'}}>查看更多</Text>
                                    <Icon
                                        name='chevron-right'
                                        color='#888586'
                                    />
                                </View>
                            </View>
                            <Divider style={{height:1}}/>
                            {this.timeView(1)}
                            <Divider style={{height:1}}/>
                            {this.timeView(2)}
                        </View>
                        <Divider style={{height:5}}/>
                        <Image
                            style={{width:width,flex:1}}
                            resizeMode="stretch"
                            source={require('../../../../images/img-info.png')}/>
                    </View>
                </ScrollView>
                <View
                    style={{height:50,position:'absolute',bottom:0,width:width,flexDirection:'row',backgroundColor:'#fff',}}>
                    {
                        [{name: '首页', img: require('../../../../images/home_up.png')},
                            {name: '喜欢', img: require('../../../../images/icon-like.png')},
                            {name: '客服', img: require('../../../../images/icon-notice.png')}].map((item, i) => {
                            return (
                                <TouchableOpacity
                                    key={i}
                                >
                                    <View
                                        style={{height:50,width:50,alignItems:'center',justifyContent:'center',borderRightWidth:1,borderRightColor:'#e6e6e6'}}>
                                        <Image
                                            style={{width:25,height:25}}
                                            source={item.img}/>
                                        <Text style={{fontSize:10,color:'#888586',marginTop:3}}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                    <View
                        style={{height:50,flex:1,backgroundColor:'#888586',justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity>
                            <Text style={{color:'#fff',fontSize:14}}>加入购物车</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{height:50,flex:1,backgroundColor:'#f44336',justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity>
                            <Text style={{color:'#fff',fontSize:14}}>立即购买</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }

    timeView = (position) => {
        return (

            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image
                        source={position==1?require('../../../../images/icon-person3.png'):require('../../../../images/icon-person4.png')}
                        style={{height:30,width:30,borderRadius:15}}/>
                    <Text style={{fontSize:12,color:'#888586',marginLeft:10}}>剩余 {this.showTime()}</Text>
                </View>
                <Button
                    iconRight
                    onPress={()=>{}}
                    title={"去参团"}
                    textStyle={{color:'#f44336'}}
                    buttonStyle={styles.but}
                    borderRadius={5}
                    fontSize={12}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
    },
    card: {
        marginBottom: 5
    },
    page: {
        flex: 1
    },
    webView: {
        width: width
    },
    but: {
        width: 80,
        height: 30,
        borderWidth: 1,
        borderColor: '#f44336',
        backgroundColor: '#fff'
    }

});
export default Shop_Info