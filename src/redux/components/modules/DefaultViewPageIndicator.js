'use strict';
import React from "react";
import {
    StyleSheet,
    View,
    Dimensions
} from "react-native";

const DOT_SIZE = 6;
const DOT_SAPCE = 4;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    tab: {
        alignItems: 'center',
    },

    tabs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    dot: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE / 2,
        backgroundColor: '#E0E1E2',
        marginLeft: DOT_SAPCE,
        marginRight: DOT_SAPCE,
    },

    curDot: {
        position: 'absolute',
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE / 2,
        backgroundColor: '#80ACD0',
        margin: DOT_SAPCE,
        bottom: 0,
    },
});

const DefaultViewPageIndicator = React.createClass({
    propTypes: {
        activePage: React.PropTypes.number,
        pageCount: React.PropTypes.number
    },

    getInitialState() {
        return {
            viewWidth: 0,
        };
    },

    renderIndicator(page) {
        const isTabActive = this.props.activePage === page;
        return (
            <View style={styles.tab} key={'idc_' + page}>
                <View style={[styles.dot,{backgroundColor:!isTabActive?"#E0E1E2":"#80ACD0"}]} />
            </View>
        );
    },

    render() {
        const pageCount = this.props.pageCount;
        const indicators = [];
        for (let i = 0; i < pageCount; i++) {
            indicators.push(this.renderIndicator(i))
        }

        return (
            <View style={styles.tabs}
                  onLayout={(event) => {
            let viewWidth = event.nativeEvent.layout.width;
            if (!viewWidth || this.state.viewWidth === viewWidth) {
              return;
            }
            this.setState({
              viewWidth: viewWidth,
            });
          }}>
                {indicators}
            </View>
        );
    },
});

module.exports = DefaultViewPageIndicator;
