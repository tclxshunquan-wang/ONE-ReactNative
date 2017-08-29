import  Api from '../res/api'
let headers={'Authorization':`APPCODE ${Api.AppCode}`,'Accept':'application/json','X-Ca-Key':'24580493','headerName':'consoleClientHeaderName','X-Ca-Stage':'RELEASE'}

export function fetch_(params,callback) {
    let Url;
    let Params;
    if(params==undefined || typeof (params)!='object'){
        throw new Error("params is undefined or not an object")
    }
    if( params.method='GET'){
        Url=params.url;
        get(Url,callback)
    }else if(params.method=='POST'){
        Url=params.url;
        Params=params.obj;
        post(Url,Params,callback)
    }
}
let head=new Headers();
head.append("Authorization",`APPCODE ${Api.AppCode}`);
head.append("X-Ca-Key","24580493");
async function get(url,callback){
    try{
        let response=await fetch(url, {
            method: 'GET',
            headers:head,

        }).then((re)=>re.json());
        return  callback(response);
    }catch (e){
        console.log(e)
    }
}

async function post(url,params,callback){
    try{
        let response=await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params)
        }).then((re)=>re.json());
        return  callback(response);

    }catch (e){
        console.log(e)
    }
}
