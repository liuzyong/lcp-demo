import schema2component from "../../../utils/schema2component";

// id: 1,
// name: '张三',
// age: 18,
// tel: '13111011101',
// gender: 1,
// company: 'XX XX XX'

const schema = { 
    "type": "page",
    "title": "用户管理",
    "body": [
        {
            "type": "crud",
            "api": {
                "method": "post",
                "url": "http://127.0.0.1:5212/v1/user/",
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
                                        "api": "put:http://127.0.0.1:5212/v1/user/$id",
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
                                                "type": "divider"
                                            },
                                            {
                                                "type": "divider"
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
                            "api": "delete:http://127.0.0.1:5212/v1/user/$id"
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
                                            "url": "http://127.0.0.1:5212/v1/authorization/${authorization_id}"
                                        },
                                        "controls": [
                                            {
                                                "type": "picker",
                                                "name": "entity",
                                                "joinValues": true,
                                                "valueField": "id",
                                                "labelField": "app_name",
                                                "label": "选择关联应用",
                                                "source": "http://127.0.0.1:5212/v1/product",
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
                                                    "url": "http://127.0.0.1:5212/v1/authorization?type=app_page&page=1&perPage=200&query=type:app_page&names='app_id':'${entity}'",
                                                    "sendOn": "this.entity !=\"\"",
                                                    "adaptor": "\r\nconsole.log(payload.data);\r\nconsole.log(payload.data.items);\r\nvar options = [];\r\nfor (var i = 0; i < payload.data.items.length; i++) {\r\n    console.log(payload.data.items[i].id);\r\n    console.log(payload.data.items[i]);\r\n    var datas = { label: payload.data.items[i].name, value: payload.data.items[i].id }\r\n    console.log(datas);\r\n    options[i] = datas\r\n}\r\npayload.data.options = options;\r\n\r\nreturn {\r\n    ...payload, data: payload.data\r\n};\r\n"
                                                },
                                                "description": "切换<code>选项1</code>的值，会触发<code>选项2</code>的<code>source</code> 接口重新拉取"
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
                                            "url": "http://127.0.0.1:5212/v1/authorization/${authorization_id}"
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
                            "url": "http://127.0.0.1:5212/v1/user/",
                            "requestAdaptor": "var data = {\r\n    type: api.data.type,\r\n    username: api.data.username,\r\n    password: api.data.password,\r\n    email: api.data.email,\r\n    phone: api.data.phone,\r\n    authorization: {\r\n        type: \"user_page_authorization\",\r\n        entity: api.data.entity,\r\n        operation: api.data.operation,\r\n    }\r\n}\r\napi.data = data\r\nreturn api;"
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
                                "source": "http://127.0.0.1:5212/v1/product",
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
                                    "url": "http://127.0.0.1:5212/v1/authorization?type=app_page&page=1&perPage=200&query=type:app_page&names='app_id':'${entity}'",
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