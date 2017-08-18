import React from "react";
import {
    StyleSheet,
    View,
    ListView,
    Image,
    Text,
    TouchableOpacity,
    Dimensions
} from "react-native";
import data from "../../../res/CircleTabData";
const {width, height} = Dimensions.get('window');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
/**
 *@fileName:Shop_GridList.js
 *@author:shunq_wang
 *@date:2017/8/18 下午5:42
 *@disc: 商品列表
 **/

class Shop_GridList extends React.PureComponent {

    constructor(props) {
        super(props);
        this.itemView = this.itemView.bind(this);
        this.startPage = this.startPage.bind(this);
        this.state={
            dataSource:ds.cloneWithRows(data.gridListData)
        }
    }

    startPage = (item) => {

    };

    componentDidMount() {
    }

    //noinspection JSAnnotator
    itemView = (rowData: string, sectionID: number, rowID: number) => {
        return(
        <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate('Shop_Info',{title:'商品详情'})}}
        >
            <View style={{width:width/2-2,marginTop:4,backgroundColor:'#fff',minHeight:230}}>
                <Image
                    source={{uri:rowData.img}}
                    style={{height:150}}/>
                <Text style={{fontSize:10,color:'#888586',marginTop:2,paddingLeft:5,paddingRight:5,}} numberOfLines={3}>{rowData.name}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,paddingLeft:5,paddingRight:5}}>
                    <Text style={{color:'#f44336',fontSize:14}}>¥{(Math.random()*100).toFixed(2)}</Text>
                    <Text style={{color:'#c7c8c7',fontSize:11}}>已拼{(Math.random()*10).toFixed(1)}万件</Text>
                </View>
            </View>
        </TouchableOpacity>)
    };


    render() {
        return (
            <View
                style={{flex:1}}
            >
                <ListView
                    initialListSize={12}
                    contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this.itemView}
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
    },
    list: {
        marginTop:5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        backgroundColor: '#e5e5e5'
    },
});
export default Shop_GridList;

