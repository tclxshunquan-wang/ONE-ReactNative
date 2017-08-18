import React from 'react';
import {
    Image,
    Text,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {CheckBox, Button, Card, Divider} from 'react-native-elements'
const URL = [
    {
        title: '掘金',
        url: "https://juejin.im/user/5720858ff38c8400598313c5",
        img: require("../../../images/icon-juejin.jpeg")
    },
    {
        title: 'GitHub',
        url: "https://github.com/kenvies",
        img: require("../../../images/icon-github.jpg")
    },
    {
        title: '简书',
        url: "http://www.jianshu.com/u/46ef8cf27e08",
        img: require("../../../images/icon-jianshu.png")
    }
];

let str = '        作为一个练手项目，ONE-ReactNative包含了很多我们常用的功能，例如网络请求、Redux、图表等。另外值得大家学习的是该项目包含了一个较为完整的商城模块。作者作为一个苦逼的程序猿，希望用一种简单明了的手段让学习React Native的小伙伴尽快入门。\n' +
    "        同时我也希望志同道合的伙伴联合在一起，相互分享，相互探讨(QQ群:581621024)";
let i = 0;
/**
 *@fileName:AboutMeScreen.js
 *@author:shunq_wang
 *@date:2017/8/18 下午5:46
 *@disc:个人中心
 **/
class AboutMeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.circleBut = this.circleBut.bind(this);
        this.typing = this.typing.bind(this);
        this.state = {
            info: ""
        }
    }

    componentDidMount() {
        this.typing()
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    typing = () => {//js逐个打印
        if (i <= str.length) {
            this.setState({
                info: str.slice(0, i++) + '_'
            });
            this.timer = setTimeout(
                () => {
                    this.typing()
                },
                200
            );
        } else {
            this.setState({
                info: str
            });
            this.timer && clearTimeout(this.timer);
        }
    };

    render() {
        return (
            <ScrollView>

                <View style={{alignItems: 'center', paddingTop: 15, paddingBottom: 15}}>
                    <Image style={{width: 50, height: 50, borderRadius: 25}}
                           source={require("../../../images/icon-head.jpeg")}/>
                    <Text style={{marginTop: 10, fontSize: 16}}>Quan</Text>
                    <Card
                        containerStyle={styles.itemContainer}
                    >
                        <Text style={{fontSize: 12, color: '#888586', lineHeight: 20}}>{this.state.info}</Text>
                    </Card>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', minWidth: 240, marginTop: 20}}>
                        {this.circleBut(URL[0].img, () => this.props.navigation.navigate('WebScreen', {
                            url: URL[0].url,
                            title: URL[0].title
                        }))}
                        {this.circleBut(URL[1].img, () => this.props.navigation.navigate('WebScreen', {
                            url: URL[1].url,
                            title: URL[1].title
                        }))}
                        {this.circleBut(URL[2].img, () => this.props.navigation.navigate('WebScreen', {
                            url: URL[2].url,
                            title: URL[2].title
                        }))}
                    </View>
                </View>
            </ScrollView>
        );
    }

    circleBut = (img, fuc) => {
        return (
            <TouchableOpacity onPress={fuc}>
                <View style={{minWidth: 80, alignItems: 'center'}}>
                    <Image
                        style={{width: 30, height: 30, borderRadius: 5}}
                        source={img}/>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        marginTop: 10,
        maxHeight: 300,
    },
    card: {
        marginBottom: 5,
        flex: 1,
        alignItems: 'center'

    },
    but: {
        width: 80,
        height: 30,
        marginTop: 15,
    }

});
export default AboutMeScreen
