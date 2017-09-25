import React, {PureComponent, PropTypes} from "react"
import {
    View,
    StyleSheet,
    Platform,
    Dimensions,
    Animated,
} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import {TabViewAnimated, TabBar} from 'react-native-tab-view';


export  default class TabBars extends PureComponent {
    static propTypes = {
        Index: PropTypes.number,
        Routes: PropTypes.array,
        TextStyle: PropTypes.object,
        ActiveTextColor: PropTypes.string,
        InactiveTextColor: PropTypes.string,
        ContainerStyle:PropTypes.object,
        scrollEnabled:PropTypes.bool,
        isShadow:PropTypes.bool,
        underLineStyle:PropTypes.object,
        isLineIndicator:PropTypes.bool,
        onChangeIndex:PropTypes.func
    };

    state: State = {
        index: 0,
        routes: [],
    };

    componentWillMount() {
        const {Index, Routes}=this.props;
        this.setState({
            index: Index,
            routes: Routes
        })
    }

    _renderLabel = props => ({route, index}) => {
        const {TextStyle, ActiveTextColor, InactiveTextColor}=this.props;
        let _textStyle = TextStyle ? TextStyle : {
            fontSize: 13,
            margin: 8,
        };
        const inputRange = props.navigationState.routes.map((x, i) => i);
        const outputRange = inputRange.map(
            inputIndex => (inputIndex === index ? ActiveTextColor ? ActiveTextColor : '#D6356C' : InactiveTextColor ? InactiveTextColor : '#222')
        );
        const color = props.position.interpolate({
            inputRange,
            outputRange,
        });

        return (
            <Animated.Text style={[_textStyle, { color}]}>
                {route.title}
            </Animated.Text>
        );
    };

    _renderIndicator = props => {
        const {width, position } = props;

        const translateX = Animated.multiply(position, width);

        return (
            <Animated.View
                style={[styles.container, { width, transform: [{ translateX }]}]}
            >
                <View style={[styles.indicator,{flex:1,borderRadius:25,borderColor:"#00000000",backgroundColor:"#f2f3f2"}]} />
            </Animated.View>
        );
    };
    _renderHeader = props => {
        let {scrollEnabled, children, containerStyle, isShadow=true,underLineStyle,isLineIndicator=true}=this.props;
        let tabWidth;
        let _padding;
        if (children && children.length == 2) {
            tabWidth = windowWidth / 3;
            _padding = windowWidth / 6
        } else if (children && children.length > 2) {
            if (scrollEnabled) {
                tabWidth = windowWidth / 3;
            } else {
                tabWidth = windowWidth / children.length;
            }
            _padding = 0
        } else {
            tabWidth = windowWidth / 3;
            _padding = 0
        }
        return (
            <View style={{width:windowWidth,justifyContent:"center",backgroundColor:'#00000000',borderBottomWidth:0, paddingRight:_padding,paddingLeft:_padding}}>
                <View style={[containerStyle?containerStyle:
               {},
                isShadow?{
                    ...Platform.select({
                        ios: {
                            shadowColor: '#CCC',
                            shadowOffset: { height: 3},
                            shadowOpacity: 0.6,
                        },
                        android: {
                            elevation: 5,
                        },
                    }),

                }:{}]}>
                    <TabBar
                        {...props}
                        scrollEnabled={scrollEnabled?scrollEnabled:false}
                        style={{backgroundColor:'#00000000',height:50}}
                        indicatorStyle={underLineStyle?underLineStyle:{backgroundColor: '#ff4081'}}
                        renderIndicator={isLineIndicator?undefined:this._renderIndicator}
                        renderLabel={this._renderLabel(props)}
                        tabStyle={{opacity: 1,borderWidth:0,width:tabWidth}}
                    />
                </View>
            </View>
        )
    };
    _renderScene = ({route}) => {
        const {children}=this.props;
        if (children && children.length > 1) {
            return children[route.key]
        }
    };

    render() {
        return (
            <TabViewAnimated
                style={this.props.style?this.props.style:{flex:1}}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={index => this.setState({index},()=>this.props.onChangeIndex?this.props.onChangeIndex(index):{})}
                lazy
            />
        )
    }

}


const styles = StyleSheet.create({
    container: {
    flex: 1,
},
    indicator: {
        ...Platform.select({
            ios: {
                shadowColor: '#CCC',
                shadowOffset: { height: 3},
                shadowOpacity: 0.6,
            },
            android: {
                elevation: 5,
            },
        }),
    },
});


