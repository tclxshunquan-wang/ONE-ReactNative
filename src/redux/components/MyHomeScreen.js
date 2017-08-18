import React from 'react';
import {
    StyleSheet,
    View,
    Animated,
    FlatList,
    Text,
    TouchableOpacity,
    Platform,
    AlertIOS
} from 'react-native';
import {CheckBox, Button, Card, Icon} from 'react-native-elements'
import {bindActionCreators} from 'redux';
import * as homeAction from '../actions/HomeAction';
import * as commentAction from '../actions/CommentAction';
import {connect} from 'react-redux';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const VIEWABILITY_CONFIG = {
    minimumViewTime: 1000,
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
};
class MyHomeScreen extends React.Component {
    _keyExtractor = (item, index) => `${item.id}_${index}`;

    constructor(props) {
        super(props);
        this.itemView = this.itemView.bind(this);
        this.startPage = this.startPage.bind(this);

    }



    startPage = (item) => {
        let navigation = this.props.navigation;
        if (navigation) {
            switch (item.id) {
                case 0://fetch/axios
                    navigation.navigate('HttpScreen', {title: item.name});
                    break;
                case 1://redux
                    navigation.navigate('ReduxScreen', {title: item.name});
                    break;
                case 2://二维码扫描
                    if(Platform.OS==='ios'){
                        AlertIOS.alert(
                            '正在开发...',
                        )
                    }else{
                        navigation.navigate('QCodeScreen', {title: item.name});
                    }
                    break;
                case 3://数据缓存
                    navigation.navigate('StorageScreen', {title: item.name});
                    break;
                case 7://打包发布
                    navigation.navigate('PackageScreen', {title: item.name});
                    break;
                case 4://性能优化
                    navigation.navigate('WebScreen', {url: 'http://www.jianshu.com/p/57f2e987c879', title: item.name});
                    break;
                case 5://性能优化
                    navigation.navigate('WebScreen', {
                        url: 'http://www.lcode.org/史上最详细windows版本搭建安装react-native环境配置/',
                        title: item.name
                    });
                    break;
                case 6://性能优化
                    navigation.navigate('WebScreen', {url: 'http://www.jianshu.com/p/cb8bbb499841', title: item.name});
                    break;
                case 8://图表
                    navigation.navigate('ChartScreen', {title: item.name});
                    break;
                case 10://视频
                    navigation.navigate('VideoScreen', {title: item.name});
                    break;

            }
        }
    };

    componentDidMount() {
    }

    itemView = ({item}) => {
        return <View style={styles.itemContainer}>
            <TouchableOpacity
                onPress={() => this.startPage(item)}
            >
                <Card
                    containerStyle={styles.card}
                    title={item.name}
                    titleStyle={styles.title}
                >
                    <Text style={styles.disTxt}>{item.dis}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Icon
                            name='chevron-right'/>
                    </View>
                </Card>
            </TouchableOpacity>
        </View>
    };


    render() {
        return (
            <View
                style={{flex: 1}}
            >
                <AnimatedFlatList
                    style={{flex: 1}}
                    renderItem={this.itemView}
                    data={this.props.state.homeList}
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
    }

});
export default connect(state => ({
        ...state,//配置全局store 中所有的state
        state: state.homeReducer
    }),
    (dispatch) => ({
        actions: bindActionCreators(Object.assign({}, homeAction, commentAction), dispatch)
    })
)(MyHomeScreen);

