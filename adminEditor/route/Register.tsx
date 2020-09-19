import * as React from 'react';
import AMisRenderer from '../editor/AMisRenderer';
import { inject, observer } from 'mobx-react';
import { IMainStore } from '../store/index';
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

interface RegisterProps extends RouteComponentProps<any> {
    store: IMainStore;
};

const schema = {
    type: 'form',
    submitText: '登录',
    api: 'post:http://127.0.0.1:5212/v1/user',
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
                                            placeholder="请输入用户名"
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
                                            placeholder="请输入密码"    
                                            type="password" 
                                            className="form-control no-shadow no-border" 
                                            value={props.value || ''} 
                                            onChange={(e) => props.onChange(e.currentTarget.value)} 
                                        />
                                    </div>
                                )
                            },
                            {
                                name: 'phone',
                                children: (props:any) => (
                                    <div className="list-group-item">
                                        <input 
                                            placeholder="请输入手机号"    
                                            type="phone" 
                                            className="form-control no-shadow no-border" 
                                            value={props.value || ''} 
                                            onChange={(e) => props.onChange(e.currentTarget.value)} 
                                        />
                                    </div>
                                )
                            },
                            {
                                name: 'email',
                                children: (props:any) => (
                                    <div className="list-group-item">
                                        <input 
                                            placeholder="请输入邮箱"    
                                            type="email" 
                                            className="form-control no-shadow no-border" 
                                            value={props.value || ''} 
                                            onChange={(e) => props.onChange(e.currentTarget.value)} 
                                        />
                                    </div>
                                )
                            },
                            {
                                "type": "hidden",
                                "name": "type",
                                "value": "normal"
                            },
                            {
                                "type": "hidden",
                                "name": "app_id",
                                "value": "${app_id}"
                            }
                        ]
                    })}
                </div>
            )
        },
        {
            type: 'submit',
            label: '注册',
            size: 'lg',
            inputClassName: 'block w-full',
            level: 'primary'
        },
        {
            "type": "link",
            "body": "已有账号,前往登录",
            "blank": false,
            "href": "/#/login?app_id=${app_id}",
            "className": "b-info m-md p"
        }
    ] 
};

@inject("store")
@withRouter
@observer
export default class RegisterRoute extends React.Component<RegisterProps> {
    handleFormSaved = (value:any) => {
        console.log(`${ContextPath}/login`)
        const store = this.props.store;
        const history = this.props.history;
        var params=this.props.location.search;
            if(params){
                var obj = Qs.parse(params, { ignoreQueryPrefix: true });//忽略符号? { ignoreQueryPrefix: true }
                console.log('obj:',obj);
                let app_id=obj.app_id;  
                window.location.href=`${ContextPath}/#/login`+"?app_id="+app_id
                return ;
            }else{ 
                var r= window.location.href.match(new RegExp("[\?\&]" + "?app_id" + "=([^\&]+)", "i"));
                if (r != null){   
                    let app_id = unescape(r[1]);
                        window.location.href=`${ContextPath}/#/login`+"?app_id="+app_id
                    return ;
    
                } 
            }
        // 获取 success
    }



    render() {
        return (
            <div className="app app-header-fixed ">
                <div className="container w-xxl w-auto-xs">
                    <a className="block m-t-xxl m-b-xl text-center text-2x">注册账号</a>
                    <AMisRenderer
                        onFinished={this.handleFormSaved}
                        schema={schema}
                    />
                </div>
            </div>
        );
    }
}