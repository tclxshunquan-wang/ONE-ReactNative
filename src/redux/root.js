import React, { Component } from 'react';
import {
    View,
    StatusBar
} from 'react-native';
import { connect,Provider } from 'react-redux';
import store from './store/configure-store';
import  RootReducer from '../router/MyStackNav'
import { addNavigationHelpers } from 'react-navigation';
@connect(state => ({
    nav: state.navReducer
}))

class AppWithNavigationState extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    backgroundColor="#1e88e5"
                    translucent={false}
                />
                <RootReducer
                    navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
                />
            </View>

        );
    }
}

export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        )
    }
}