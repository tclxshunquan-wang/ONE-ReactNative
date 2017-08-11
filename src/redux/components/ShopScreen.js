import React from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    View,
    Easing,
    Image
} from 'react-native';
import {Card, Divider} from 'react-native-elements'
import ViewPager from 'react-native-viewpager'
const IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
    'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
    'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
    'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
    'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];
const dataSource = new ViewPager.DataSource({
    pageHasChanged: (p1, p2) => p1 !== p2,
});
const deviceWidth = Dimensions.get('window').width;
class ShopScreen extends React.Component {
    constructor(props){
        super(props);
        this._renderPage=this._renderPage.bind(this);
        this.state={
            dataSource: dataSource.cloneWithPages(IMGS),
        }
    }

    _renderPage=(data,pageID)=>{
        return (
                <Image
                    source={{uri: data}}
                    style={styles.page} />
        )

    };

    render() {
        return (
            <View style={styles.itemContainer}>
                <ViewPager
                    style={{height:300,width:deviceWidth}}
                    isLoop={true}
                    autoPlay={true}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        flex: 1
    },
    card: {
        marginBottom: 5
    },
    page: {
        width: deviceWidth,
        height:300,
    },

});
export default ShopScreen