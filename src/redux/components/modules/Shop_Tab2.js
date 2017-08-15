import React from 'react';
import {
    RefreshControl,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Shop_GridList  from  './Shop_GridList'
class Shop_Tab2 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.circleView=this.circleView.bind(this);
        this.itemView=this.itemView.bind(this);

    }


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
                    {this.circleView(this.props.circleTabList1)}
                    {this.circleView(this.props.circleTabList2)}
                    <Shop_GridList {...this.props}/>
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
export default Shop_Tab2