import React, { Component } from 'react';
import {
    View,
    StatusBar,
} from 'react-native';
import { connect,Provider } from 'react-redux';
import store from './store/configure-store';
import  RootReducer from '../router/MyStackNav'


class App extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    backgroundColor="#1e88e5"
                    translucent={false}
                />
                <RootReducer />
            </View>

        );
    }
}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        )
    }
}