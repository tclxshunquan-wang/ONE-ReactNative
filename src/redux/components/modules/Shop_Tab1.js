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
class Shop_Tab1 extends React.PureComponent {
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
                style={{flex:1,backgroundColor:'#444'}}
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
                    {this.circleView(this.props.circleTabList1)}
                    {this.circleView(this.props.circleTabList2)}
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