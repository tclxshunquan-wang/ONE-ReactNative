import React from 'react';
import {
    StyleSheet,
    Platform,
    ToastAndroid,
    ScrollView,
    Dimensions
} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
import {List, Button, Card, FormInput, ListItem} from 'react-native-elements'
const list=[
    {
        id: 2,
        title: '<PieChart>',
        description: 'Displays a PieChart'
    }, {
        id: 3,
        title: '<BarChart>',
        description: 'Displays a BarChart'
    }, {
        id: 4,
        title: '<StackedBarChart>',
        description: 'Displays a StackedBarChart'
    }, {
        id: 5,
        title: '<LineChart>',
        description: 'Displays a LineChart'
    }, {
        id: 6,
        title: '<RadarChart>',
        description: 'Displays a RadarChart'
    }, {
        id: 7,
        title: '<BubbleChart>',
        description: 'Displays a BubbleChart'
    }, {
        id: 8,
        title: '<ScatterChart>',
        description: 'Displays a ScatterChart'
    }, {
        id: 9,
        title: '<CandleStickChart>',
        description: 'Displays a CandleStickChart'
    }, {
        id: 10,
        title: '<TimeSeriesLineChart>',
        description: 'Displays a Time Series Line Chart with custom marker'
    }, {
        id: 11,
        title: '<CombinedChart>',
        description: 'Displays a CombinedChart with Bar and Line data.'
    }, {
        id: 12,
        title: '<ZeroLineChart>',
        description: 'Displays a zero-based BarChart.'
    }, {
        id: 13,
        title: '<Live Updating graph>',
        description: 'Live updating a line chart'
    }, {
        id: 14,
        title: '<GroupBarChart>',
        description: 'Displays a group BarChart'
    },{
        id: 15,
        title: '<HorizontalBarChart>',
        description: 'Displays a HorizontalBarChart'
    },{
        id: 16,
        title: '<AxisLineChart>',
        description: 'Displays a AxisLineChart'
    }



];
const {width, height}=Dimensions.get('window')
/**
 *@fileName:ChartScreen.js
 *@author:shunq_wang
 *@date:2017/8/18 下午5:46
 *@disc:图表
 **/
class ChartScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title,
        }
    };

    constructor(props) {
        super(props);
        this.intent=this.intent.bind(this);

    }

    intent(position) {
        let content = null;
        let navText = 'ChartExplorer';
        let navigation = this.props.navigation;
        if (navigation) {
            switch (position) {
                case 2:
                    navText = 'PieChart';
                    navigation.navigate('PieChartScreen', {title: navText});
                    break;
                case 3:
                    navText = 'BarChart';
                    navigation.navigate('BarChartScreen', {title: navText});
                    break;
                case 4:
                    navText = 'StackedBarChart';
                    navigation.navigate('StackedBarChartScreen', {title: navText});
                    break;

                case 5:
                    navText = 'LineChart';
                    navigation.navigate('LineChartScreen', {title: navText});
                    break;
                case 6:
                    navText = 'RadarChart';
                    navigation.navigate('RadarChartScreen', {title: navText});
                    break;
                case 7:
                    navText = 'BubbleChart';
                    navigation.navigate('BubbleChartScreen', {title: navText});
                    break;
                case 8:
                    navText = 'ScatterChart';
                    navigation.navigate('ScatterChartScreen', {title: navText});
                    break;
                case 9:
                    navText = 'CandleStickChart';
                    navigation.navigate('CandleStickChartScreen', {title: navText});
                    break;
                case 10:
                    navText = 'TimeSeriesLineChart';
                    navigation.navigate('TimeSeriesLineChartScreen', {title: navText});
                    break;

                case 11:
                    navText = 'CombinedChart';
                    navigation.navigate('CombinedChartScreen', {title: navText});
                    break;
                case 12:
                    navText = 'ZeroLineChart';
                    navigation.navigate('ZeroLineChartScreen', {title: navText});
                    break;

                case 13:
                    navText = 'Live Updating';
                    if(Platform.OS==='ios'){
                        navigation.navigate('LiveUpdateChartScreen', {title: navText});
                    }else{
                        ToastAndroid.SHORT("正在开发中...")
                    }
                    break;

                case 14:
                    navText = 'GroupBarChart';
                    navigation.navigate('GroupBarChartScreen', {title: navText});
                    break;

                case 15:
                    navText = 'HorizontalBarChart';
                    navigation.navigate('HorizontalBarChartScreen', {title: navText});
                    break;

                case 16:
                    navText = 'AxisLineChart';
                    navigation.navigate('AxisLineChartScreen', {title: navText});
                    break;

                default:
                    content = null;
                    break;
            }
        }
    }

        render()
        {
            return (
                <ScrollView>
                    {
                        list.map((item, i) => (
                            <ListItem
                                onPress={()=>this.intent(item.id)}
                                key={i}
                                title={item.title}
                            />
                        ))
                    }
                </ScrollView>
            );
        }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    card: {
        marginBottom: 10
    },
    chart: {
        height: 350,
        width: width
    }
});
export default ChartScreen
