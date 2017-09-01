import React from 'react';
import {
    StyleSheet,
    View,
    Animated,
    FlatList,
    Text,
    TouchableOpacity,
    Platform,
    AlertIOS,
} from 'react-native';
import {Card, Icon} from 'react-native-elements'
import MyAxios from '../../http/AxiosRequest'
import  Api from '../../res/api'
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
/**
 *@fileName:MyHomeScreen.js
 *@author:shunq_wang
 *@date:2017/8/18 下午5:47
 *@disc:首页
 **/
class MyHomeScreen extends React.Component {
    _keyExtractor = (item, index) => `${item.id}_${index}`;

    constructor(props) {
        super(props);
        this.itemView = this.itemView.bind(this);
        this.startPage = this.startPage.bind(this);
        this.state = {
            dis: {}
        }

    }

    componentWillMount() {
        let ax = new MyAxios({timeout: 3000});
        //检测最新版本
        ax.send({method: 'GET', url: Api.checkUpdateUrl}, (res) => {
            if(res.version>3){
                this.setState({dis: res}, () => {
                    this.scaleAnimationDialog.show()
                })
            }
        });
    }

    startPage = (item) => {
        let nav = this.props.navigation.actions;
        if (nav) {
            switch (item.id) {
                case 0://fetch/axios
                    nav.pushTo('HttpScreen', {title: item.name});
                    break;
                case 1://redux
                    nav.pushTo('ReduxScreen', {title: item.name});
                    break;
                case 2://二维码扫描
                    if (Platform.OS === 'ios') {
                        AlertIOS.alert(
                            '正在开发...',
                        )
                    } else {
                        nav.pushTo('QCodeScreen', {title: item.name});
                    }
                    break;
                case 3://数据缓存
                    nav.pushTo('StorageScreen', {title: item.name});
                    break;
                case 7://打包发布
                    nav.pushTo('PackageScreen', {title: item.name});
                    break;
                case 4://性能优化
                    nav.pushTo('WebScreen', {url: 'http://www.jianshu.com/p/57f2e987c879', title: item.name});
                    break;
                case 5://性能优化
                    nav.pushTo('WebScreen', {
                        url: 'http://www.lcode.org/史上最详细windows版本搭建安装react-native环境配置/',
                        title: item.name
                    });
                    break;
                case 6://性能优化
                    nav.pushTo('WebScreen', {url: 'http://www.jianshu.com/p/cb8bbb499841', title: item.name});
                    break;
                case 8://图表
                    nav.pushTo('ChartScreen', {title: item.name});
                    break;
                case 10://视频
                    nav.pushTo('VideoScreen', {title: item.name});
                    break;
                case 11://动画
                    nav.pushTo('AnimatableScreen', {title: item.name});
                    break;
                case 12://通讯录选择器
                    nav.pushTo('PickerScreen', {title: item.name});
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
                style={{flex: 1,justifyContent:'center'}}
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
    },
    dialogContentView: {
        flex: 1
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

