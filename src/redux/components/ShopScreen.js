import React from 'react';
import {
  AppRegistry,
  Text,
    StyleSheet,
  Button
} from 'react-native';
import {Card, Divider} from 'react-native-elements'
class ShopScreen extends React.Component {

    render() {
        return (
            <Card
                containerStyle={styles.card}
                titleStyle={styles.title}
            >
                <Divider style={{ }} />
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
    },
    card: {
        marginBottom:5
    },

});
export default ShopScreen