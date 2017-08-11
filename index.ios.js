/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
    AppRegistry
} from 'react-native';
import Root from './src/redux/root'
class SimpleApp extends React.Component {
    render() {
        return (<Root/>);
    }
}
AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
