import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import MyHomeScreen from './MyHomeScreen'
export default class HomeScreen extends React.Component {



  render() {
  return (
    <View>
      <Text>首页!</Text>
      <Button
        onPress={() => {
              this.props.navigation.navigate('MyHomeScreen',{name:'第一次进入'})
        }}
        title="跳转 MyHomeScreen"
      />
    </View>
  );
}
}


// export default StackNavigator({
//   Home: { screen: HomeScreen },
//   Chat: { screen: MyHomeScreen },
//     Chat1: { screen: ChatScreen }
// });
