import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';
import {ListItem, Button, Card, List} from 'react-native-elements'
import {send} from '../../http/AxiosRequest'
import  {fetch_} from '../../http/FetchRequest'
class HttpScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title,
        }

    };


    constructor(props) {
        super(props);
        this.getRes = this.getRes.bind(this);
        this.state = {
            url: '',
            resA: [],
            resB: ""
        }
    }

    componentDidMount() {
        this.setState({
            url: this.props.navigation.state.params.url ? this.props.navigation.state.params.url : ''
        })
    }

    getRes(type) {
        if (type == 'axios') {
            this.setState({
                resA: [],
                resB:""
            });
            send({method: 'GET', url: 'toutiao/index?type=type'}, (res) => {
                this.setState({
                    resA: res.result.data
                })
            });
        } else {
            this.setState({//数据重置
                resA: [],
                resB: ""
            });
            fetch_({method: 'GET', url: 'http://toutiao-ali.juheapi.com/toutiao/index?type=type'}, (res) => {
                this.setState({
                    resB: JSON.stringify(res)
                })
            });
        }

    }

    render() {
        return (
            <ScrollView>
                <View
                    style={{flex:1}}
                >
                    <Card
                        containerStyle={styles.card}
                        title="Axios"
                        titleStyle={styles.title}
                    >
                        <List>
                            {
                                this.state.resA.map((l, i) => (
                                    <ListItem
                                        onPress={()=>{this.props.navigation.navigate('WebScreen',{url:l.url,title:l.title});}}
                                        roundAvatar
                                        avatar={{uri:l.thumbnail_pic_s}}
                                        key={i}
                                        title={l.title}
                                    />
                                ))
                            }
                        </List>
                        <Button
                            iconRight
                            title='发送请求'
                            onPress={()=>this.getRes('axios')}
                            icon={{name: 'send'}}
                            buttonStyle={styles.but}
                            borderRadius={5}
                            fontSize={12}
                            disabledStyle={{}}
                        />
                    </Card>
                    <Card
                        containerStyle={styles.card}
                        title="Fetch"
                        titleStyle={styles.title}
                    >

                        <Text>{this.state.resB}</Text>
                        <Button
                            iconRight
                            title='发送请求'
                            onPress={()=>this.getRes('fetch')}
                            icon={{name: 'send'}}
                            buttonStyle={styles.but}
                            borderRadius={5}
                            fontSize={12}
                            disabledStyle={{}}
                        />
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    card: {},
    but: {
        width: 80,
        height: 30,
        marginTop: 15
    }

});
export default HttpScreen
