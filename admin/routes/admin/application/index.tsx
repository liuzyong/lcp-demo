import schema2component from "../../../utils/schema2component";

// id: 1,
// name: '张三',
// age: 18,
// tel: '13111011101',
// gender: 1,
// company: 'XX XX XX'

const schema = {
    "$schema": "https://houtai.baidu.com/v2/schemas/page.json#",
    "type": "page",
    "title": "应用列表",
    "remark": "操作文档",
    "toolbar": [
        {
            "type": "button",
            "actionType": "dialog",
            "label": "创建可视化应用",
            "icon": "fa fa-plus pull-left",
            "primary": true,
            "dialog": {
                "title": "创建可视化应用",
                "body": {
                    "type": "form",
                    "api": "post:http://127.0.0.1:5212/v1/product",
                    "controls": [
                        {
                            "type": "text",
                            "name": "app_name",
                            "label": "应用名称",
                            "required": true
                        },
                        {
                            "type": "divider"
                        },
                        {
                            "type": "text",
                            "name": "app_version",
                            "label": "应用版本",
                            "required": true
                        },
                        {
                            "type": "hidden",
                            "name": "type",
                            "value":"app"
                        },
                        {
                            "type": "divider"
                        },
                        {
                            "type": "text",
                            "name": "app_description",
                            "label": "描述",
                            "required": false
                        },
                        {
                            "type": "divider"
                        },
                        {
                            "type": "image",
                            "label": "Logo上传",
                            "name": "app_logo",
                            "imageClassName": "r w-full",
                            "src": "https://fex.bdstatic.com/n/static/amis/renderers/crud/field/placeholder_cfad9b1.png",
                            "reciever": "http://127.0.0.1:5212/v1/file",
                        },
                        {
                            "type": "divider"
                        }
                    ]
                }
            }
        }
    ],
    "body": [
        {
            "type": "crud",
            "api": {
                "method": "post",
                "url": "http://127.0.0.1:5212/v1/product?query=type:app&page=1&perPage=12",
                "requestAdaptor": "api.method = \"get\"\r\nif (api.data.keywords && api.data.keywords != undefined) {\r\n    api.data.names = \"'\" + \"app_name\" + \"'\" + \":\" + \"'\" + api.data.keywords + \"'\"\r\n}\r\nreturn api;"
            },
            "defaultParams": {
                "perPage": 12
            },
            "switchPerPage": false,
            "placeholder": "暂无应用信息",
            "columnsCount": 4,
            "card": {
                "header": {
                    "className": "bg-white",
                    "title": "$app_name",
                    "subTitle": "$app_description",
                    "description": "$app_description",
                    "avatar": "http://127.0.0.1:5212/${app_logo | raw}",
                    "highlight": "$isSuperAdmin",
                    "avatarClassName": "pull-left thumb-md avatar b-3x m-r"
                },
                "body": "\n     <span class=\"label label-default\"> 当前版本：$app_version </span>\n    ",
                "actions": [
                    {
                        "label": "设计",
                        "type": "button",
                        "actionType": "url",
                        "url": "http://127.0.0.1:5204/?app_id=${id}"
                    },
                    {
                        "label": "配置",
                        "type": "button",
                        "actionType": "url",
                        "url": "/admin/application/detail?app_id=${id}"
                    }
                ],
                "bodyClassName": "padder"
            },
            "masonryLayout": false,
            "showFooter": true,
            "showHeader": true,
            "filter": {
                "title": "条件搜索",
                "submitText": "",
                "controls": [
                    {
                        "type": "text",
                        "name": "keywords",
                        "placeholder": "通过完整应用名称搜索",
                        "addOn": {
                            "label": "搜索",
                            "type": "submit"
                        }
                    }
                ]
            },
            "mode": "cards",
            "syncLocation": false
            
        }
    ]
}



// "body": "\n      <% if (data.roles && data.roles.length) { %>\n        <% data.roles.map(function(role) { %>\n          <span class=\"label label-default\"><%- role.name %></span>\n        <% }) %>\n      <% } else { %>\n        <p class=\"text-muted\">没有分配角色</p>\n      <% } %>\n     
export default schema2component(schema);