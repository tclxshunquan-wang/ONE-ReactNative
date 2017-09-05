import React, {Component} from 'react';
import {
    View,
    StatusBar,
    BackHandler
} from 'react-native';
import {connect, Provider,} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    addNavigationHelpers,
} from 'react-navigation';
import store from './store/configure-store';
import  RootNav from '../router/MyStackNav'
import  * as RoutesAction from '../redux/actions/RoutesAction'
class App extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPressed)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPressed)
    }

    onBackPressed = () => {
        const routes = this.props.routes || [];
        if (routes.index > 0) {
            this.props.actions.popBack();
            return true
        }
        return false
    };

    render() {


        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="#1e88e5"
                    translucent={false}
                />
                <RootNav
                    navigation={
                        addNavigationHelpers({
                            actions: this.props.actions,
                            dispatch: this.props.dispatch,
                            state: this.props.routes,
                        })
                    }
                />
            </View>

        );
    }
}

const AppWithNavigationState = connect(
    state => ({
        routes: state.navReducer
    }),
    (dispatch) => ({
        dispatch,
        actions: bindActionCreators(RoutesAction,dispatch),
    })
)(App);


export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                    <AppWithNavigationState/>
            </Provider>
        )
    }
}