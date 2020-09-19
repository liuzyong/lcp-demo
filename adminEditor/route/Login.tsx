import * as React from 'react';
import AMisRenderer from '../editor/AMisRenderer';
import { inject, observer } from 'mobx-react';
import { IMainStore } from '../store/database';
import { RouteComponentProps, withRouter } from 'react-router';
import Qs from 'qs'
import axios from 'axios';
let ContextPath = '';


// gh-pages 环境时
if (process.env.NODE_ENV === 'production') {
    ContextPath = '/amis-admin'
}
console.log(process.env.NODE_ENV);
// console.log(process.env.SERVICE_URL);

interface LoginProps extends RouteComponentProps<any> {
    store: IMainStore;
};

const schema = {
    type: 'form',
    submitText: '登录',
    api: 'post:http://127.0.0.1:5212/v1/user/login',
    wrapWithPanel: false,
    messages: {
        saveSuccess: '登录成功，欢迎光临！'
    },
    controls: [
        {
            children: (props:any) => (
                <div className="list-group list-group-sm">
                    {props.renderFormItems({
                        controls: [
                            {
                                name: 'username',
                                children: (props:any) => (
                                    <div className="list-group-item">
                                        <input 
                                            placeholder="用户名"
                                            type="text" 
                                            className="form-control no-shadow no-border" 
                                            value={props.value || ''} 
                                            onChange={(e) => props.onChange(e.currentTarget.value)} 
                                        />
                                    </div>
                                )
                            },
                            {
                                name: 'password',
                                children: (props:any) => (
                                    <div className="list-group-item">
                                        <input 
                                            placeholder="密码"    
                                            type="password" 
                                            className="form-control no-shadow no-border" 
                                            value={props.value || ''} 
                                            onChange={(e) => props.onChange(e.currentTarget.value)} 
                                        />
                                    </div>
                                )
                            }
                        ]
                    })}
                </div>
            )
        },
        {
            type: 'submit',
            label: '登录',
            size: 'lg',
            inputClassName: 'block w-full',
            level: 'primary'
        },
        {
            "type": "link",
            "body": "还未注册，点击注册",
            "blank": false,
            "href": "/#/register?app_id=${app_id}",
            "className": "b-info m-md p"
        }
    ] 
};

@inject("store")
@withRouter
@observer
export default class LoginRoute extends React.Component<LoginProps> {
    handleFormSaved = (value:any) => {
        console.log(`${ContextPath}/home`)
        const store = this.props.store;
        const history = this.props.history;
        //清除缓存数据
        console.log(value)
        window.localStorage.removeItem("app_id");
        window.localStorage.removeItem("store");
        window.localStorage.removeItem("authenticated");
       
        var params=this.props.location.search;
          console.log('params:',params);
      
        if(params){ 
            var obj = Qs.parse(params, { ignoreQueryPrefix: true });//忽略符号? { ignoreQueryPrefix: true }
            let app_id=obj.app_id;  
            this.getPageAuthorization(value,app_id,store)
            store.user.login(value.id,String(app_id),value.username,value.user_type); 
            store.afterCreate()
            window.location.href=`${ContextPath}/#/home`+"?app_id="+app_id
            return ;
        }else{ 
         var r= window.location.href.match(new RegExp("[^\?\&]" + "?app_id" + "=([^&]*)(&|$)", "i"));
            if (r != null){   
                var app_id = unescape(r[1]);
                app_id=app_id.replace("#/login","");
                return this.getPageAuthorization(value,app_id,store)
                
            } 
        }
    }

     getPageAuthorization(value:any,app_id:any,store:any): any{
        var app =  axios.get("http://127.0.0.1:5212/v1/product/"+app_id)
        .then(app => {
            if (app.data.status == 0) {
                     let authorization_id = '';
                    //如果用户还没有赋值权限，走默认权限
                    if (typeof value.authorization_id == "undefined") {
                        // 变量不存在
                        console.log("value.authorization_id");  
                        
                        if(typeof app.data.data.default_authorization_id  != "undefined"){
                            authorization_id=app.data.data.default_authorization_id
                        }
                    } else {
                        ////如果用户已经有权限
                        authorization_id=value.authorization_id;
                    }
                    var res =  axios.get("http://127.0.0.1:5212/v1/authorization/"+authorization_id)
                    .then(res => {
                        if (res.data.status == 0) {
                                    //如果用户已经有权限
                            if (typeof value.authorization_id != "undefined") {
                                  axios.get("http://127.0.0.1:5212/v1/authorization/" + res.data.data.operation)
                                    .then(authorization => {
                                            if(authorization.data.status==0){
                                                window.localStorage.setItem('authorization',authorization.data.data.entity);
                                                store.user.login(value.id,app_id,value.username,value.user_type); 
                                                store.afterCreate()
                                                 
                                                 window.location.href=`${ContextPath}/#/home`+"?app_id="+app_id
                                                 return true    
                                            }else{
                                                alert("权限获取失败,该用户未配置权限")
                                                return false;       
                                            }
                                    });     
                            } else {
                                window.localStorage.setItem('authorization',res.data.data.entity);
                                store.user.login(value.id,app_id,value.username,value.user_type); 
                                store.afterCreate()
                                 
                                window.location.href=`${ContextPath}/#/home`+"?app_id="+app_id
                                return true    
                            }
                                   
                     
                            
                        
                        } else{
                                     alert("权限获取失败,该用户未配置权限")
                                     return false;     
                        }
                    });  
                   
            
                }
        });  
        
            

    }
   
    render() {
        
        return (
            <div className="app app-header-fixed ">
                <div className="container w-xxl w-auto-xs">
                    <a className="block m-t-xxl m-b-xl text-center text-2x">用户登录</a>
                    <AMisRenderer
                        onFinished={this.handleFormSaved}
                        schema={schema}
                    />
                </div>
            </div>
        );
    }
}