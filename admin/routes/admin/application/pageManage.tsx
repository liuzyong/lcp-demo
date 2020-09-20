import * as React from 'react';
import axios from 'axios';
import copy from 'copy-to-clipboard';
import {render as renderAmis} from 'amis';
import {alert, confirm} from 'amis/lib/components/Alert';
import {toast} from 'amis/lib/components/Toast';
export interface AppManageProps { };
import { Config } from "../../../config/Config";


export default class PageManage extends React.Component<any, any> {
  render() {
    return (
      <div>
        <p></p>
        {renderAmis(
          {
            // 这里是 amis 的 Json 配置。
            type: 'page',
            title: '页面管理',
            "body": [
                {
                    "type": "crud",
                    "api": Config.Config_ADDRESS+"?type=menu&names='app_id':'${app_id}'",
                    "columns": [
                        {
                            "name": "id",
                            "label": "ID"
                        },
                        {
                            "name": "icon",
                            "label": "图标"
                        },
                        {
                            "name": "label",
                            "label": "页面名称"
                        },
                        {
                            "name": "path",
                            "label": "页面路径"
                        },
                        {
                            "name": "created_time",
                            "label": "创建时间"
                        },
                        {
                            "name": "updated_time",
                            "label": "更新时间"
                        },
                        {
                            "type": "operation",
                            "label": "操作",
                            "width": 100,
                            "buttons": [
                           
                                {
                                    "size": "sm",
                                    "type": "button",
                                    "icon": "fa fa-pencil",
                                    "tooltip": "编辑页面",
                                    "tooltipPlacement": "bottom",
                                    "actionType": "drawer",
                                    "drawer": {
                                        "title": "编辑页面",
                                        "type": "drawer",
                                        "body": [
                                            {
                                                "type": "form",
                                                "title": "表单",
                                                "api": "put:"+ Config.Config_ADDRESS+"/$id",
                                                "controls": [
                                                    {
                                                        "label": "页面名称",
                                                        "type": "text",
                                                        "name": "label"
                                                    },
                                                    {
                                                        "label": "页面路径",
                                                        "type": "text",
                                                        "name": "path"
                                                    },
                                                    {
                                                        "label": "页面图标",
                                                        "type": "text",
                                                        "name": "icon"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "button",
                                    "icon": "fa fa-times text-danger",
                                    "actionType": "ajax",
                                    "tooltip": "删除",
                                    "confirmText": "您确认要删除?",
                                    "api": "delete:"+Config.Config_ADDRESS+"/$id"
                                }
                            ],
                            "toggled": true
                        }
                    ]
                }
            ],
            "aside": [
                {
                    "type": "nav",
                    "stacked": true,
                    "className": "w-md",
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
                  "label": "新增页面",
                  "actionType": "drawer",
                  "dialog": {
                      "title": "系统提示",
                      "body": "对你点击了"
                  },
                  "drawer": {
                      "title": "新增页面",
                      "body": [
                          {
                              "type": "form",
                               "title": "表单",
                              "api": "post:"+Config.Config_ADDRESS,
                              "controls": [
                                  {
                                      "label": "页面名称",
                                      "type": "text",
                                      "name": "label"
                                  },
                                  {
                                      "label": "页面路径",
                                      "type": "text",
                                      "name": "path"
                                  },
                                  {
                                      "label": "页面图标",
                                      "type": "text",
                                      "name": "icon"
                                  },
                                  {
                                      "type": "hidden",
                                      "name": "app_id",
                                      "value": "${app_id}"
                                  },
                                  {
                                      "type": "hidden",
                                      "name": "type",
                                      "value": "menu"
                                  },
                                  {
                                      "type": "hidden",
                                      "name": "schema",
                                      "value":'{"type":"page","title":"uniappadmin","body":"这是你刚刚新增的页面。"}'
                                  }
                              ]
                          }
                      ],
                      "type": "drawer",
                      "position": "right"
                  }
              }
          ],
            "messages": {}
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