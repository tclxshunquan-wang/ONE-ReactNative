import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Animated,
    FlatList,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import SimplePickerView from './SimplePickerView';
import Data from '../../../res/PickerData';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
let _width = 0;
const {width, height} = Dimensions.get('window');
let num = 0;
/**
 *@fileName:SimplePicker.js
 *@author:shunq_wang
 *@date:2017/8/24 下午5:24
 *@disc: 通讯录选择器
 **/
class SimplePicker extends React.PureComponent {

    constructor(props) {
        super(props);
        this._itemView = this._itemView.bind(this);

        this.state = {
            clickPosition: 0
        };

    }

    _itemView = ({item}) => {
        let child = this.props.children;
        let itemView = (
            <TouchableHighlight
                underlayColor="#e6e6e6"
                activeOpacity={0.6}
                onPress={() => {
                    alert(item.name)
                }}>
                <View style={styles.itemView}>
                    <View style={{flexDirection: 'row', width: width - _width}}>
                        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
                            <Text>{"name:"}</Text>
                            <Text>{item.name}</Text>
                        </View>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <Text>{"tel:"}</Text>
                            <Text>{item.tel}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
        if (child && child.length > 0)
            return child;
        else
            return itemView;
    };


    _onChangeScrollToIndex = (text) => {
        let position = 0;
        Data.forEach((t, p, o) => {
            if (p > 0 && Data[p - 1].name == t.name) {
                return
            }
            if (t.name == text.item) {
                if (p >= Data.length - num)
                    position = Data.length - num;
                else
                    position = p;
            }
        });
        this._listRef.getNode().scrollToIndex({viewPosition: 0, index: Number(position)});
    };
    //noinspection JSAnnotator
    _getItemLayout = (data: any, index: number) => {
        const [length, separator, header]=[50, 0, 0];
        return {length, offset: (length + separator) * index + header, index};
    };
    _captureRef = (ref) => {
        this._listRef = ref;
    };
    //noinspection JSAnnotator
    _onViewableItemsChanged = (info) => {
        // Impressions can be logged here

        console.log(info)
    };

    _scrollPos = new Animated.Value(0);

    _scrollSinkY = Animated.event(
        [{nativeEvent: { contentOffset: { y: 1} }}],
        {useNativeDriver: true},
    );
    render() {
        let _PickerViewStyle = this.props;
        _width = _PickerViewStyle ? _PickerViewStyle.width ? _PickerViewStylewidth : 25 : 25;
        return (
            <View
                style={styles.container}
                onLayout={(event) => {
                    num = parseInt(event.nativeEvent.layout.height / 50);
                }}
            >
                <AnimatedFlatList
                    ref={this._captureRef}
                    style={[styles.list, {right: _width}]}
                    data={Data}
                    extraData={this.state}
                    renderItem={this._itemView}
                    viewabilityConfig={"VIEWABILITY_CONFIG"}
                    keyExtractor={(item, index) => index}
                    getItemLayout={this._getItemLayout}
                    onScroll={this._scrollSinkY}
                />

                <SimplePickerView
                    style={_PickerViewStyle}
                    initSelectedP={this.state.clickPosition}
                    itemOnclick={(res) => this._onChangeScrollToIndex(res)}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#FFFFFF'
    },
    itemView: {
        height: 50,
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    }
});

export default SimplePicker