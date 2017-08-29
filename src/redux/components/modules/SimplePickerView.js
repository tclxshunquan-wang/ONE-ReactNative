import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Animated,
    FlatList,
    TouchableHighlight
} from 'react-native';
const Data = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"];
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
class SimplePickerView extends React.PureComponent {
    constructor(props)
    {
        super(props);
        this.state={
            P:0
        }
    }
    render() {
        let {
             ActiveBackgroundColor,//设置选中Tab的颜色。
             InactiveBackgroundColor,//设置选中Tab的颜色。
             ActiveTextColor,//设置选中Tab的文字颜色。
             InactiveTextColor//设置选中Tab的文字颜色。
             }=this.props;
        let ActiveColor=ActiveBackgroundColor?ActiveBackgroundColor:"#e6e6e6";
        let InactiveColor=InactiveBackgroundColor?InactiveBackgroundColor:"#42a5f5";
        return (
            <View style={[styles.container,this.props.style]}>
                <AnimatedFlatList
                    style={{backgroundColor:ActiveColor}}
                    data={Data}
                    extraData={this.state.P}
                    renderItem={(item) => (
                        <TouchableHighlight
                            underlayColor="#e6e6e6"
                            activeOpacity={0.6}
                            onPress={() => {
                                this.setState({P:item.index},()=>{
                                    this.props.itemOnclick(item)
                                })
                            }}
                        >
                            <View style={{alignItems: 'center', height: 20,
                                backgroundColor:item.index==this.state.P?InactiveColor:ActiveColor,width:this.props.style.width?this.props.style.width:25,
                            justifyContent:'center'
                            }}>
                                <Text style={{color:item.index==this.state.P?InactiveTextColor?InactiveTextColor:"#FFFFFF":ActiveTextColor?ActiveTextColor:"#000000"}}>{item.item}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                    viewabilityConfig={"VIEWABILITY_CONFIG"}
                    keyExtractor={(item, index) => index}
                />

            </View>
        )
    }
}
SimplePickerView.propTypes = {
    offset: React.PropTypes.func,
    itemOnclick: React.PropTypes.func,
    ActiveBackgroundColor:React.PropTypes.string,
    InactiveBackgroundColor:React.PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: 25
    }

});

export default  SimplePickerView