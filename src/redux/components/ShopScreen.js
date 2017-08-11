import React from 'react';
import {
    Animated,
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
const IMGS = [
    'http://01.imgmini.eastday.com/mobile/20170811/20170811_ea45546c24d917e27421d6b7bfba8aac_cover_mwpm_03200403.jpeg',
    'http://01.imgmini.eastday.com/mobile/20170811/20170811_ea45546c24d917e27421d6b7bfba8aac_cover_mwpm_03200403.jpeg',
    'http://01.imgmini.eastday.com/mobile/20170811/20170811_ea45546c24d917e27421d6b7bfba8aac_cover_mwpm_03200403.jpeg',
];
const dataSource = new ViewPager.DataSource({
    pageHasChanged: (p1, p2) => p1 !== p2,
});
const {width, height} = Dimensions.get('window');
class ShopScreen extends React.Component {
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
    itemView=(name,id)=>{
        return (
        <TouchableOpacity onPress={()=>alert(name)}>
            <View style={{justifyContent:'center',alignItems:'center'}} >
                <Image
                    source={{uri: IMGS[0]}}
                    style={{height:50,width:50,borderRadius:25}}/>
                <Text style={{fontSize:12,top:5}}>{name}</Text>
            </View>
        </TouchableOpacity>
        )

    };

    render() {
        return (
            <ScrollView>
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
                    {this.circleView(['团购','活动','积分','生鲜'])}
                    {this.circleView(['酒水','衣服','抢购','商城'])}
                    <Divider />
                    {
                        [1,2,3,4,5,6,7,8,9].map((item, i) => (
                            <ListItem
                                roundAvatar
                                onPress={()=>{}}
                                key={i}
                                title={item}
                                underlayColor={'red'}
                            >
                            </ListItem>

                        ))
                    }
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
    },

});
export default ShopScreen