import React from 'react';
import {
    AppRegistry,
    Text,
    StyleSheet,
} from 'react-native';
import {CheckBox, Button, Card, Divider} from 'react-native-elements'
class AboutMeScreen extends React.Component {

    render() {
        return (
            <Card
                containerStyle={styles.card}
                title={'。。。'}
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
export default AboutMeScreen
