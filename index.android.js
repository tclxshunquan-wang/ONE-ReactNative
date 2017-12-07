/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React from 'react';
import {
  AppRegistry
} from 'react-native';
import Root from './src/redux/root'
import CodePush from 'react-native-code-push'

const app = CodePush({
  installMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: true
})(Root)

AppRegistry.registerComponent('SimpleApp',  ()=>app);
