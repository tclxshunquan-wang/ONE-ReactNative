/* @flow */
/* eslint-disable import/no-commonjs */

import React, {PureComponent} from 'react';
import {
    Animated,
    View,
    Dimensions,
    StyleSheet,
    Platform
} from "react-native";
import DefaultViewPageIndicator from "./DefaultViewPageIndicator";
import StaticRenderer from 'react-native/Libraries/Components/StaticRenderer';
import {TabViewAnimated, TabViewPagerPan} from 'react-native-tab-view';
import type {NavigationState} from 'react-native-tab-view/types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const initialLayout = {
    height: 0,
    width: windowWidth,
    paddingBottom: 0
};
const PERCENT = Platform.OS === "ios" ? 0.3 : 0.3;

type Route = {
    key: string,
};

type State = NavigationState<Route>;

export default class TabViewPage extends PureComponent<void, *, State> {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: Object.keys([0, 1]).map(key => ({key})),
            currentPage: 0,
            viewWidth: 0,
            scrollValue: new Animated.Value(1)
        };
    }

    componentWillMount() {
        const {index, dataSource}=this.props;
        if (dataSource) {
            this.setState({
                index: index ? index : 0,
                routes: Object.keys(dataSource).map(key => ({key}))
            })
        }
    }

    renderPageIndicator = props => {
        if (this.props.renderPageIndicator === false) {
            return null;
        } else if (this.props.renderPageIndicator) {
            return React.cloneElement(this.props.renderPageIndicator(), props);
        } else {
            return (
                <View style={styles.indicators}>
                    <DefaultViewPageIndicator {...props} />
                </View>
            );
        }
    };

    _buildCoverFlowStyle = ({layout, position, route, navigationState}) => {
        const {width} = layout;
        const {routes} = navigationState;
        const currentIndex = routes.indexOf(route);
        // Prepend '-1', so there are always at least 2 items in inputRange
        const inputRange = [-1, ...routes.map((x, i) => i)];

        const translateOutputRange = inputRange.map(i => {
            return width / 4 * (currentIndex - i) * -1;
        });
        const scaleOutputRange = inputRange.map(i => {
            if (currentIndex === i) {
                return 1;
            } else {
                return 0.7;
            }
        });
        const opacityOutputRange = inputRange.map(i => {
            if (currentIndex === i) {
                return 1;
            } else {
                return 0.4;
            }
        });

        const translateX = position.interpolate({
            inputRange,
            outputRange: translateOutputRange,
        });
        const scale = position.interpolate({
            inputRange,
            outputRange: scaleOutputRange,
        });
        const opacity = position.interpolate({
            inputRange,
            outputRange: opacityOutputRange,
        });

        return {
            transform: [{translateX}, {scale}],
            opacity
        };
    };
    _buildCoverFlow = ({layout, position, route, navigationState}) => {
        const {width} = layout;
        const {routes} = navigationState;
        const currentIndex = routes.indexOf(route);
        // Prepend '-1', so there are always at least 2 items in inputRange
        const inputRange = [-1, ...routes.map((x, i) => i)];
        const elevationOutputRange = inputRange.map(i => {
            if (currentIndex === i) {
                return 8;
            } else {
                return 2;
            }
        });
        const elevation = position.interpolate({
            inputRange,
            outputRange: elevationOutputRange,
        });
        return {
            elevation
        };

    };
    _handleIndexChange = index => {
        this.setState({
            index,
        });
    };

    _renderScene = props => {
        const {route}=props;
        return (
            <Animated.View style={[styles.page, this._buildCoverFlowStyle(props)]}>
                <Animated.View style={[styles.album,Platform.OS=="ios"?{}:this._buildCoverFlow(props)]}>
                    {this._getPage(route.key)}
                </Animated.View>
            </Animated.View>
        );
    };
    _getPage = (pageIdx: number, loop: boolean = false) => {
        let dataSource = this.props.dataSource;
        if (pageIdx == this.state.index) {
            return (
                <StaticRenderer
                    key={'p_'+ pageIdx+(loop ? '_1' : '')}
                    shouldUpdate={true}
                    render={this.props.renderPage.bind(
                        null,
                dataSource[pageIdx],
                this.state.index
                 )}
                />
            );
        }

    };
    _renderPager = props => {
        return <TabViewPagerPan
            style={{paddingBottom:0}}
            swipeEnabled={true}
            animationEnabled={true}
            {...props} />;
    };

    render() {
        return (
            <View style={styles.container}>
                <TabViewAnimated
                    style={[{flex:1}, this.props.style]}
                    navigationState={this.state}
                    renderPager={this._renderPager}
                    renderScene={this._renderScene}
                    onIndexChange={this._handleIndexChange}
                    initialLayout={initialLayout}
                />
                <View style={styles.indicator}>
                    {this.renderPageIndicator({
                        pageCount: this.state.routes ? this.state.routes.length : 0,
                        scrollValue: this.state.scrollValue,
                        activePage: this.state.index,
                        scrollOffset: 0,
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f2f2',
        ...Platform.select({
            ios: {
                height: windowHeight * PERCENT,
            },
            android: {
                height: windowHeight * PERCENT,
            }
        })
    },
    page: {
        flex: 1,
        alignItems: 'center'
    },
    album: {
        width: windowWidth - 60,
        ...Platform.select({
            ios: {
                height: windowHeight * PERCENT - 20,
                shadowColor: '#CCC',
                shadowOpacity: 1,
                shadowRadius: 8,
                shadowOffset: {
                    height: 8,
                },
            },
            android: {
                height: windowHeight * PERCENT - 20,
            }
        }),
        bottom: 0,
        position: "absolute",
        marginRight: 30,
        marginLeft: 30,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5
    },
    cover: {
        flex: 1
    },
    label: {
        margin: 16,
        color: '#fff',
    },
    indicator: {
        flex: 1,
        position: "absolute",
        left: 0,
        bottom: 10,
        right: 0
    }
});