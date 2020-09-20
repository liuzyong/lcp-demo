import * as React from 'react';
import axios from 'axios';
import copy from 'copy-to-clipboard';
import {render as renderAmis} from 'amis';
import {alert, confirm} from 'amis/lib/components/Alert';
import {toast} from 'amis/lib/components/Toast';
export interface AppauthuorizationProps {};
import { Config } from "../../../config/Config";

export default class Appauthuorization extends React.Component<any, any> {
  render() {
    return (
      <div>
        <p></p>
        {renderAmis(
          {
            // 这里是 amis 的 Json 配置。
            type: 'page',
            title: '应用权限',
            "body": [
              {
                  "type": "crud",
                  "api": Config.AUTHORIZATION_ADDRESS+"?type=app_page&perPage=12&query=type:app_page&page=1&names='app_id':'$app_id'",
                  "placeholder": "当前组内, 还没有配置任何权限.",
                  "title": null,
                  "listItem": {
                    "title": "$name",
                    "subTitle": "$description",
                    "actions": [
                        {
                          "icon": "fa fa-edit",
                          "tooltip": "编辑",
                          "actionType": "dialog",
                          "dialog": {
                              "title": "编辑能力（权限）",
                              "body": {
                                  "type": "form",
                                  "api": {
                                    "method": "put",
                                    "url": Config.AUTHORIZATION_ADDRESS+"/${id}"
                                  },
                                  "controls": [
                                    {
                                        "label": "权限名称",
                                        "type": "text",
                                        "name": "name"
                                    },
                                    {
                                        "type": "textarea",
                                        "label": "描述",
                                        "name": "description",
                                        "minRows": 3,
                                        "maxRows": 20
                                    },
                                    {
                                        "type": "hidden",
                                        "name": "resource",
                                        "value": "${app_id}"
                                    },
                                    {
                                        "type": "hidden",
                                        "name": "app_id",
                                        "value": "${app_id}"
                                    },
                                    {
                                        "type": "hidden",
                                        "name": "operation",
                                        "value": "all"
                                    },
                                    {
                                        "type": "hidden",
                                        "name": "type",
                                        "value": "app_page"
                                    },
                                    {
                                        "type": "picker",
                                        "name": "entity",
                                        "joinValues": true,
                                        "valueField": "id",
                                        "labelField": "label",
                                        "label": "多选",
                                        "source": Config.Config_ADDRESS+"?type=menu&names='app_id':'${app_id}'",
                                        "size": "lg",
                                        "value": "",
                                        "multiple": true,
                                        "pickerSchema": {
                                            "name": "thelist",
                                            "draggable": true,
                                            "columns": [
                                                {
                                                    "name": "id",
                                                    "label": "ID",
                                                    "sortable": true,
                                                    "searchable": true,
                                                    "type": "text",
                                                    "placeholder": "-",
                                                    "toggled": true
                                                },
                                                {
                                                    "name": "icon",
                                                    "label": "图标",
                                                    "sortable": true,
                                                    "type": "text",
                                                    "toggled": true
                                                },
                                                {
                                                    "name": "label",
                                                    "label": "页面名称",
                                                    "sortable": true,
                                                    "type": "text",
                                                    "toggled": true
                                                },
                                                {
                                                    "name": "path",
                                                    "label": "页面路径",
                                                    "type": "text",
                                                    "toggled": true
                                                }
                                            ],
                                            "pickerMode": true,
                                            "messages": {},
                                            "api": Config.Config_ADDRESS+"?type=menu&names='app_id':'${app_id}'",
                                            "mode": "table"
                                        }
                                    }
                                  ],
                                  "submitText": "保存"
                              }
                          }
                      },
                        {
                            "tooltip": "删除",
                            "disabledOn": "~[\"admin:permission\", \"admin:user\", \"admin:role\", \"admin:acl\", \"admin:page\", \"page:readAll\", \"admin:settings\"].indexOf(name)",
                            "icon": "fa fa-times",
                            "confirmText": "您确定要移除该权限组?",
                            "actionType": "ajax",
                            "api": "delete:"+Config.AUTHORIZATION_ADDRESS+"/${id}"
                        }
                    ]
                   },
                  "header": [
                      {
                          "type": "button",
                          "label": "新建应用权限组",
                          "actionType": "dialog",
                          "dialog": {
                              "title": "权限配置",
                              "body": [
                                  {
                                      "title": "页面选择",
                                      "mode": "horizontal",
                                      "type": "form",
                                      "api": Config.AUTHORIZATION_ADDRESS,
                                      "controls": [
                                          {
                                              "label": "权限名称",
                                              "type": "text",
                                              "name": "name"
                                          },
                                          {
                                              "type": "textarea",
                                              "label": "描述",
                                              "name": "description",
                                              "minRows": 3,
                                              "maxRows": 20
                                          },
                                          {
                                            "type": "hidden",
                                            "name": "resource",
                                            "value": "${app_id}"
                                           },
                                          
                                          {
                                            "type": "hidden",
                                            "name": "app_id",
                                            "value": "${app_id}"
                                        },
                                          {
                                              "type": "hidden",
                                              "name": "operation",
                                              "value": "all"
                                          },
                                          {
                                              "type": "hidden",
                                              "name": "type",
                                              "value": "app_page"
                                          },
                                          {
                                              "type": "picker",
                                              "name": "entity",
                                              "joinValues": true,
                                              "valueField": "id",
                                              "labelField": "label",
                                              "label": "多选",
                                              "source": Config.Config_ADDRESS+"?type=menu&names='app_id':'${app_id}'",
                                              "size": "lg",
                                              "value": "",
                                              "multiple": true,
                                              "pickerSchema": {
                                                  "name": "thelist",
                                                  "draggable": true,
                                                  "columns": [
                                                      {
                                                          "name": "id",
                                                          "label": "ID",
                                                          "sortable": true,
                                                          "searchable": true,
                                                          "type": "text",
                                                          "placeholder": "-",
                                                          "toggled": true
                                                      },
                                                      {
                                                          "name": "icon",
                                                          "label": "图标",
                                                          "sortable": true,
                                                          "type": "text",
                                                          "toggled": true
                                                      },
                                                      {
                                                          "name": "label",
                                                          "label": "页面名称",
                                                          "sortable": true,
                                                          "type": "text",
                                                          "toggled": true
                                                      },
                                                      {
                                                          "name": "path",
                                                          "label": "页面路径",
                                                          "type": "text",
                                                          "toggled": true
                                                      }
                                                  ],
                                                  "pickerMode": true,
                                                  "messages": {},
                                                  "api": Config.Config_ADDRESS+"?type=menu&names='app_id':'${app_id}'",
                                                  "mode": "table"
                                              }
                                          }
                                      ],
                                      "submitText": "保存"
                                  }
                              ],
                              "type": "dialog",
                              "data": {
                                "resource": "${app_id}",
                                "app_id": "${app_id}"
                               },
                              "closeOnEsc": false,
                              "showCloseButton": true,
                              "size": "lg"
                          },
                          "drawer": {
                              "title": "页面选择",
                              "body": "<p>对，你刚刚点击了</p>"
                          }
                      }
                  ],
                  "mode": "list",
                  "syncLocation": false
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