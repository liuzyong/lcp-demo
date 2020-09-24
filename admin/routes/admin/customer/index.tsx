import schema2component from "../../../utils/schema2component";

import { Config } from "../../../config/Config";

const schema = { 
    "type": "page",
    "title": "用户管理",
    "body": [
        {
            "type": "crud",
            "api": {
                "method": "post",
                "url": Config.User_ADDRESS,
                "requestAdaptor": "api.method = \"get\"\r\nif (api.data.keywords && api.data.keywords != undefined) {\r\n    api.data.query = \"type:normal,username\" + \":\" + api.data.keywords\r\n} else {\r\n    api.data.query = \"type:normal\"\r\n}\r\nreturn api;"
            },
            "filter": {
                "title": "",
                "submitText": "",
                "controls": [
                    {
                        "type": "text",
                        "name": "keywords",
                        "placeholder": "通过用户名搜索",
                        "addOn": {
                            "label": "搜索",
                            "type": "submit"
                        }
                    }
                ]
            },
            "columns": [
                {
                    "name": "id",
                    "label": "ID",
                    "type": "text"
                },
                {
                    "name": "username",
                    "label": "用户名称"
                },
                {
                    "name": "email",
                    "label": "用户邮箱"
                },
                {
                    "name": "phone",
                    "label": "手机号 "
                },
                {
                    "type": "operation",
                    "label": "操作",
                    "width": 100,
                    "buttons": [
                        {
                            "type": "button",
                            "actionType": "dialog",
                            "icon": "fa fa-pencil",
                            "tooltip": "编辑",
                            "dialog": {
                                "type": "dialog",
                                "body": [
                                    {
                                        "type": "form",
                                        "api": "put:"+Config.User_ADDRESS+"/$id",
                                        "title": "编辑用户",
                                        "controls": [
                                            {
                                                "type": "text",
                                                "name": "username",
                                                "label": "用户名称",
                                                "required": true,
                                                "addOn": null,
                                                "readOnly": true
                                            },
                                            {
                                                "type": "divider"
                                            },
                                            {
                                                "type": "text",
                                                "name": "password",
                                                "label": "用户密码",
                                                "required": true
                                            },
                                            {
                                                "type": "divider"
                                            },
                                            {
                                                "type": "radios",
                                                "label": "角色",
                                                "name": "user_type",
                                                "options": [
                                                    {
                                                        "label": "系统设计者",
                                                        "value": "designer"
                                                    },
                                                    {
                                                        "label": "普通用户",
                                                        "value": "member"
                                                    }
                                                ],
                                                "joinValues": true,
                                                "columnsCount": 2,
                                                "required": true,
                                                "$ref": "",
                                                "value": "designer",
                                                "description": "当选择系统设计者时，打开应用会出现页面编辑、删除等操作，选择普通用户时无法编辑设计页面"
                                            },
                                            {
                                                "type": "hidden",
                                                "name": "type",
                                                "value": "normal"
                                            }
                                        ]
                                    }
                                ],
                                "title": "修改用户"
                            }
                        },
                        {
                            "size": "sm",
                            "type": "button",
                            "icon": "fa fa-times text-danger",
                            "actionType": "ajax",
                            "tooltip": "删除",
                            "confirmText": "您确认要删除?",
                            "api": "delete:"+Config.User_ADDRESS+"/$id"
                        },
                        {
                            "size": "sm",
                            "type": "button",
                            "label": "权限",
                            "actionType": "dialog",
                            "dialog": {
                                "body": [
                                    {
                                        "title": "条件过滤",
                                        "mode": "horizontal",
                                        "type": "form",
                                        "api": {
                                            "method": "put",
                                            "url": Config.AUTHORIZATION_ADDRESS+"/${authorization_id}"
                                        },
                                        "controls": [
                                            {
                                                "type": "picker",
                                                "name": "entity",
                                                "joinValues": true,
                                                "valueField": "id",
                                                "labelField": "app_name",
                                                "label": "选择关联应用",
                                                "source": Config.PRODUCT_ADDRESS,
                                                "size": "lg",
                                                "value": "",
                                                "multiple": false,
                                                "pickerSchema": {
                                                    "mode": "table",
                                                    "name": "thelist",
                                                    "draggable": true,
                                                    "headerToolbar": {
                                                        "wrapWithPanel": false,
                                                        "type": "form",
                                                        "className": "text-right",
                                                        "target": "thelist",
                                                        "mode": "inline",
                                                        "controls": [
                                                            {
                                                                "type": "text",
                                                                "name": "keywords",
                                                                "addOn": {
                                                                    "type": "submit",
                                                                    "label": "搜索",
                                                                    "level": "primary",
                                                                    "icon": "fa fa-search pull-left"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "columns": [
                                                        {
                                                            "name": "id",
                                                            "label": "应用ID",
                                                            "sortable": true,
                                                            "type": "text",
                                                            "toggled": true
                                                        },
                                                        {
                                                            "name": "app_name",
                                                            "label": "应用名称",
                                                            "sortable": true,
                                                            "searchable": true,
                                                            "type": "text",
                                                            "toggled": true
                                                        },
                                                        {
                                                            "name": "app_version",
                                                            "label": "应用版本",
                                                            "sortable": true,
                                                            "type": "text",
                                                            "toggled": true
                                                        },
                                                        {
                                                            "name": "created_time",
                                                            "label": "创建时间",
                                                            "sortable": true,
                                                            "type": "text",
                                                            "toggled": true
                                                        },
                                                        {
                                                            "name": "updated_time",
                                                            "label": "更新时间",
                                                            "type": "text",
                                                            "toggled": true
                                                        }
                                                    ]
                                                },
                                                "modalMode": "dialog"
                                            },
                                            {
                                                "label": "选择权限组",
                                                "type": "select",
                                                "size": "sm",
                                                "name": "operation",
                                                "source": {
                                                    "method": "get",
                                                    "url":  Config.AUTHORIZATION_ADDRESS+"?type=app_page&page=1&perPage=200&query=type:app_page&names='app_id':'${entity}'",
                                                    "sendOn": "this.entity !=\"\"",
                                                    "adaptor": "\r\nconsole.log(payload.data);\r\nconsole.log(payload.data.items);\r\nvar options = [];\r\nfor (var i = 0; i < payload.data.items.length; i++) {\r\n    console.log(payload.data.items[i].id);\r\n    console.log(payload.data.items[i]);\r\n    var datas = { label: payload.data.items[i].name, value: payload.data.items[i].id }\r\n    console.log(datas);\r\n    options[i] = datas\r\n}\r\npayload.data.options = options;\r\n\r\nreturn {\r\n    ...payload, data: payload.data\r\n};\r\n"
                                                },
                                                "description": "切换<code>选择关联应用</code>的值，<code>选择权限组</code>会重新更新权限下拉选项"
                                            },
                                            {
                                                "type": "hidden",
                                                "name": "resource",
                                                "value": "${resource}"
                                            },
                                            {
                                                "type": "hidden",
                                                "name": "type",
                                                "value": "user_page_authorization"
                                            }
                                        ],
                                        "initApi": {
                                            "method": "get",
                                            "url":  Config.AUTHORIZATION_ADDRESS+"/${authorization_id}"
                                        }
                                    }
                                ],
                                "type": "dialog",
                                "closeOnEsc": false,
                                "showCloseButton": true,
                                "title": "权限配置"
                            }
                        }
                    ]
                }
            ],
            "mode": "table",
            "messages": {}
        }
    ],
    "toolbar": [
        {
            "type": "button",
            "actionType": "dialog",
            "label": "新增用户",
            "icon": "fa fa-plus pull-left",
            "primary": true,
            "dialog": {
                "title": "新增用户",
                "body": [
                    {
                        "title": "条件过滤",
                        "mode": "horizontal",
                        "type": "form",
                        "api": {
                            "method": "post",
                            "url": "",        
                            "requestAdaptor": "var data = {\r\n    type: api.data.type,\r\n    username: api.data.username,\r\n    password: api.data.password,\r\n    email: api.data.email,\r\n    phone: api.data.phone,\r\n    user_type: api.data.user_type,\r\n    authorization: {\r\n        type: \"user_page_authorization\",\r\n        entity: api.data.entity,\r\n        operation: api.data.operation,\r\n    }\r\n}\r\napi.data = data\r\nreturn api;"

                        },
                        "controls": [
                            {
                                "type": "text",
                                "name": "username",
                                "label": "用户名称",
                                "required": true
                            },
                            {
                                "type": "divider"
                            },
                            {
                                "type": "text",
                                "name": "password",
                                "label": "用户密码",
                                "required": true
                            },
                            {
                                "type": "divider"
                            },
                            {
                                "type": "text",
                                "name": "email",
                                "label": "用户邮箱"
                            },
                            {
                                "type": "divider"
                            },
                            {
                                "type": "text",
                                "name": "phone",
                                "label": "用户手机号"
                            },
                            {
                                "type": "radios",
                                "label": "角色",
                                "name": "user_type",
                                "options": [
                                    {
                                        "label": "系统设计者",
                                        "value": "designer"
                                    },
                                    {
                                        "label": "普通用户",
                                        "value": "member"
                                    }
                                ],
                                "joinValues": true,
                                "columnsCount": 2,
                                "required": true,
                                "$ref": "",
                                "value": "designer",
                                "description": "当选择系统设计者时，打开应用会出现页面编辑、删除等操作，选择普通用户时无法编辑设计页面"
                            },
                            {
                                "type": "divider"
                            },
                            {
                                "type": "hidden",
                                "name": "type",
                                "value": "normal"
                            },
                            {
                                "type": "picker",
                                "name": "entity",
                                "joinValues": true,
                                "valueField": "id",
                                "labelField": "app_name",
                                "label": "选择关联应用",
                                "source": "",
                                "size": "lg",
                                "value": "",
                                "multiple": false,
                                "pickerSchema": {
                                    "mode": "table",
                                    "name": "thelist",
                                    "draggable": true,
                                    "headerToolbar": {
                                        "wrapWithPanel": false,
                                        "type": "form",
                                        "className": "text-right",
                                        "target": "thelist",
                                        "mode": "inline",
                                        "controls": [
                                            {
                                                "type": "text",
                                                "name": "keywords",
                                                "addOn": {
                                                    "type": "submit",
                                                    "label": "搜索",
                                                    "level": "primary",
                                                    "icon": "fa fa-search pull-left"
                                                }
                                            }
                                        ]
                                    },
                                    "columns": [
                                        {
                                            "name": "id",
                                            "label": "应用ID",
                                            "sortable": true,
                                            "type": "text",
                                            "toggled": true
                                        },
                                        {
                                            "name": "app_name",
                                            "label": "应用名称",
                                            "sortable": true,
                                            "searchable": true,
                                            "type": "text",
                                            "toggled": true
                                        },
                                        {
                                            "name": "app_version",
                                            "label": "应用版本",
                                            "sortable": true,
                                            "type": "text",
                                            "toggled": true
                                        },
                                        {
                                            "name": "created_time",
                                            "label": "创建时间",
                                            "sortable": true,
                                            "type": "text",
                                            "toggled": true
                                        },
                                        {
                                            "name": "updated_time",
                                            "label": "更新时间",
                                            "type": "text",
                                            "toggled": true
                                        }
                                    ]
                                },
                                "modalMode": "dialog"
                            },
                            {
                                "label": "选择权限组",
                                "type": "select",
                                "size": "sm",
                                "name": "operation",
                                "source": {
                                    "method": "get",
                                    "url":""+"?type=app_page&page=1&perPage=200&query=type:app_page&names='app_id':'${entity}'",
                                    "sendOn": "this.entity !=\"\"",
                                    "adaptor": "\r\nconsole.log(payload.data);\r\nconsole.log(payload.data.items);\r\nvar options = [];\r\nfor (var i = 0; i < payload.data.items.length; i++) {\r\n    console.log(payload.data.items[i].id);\r\n    console.log(payload.data.items[i]);\r\n    var datas = { label: payload.data.items[i].name, value: payload.data.items[i].id }\r\n    console.log(datas);\r\n    options[i] = datas\r\n}\r\npayload.data.options = options;\r\n\r\nreturn {\r\n    ...payload, data: payload.data\r\n};\r\n"
                                },
                                "description": "切换<code>选择关联应用</code>的值，<code>选择权限组</code>会重新更新权限下拉选项"
                            }
                        ]
                    }
                ],
                "type": "dialog"
            }
        }
    ]
};

export default schema2component(schema);