import * as React from 'react';
import axios from 'axios';
import copy from 'copy-to-clipboard';
import {render as renderAmis} from 'amis';
import {alert, confirm} from 'amis/lib/components/Alert';
import {toast} from 'amis/lib/components/Toast';
export interface AppeditProps {};
import { Config } from "../../../config/Config";




export default class Appdetail extends React.Component<any, any> {
  render() {
    return (
      <div>
        <p></p>
        {renderAmis(
          {
            // 这里是 amis 的 Json 配置。
            type: 'page',
            title: '应用详情',
            "body": [
                // {
                //     "type": "tpl",
                //     "tpl": "这是你刚刚新增的页面。"
                // },
                {
                  "type": "form",
                  "title": "修改应用信息",
                  "controls": [
                      {
                          "type": "text",
                          "name": "app_name",
                          "label": "应用名称",
                          "required": true
                      },
                      {
                          "label": "应用版本",
                          "type": "text",
                          "name": "app_version"
                      },
                      {
                          "type": "hidden",
                          "name": "type",
                          "value": "app"
                      },
                      {
                          "type": "text",
                          "name": "app_description",
                          "label": "描述",
                          "required": false
                      },
                      {
                          "label": "Logo上传",
                          "type": "image",
                          "name": "app_logo",
                          "imageClassName": "r w-full",
                          "src": "https://fex.bdstatic.com/n/static/amis/renderers/crud/field/placeholder_cfad9b1.png",
                          "reciever": Config.File_ADDRESS,
                      },
                    {
                        "label": "选择权限组",
                        "type": "select",
                        "size": "sm",
                        "name": "default_authorization_id",
                        "source": {
                            "method": "get",
                            "url": Config.AUTHORIZATION_ADDRESS"?type=app_page&page=1&perPage=200&query=type:app_page&names='app_id':'${app_id}'",
                            "sendOn": "this.default_authorization_id !=\"\"",
                            "adaptor": "\r\nconsole.log(payload.data);\r\nconsole.log(payload.data.items);\r\nvar options = [];\r\nfor (var i = 0; i < payload.data.items.length; i++) {\r\n    console.log(payload.data.items[i].id);\r\n    console.log(payload.data.items[i]);\r\n    var datas = { label: payload.data.items[i].name, value: payload.data.items[i].id }\r\n    console.log(datas);\r\n    options[i] = datas\r\n}\r\npayload.data.options = options;\r\n\r\nreturn {\r\n    ...payload, data: payload.data\r\n};\r\n"
                        },
                        "description": "选择用户注册后的<code>默认权限组</code>，仅从当前配置的应用注册有效果"
                    }
                  ],
                  "submitText": "确认修改",
                  "api": {
                    "method": "put",
                    "url": Config.PRODUCT_ADDRESS+"/$app_id",
                    "requestAdaptor": "console.log(api); if (api.data.app_logo) {\r\n    api.data.app_logo = api.data.app_logo.replace(/"+Config.STATIC_FILE_ADDRESS+"\\//, \"\")\r\n}"
                   },
                   "initApi": {
                    "method": "get",
                    "url": Config.PRODUCT_ADDRESS+"/$app_id",
                     "adaptor": "payload.data.app_logo = \""+Config.STATIC_FILE_ADDRESS+"/\" + payload.data.app_logo\r\nreturn {\r\n    ...payload, data: payload.data\r\n};",
                   }
              
                } 
            ],
            "aside": [
                {
                    "type": "nav",
                    "stacked": true,
                    "links": [ 
                        {
                            "label": "应用详情",
                            "to": "/admin/application/detail?app_id=${app_id}",
                            "active": ""
                        },
                        {
                            "label": "页面管理",
                            "to": "/admin/application/pageManage?app_id=${app_id}"
                        },
                        {
                            "label": "应用权限组",
                            "to": "/admin/application/authuorization?app_id=${app_id}"
                        }
                    ],
                    "source": ""
                }
            ],
            "toolbar": [
                {
                    "type": "button",
                    "label": "删除应用",
                    "actionType": "ajax",
                    "icon": "fa fa-stack-exchange",
                    "className": "b-danger",
                    "confirmText": "删除后数据无法找回,确认要删除这个应用吗？",
                    "api": {
                      "method": "delete",
                      "url":  Config.PRODUCT_ADDRESS+"/$app_id",
                    },
                    "level": "danger",
                    "size": "md",
                    "tooltip": "谨慎删除，删除后数据无法找回",
                    "tooltipPlacement": "bottom"
                }
            ]
          },
          {
            // props...
          },
          {
            // env
            // 这些是 amis 需要的一些接口实现
            // 可以参考后面的参数介绍。

            jumpTo: (
              location: string /*目标地址*/,
              action: any /* action对象*/
              ) => {
                location = location || "";
                action = action || "";
                  console.log("jumpTo")
                  console.log(location)
                  console.log(action)
                  console.log(this)
                  window.location.href = location;
              // 用来实现页面跳转, actionType:link、url 都会进来。
              // 因为不清楚所在环境中是否使用了 spa 模式，所以自己实现这个方法吧。
            },

            updateLocation: (
              location: string /*目标地址*/,
              replace: boolean /*是replace，还是push？*/
            ) => {
              // 地址替换，跟 jumpTo 类似
            },

            fetcher: ({
              url, // 接口地址
              method, // 请求方法 get、post、put、delete
              data, // 请求数据
              responseType,
              config, // 其他配置
              headers // 请求头
            }: any) => {
              config = config || {};
              config.withCredentials = true;
              responseType && (config.responseType = responseType);

              if (config.cancelExecutor) {
                config.cancelToken = new (axios as any).CancelToken(
                  config.cancelExecutor
                );
              }

              config.headers = headers || {};

              if (method !== 'post' && method !== 'put' && method !== 'patch') {
                if (data) {
                  config.params = data;
                }

                return (axios as any)[method](url, config);
              } else if (data && data instanceof FormData) {
                config.headers = config.headers || {};
                config.headers['Content-Type'] = 'multipart/form-data';
              } else if (
                data &&
                typeof data !== 'string' &&
                !(data instanceof Blob) &&
                !(data instanceof ArrayBuffer)
              ) {
                data = JSON.stringify(data);
                config.headers = config.headers || {};
                config.headers['Content-Type'] = 'application/json';
              }

              return (axios as any)[method](url, data, config);
            },
            isCancel: (value: any) => (axios as any).isCancel(value),
            notify: (
              type: 'error' | 'success' /**/,
              msg: string /*提示内容*/
            ) => {
              toast[type]
                ? toast[type](msg, type === 'error' ? '系统错误' : '系统消息')
                : console.warn('[Notify]', type, msg);
            },
            alert,
            confirm,
            copy: content => {
              copy(content);
              toast.success('内容已复制到粘贴板');
            }
          }
        )}
      </div>
    );
  }
}