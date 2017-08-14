import React from 'react';
import {
    RefreshControl,
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {Divider, ListItem} from 'react-native-elements'
import ViewPager from 'react-native-viewpager'
import Shop_List  from  './Shop_List'
const IMGS = [
    'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201702/20/2562bc79dbfc4613b9e6d9b14e9ad660.png',
    'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201702/21/3d27f1d2cbed4f1e9b0bc41438f476a1.jpg',
    'http://xn9y1csr.gic.cnbj01.cdsgss.com/rest/upload/images/201702/22/9b33f06f22944077a1e38cdaf5541bee.png',
];
const dataSource = new ViewPager.DataSource({
    pageHasChanged: (p1, p2) => p1 !== p2,
});
const {width, height} = Dimensions.get('window');
class Shop_Tab1 extends React.Component {
    constructor(props) {
        super(props);
        this._renderPage = this._renderPage.bind(this);
        this.circleView=this.circleView.bind(this);
        this.itemView=this.itemView.bind(this);
        this.state = {
            dataSource: dataSource.cloneWithPages(IMGS),
        }
    }

    _renderPage = (data, pageID) => {
        return (
            <Image
                source={{uri: data}}
                style={styles.page}/>
        )

    };

    circleView=(obj)=>{
        return (
            <View  style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
                {
                    obj.map((item,i)=>{
                        return (<View key={item+"_"+i}>{this.itemView(item,i)}</View>)
                    })
                }
            </View>
        )
    };
    itemView=(item,id)=>{
        return (
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Shop_Info',{title:'商品详情'})}}>
                <View style={{justifyContent:'center',alignItems:'center'}} >
                    <Image
                        source={item.img}
                        style={{height:40,width:40,borderRadius:20}}/>
                    <Text style={{fontSize:12,marginTop:5,color:'#888586'}}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )

    };

    render() {
        return (
            <ScrollView
                tabLabel={this.props.tabLabel}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                    />
                }>
                <View style={styles.itemContainer}>
                    <View style={{height:150}}>
                        <ViewPager
                            style={{flex:1}}
                            isLoop={true}
                            autoPlay={true}
                            dataSource={this.state.dataSource}
                            renderPage={this._renderPage}
                        />
                    </View>
                    {this.circleView([
                        {name:'品质水果',img:require('../../../../images/img-01.png')},
                        {name:'助力享免单',img:require('../../../../images/img-03.png')},
                        {name:'极速红包',img:require('../../../../images/img-04.png')},
                        {name:'家具优品',img:require('../../../../images/img-07.png')},
                        {name:'海淘',img:require('../../../../images/img-06.png')}])}
                    {this.circleView([
                        {name:'美食汇',img:require('../../../../images/img-11.png')},
                        {name:'手机充值',img:require('../../../../images/img-18.png')},
                        {name:'电器城',img:require('../../../../images/img-14.png')},
                        {name:'时尚穿搭',img:require('../../../../images/img-17.png')},
                        {name:'爱轻奢',img:require('../../../../images/img-16.png')}])}
                    <Shop_List {...this.props}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        flex: 1
    },
    card: {
        marginBottom: 5
    },
    page: {
        flex: 1
    }

});
export default Shop_Tab1