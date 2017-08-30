import * as types from '../constants/ActionTypes';

const initialState = {

    homeList:[
        {id:0,name:'react native—网络请求',dis:'很多移动应用都需要从远程地址中获取数据或资源。你可能需要给某个REST API发起POST请求以提交用户数据，又或者可能仅仅需要从某个服务器上获取一些静态内容——以下就是你会用到的东西'},
        {id:1,name:'react native—Redux使用',dis:'Redux is a predictable state container for JavaScript apps.(这个很重要！！！)'},
        {id:8,name:'react native—图表使用',dis:'感谢(@wuxudong/react-native-charts-wrapper)'},
        {id:12,name:'react native—通讯录选择器',dis:'基于Flatlist的首字母索引列表，其实没想象的那么难'},
        {id:10,name:'react native—视频播放',dis:'点击屏幕即可播放视频'},
        {id:11,name:'react native—酷炫动画',dis:'有人建议让我写点动画的例子出来，这里面的应该足够你用了吧'},
        {id:3,name:'react native—数据缓存',dis:'AsyncStorage是一个简单的、异步的、持久化的Key-Value存储系统，它对于App来说是全局性的。'},
        {id:4,name:'react native—性能优化',dis:'使用React Native替代基于WebView的框架来开发App的一个强有力的理由，就是为了使App可以达到每秒60帧（足够流畅），并且能有类似原生App的外观和手感。因此我们也尽可能地优化React Native去实现这一目标，使开发者能集中精力处理App的业务逻辑，而不用费心考虑性能。但是，总还是有一些地方有所欠缺，以及在某些场合React Native还不能够替你决定如何进行优化（用原生代码写也无法避免），因此人工的干预依然是必要的。'},
        {id:2,name:'react native—二维码扫描',dis:'点击进入,扫描成功后即可看到结果'},
        {id:5,name:'react native—Windows环境搭建',dis:'欢迎使用React Native！这篇文档会帮助你搭建基本的React Native开发环境。'},
        {id:6,name:'react native—Mac环境搭建',dis:'欢迎使用React Native！这篇文档会帮助你搭建基本的React Native开发环境。'},
        {id:7,name:'react native—打包发布流程',dis:'Android和ios'},
        {id:9,name:'待开发中......',dis:'如果大家有什么想要实现的效果，可以提出来，我会在最短的时间更新上去。未来我会陆续把热修复、分包、动画等有趣的功能完善进来，有愿意的同学可以联系我，一起来写。'},
    ]

};

export default function homeReducer(state = initialState, action = {}) {
    switch (action.type){
        case types.SETDIS:
            let param=action.params;
            let list= initialState.homeList;
            if(param){
                list.forEach((t,number,array)=>{
                    if(t.id==param.id){
                        t.dis=`类型:${param.Type}\n结果:${param.Barcode}`
                    }
                })
            }
            return {
                ...state,
                homeList:list
            };
            break;
        default:
            return state;
            break;
    }

}