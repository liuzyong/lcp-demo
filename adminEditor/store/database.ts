import {types, getEnv, applySnapshot, getSnapshot} from 'mobx-state-tree';
import {PageStore} from './Page';
import {when, reaction} from 'mobx';
import axios from 'axios';
import qs from 'qs';
import { number } from 'mobx-state-tree/dist/internal';
import { User } from "./User";
import { Config } from "../config/Config";
let pagIndex = 1;

const addpageShow = false;

export const MainStore = types
    .model('MainStore', {
        pages: types.optional(types.array(PageStore), [{
            id: "123123",
            path: 'home',
            label: '这是主页',
            icon: 'fa fa-file',
            schema: {
                type: 'page',
                title: '这是主页',
                body: '初始页面'
            }
        }]),
        theme: 'default',
        asideFixed: true,
        asideFolded: false,
        user: types.optional(User, {}),
        offScreen: false,
        addPageIsOpen: false,
        editPageIsOpen: false,
        showHistoryIsOpen: false,
        preview: false,
        schema: types.frozen()
    })
    .views(self => ({
        get fetcher() {
            return getEnv(self).fetcher;
        },
        get notify() {
            return getEnv(self).notify;
        },
        get alert() {
            return getEnv(self).alert;
        },
        get copy() {
            return getEnv(self).copy;
        }
    }))
    .actions(self => {
        function toggleAsideFolded() {
            console.log('toggleAsideFolded');
            self.asideFolded = !self.asideFolded;
        }

        function toggleAsideFixed() {
            console.log('toggleAsideFixed');
            self.asideFixed = !self.asideFixed;
        }

        function toggleOffScreen() {
            console.log('toggleOffScreen');
            self.offScreen = !self.offScreen;
        }

        function setAddPageIsOpen(isOpened: boolean) {
            console.log('setAddPageIsOpen');
            console.log(addpageShow);
            if (addpageShow == true) {
                 self.addPageIsOpen = isOpened;
            } else {
                addpageShow = true;
            }
        }

        function showHistory(isOpened: boolean) {
            console.log('showHistory');
            self.showHistoryIsOpen = isOpened;
        }

        function setEditPageIsOpen(isOpened: boolean) {
            console.log('setEditPageIsOpen');
            self.editPageIsOpen = isOpened;
        }

        function createPage(data: any, id: string) {
            console.log('createPage');
            self.pages.push(
                PageStore.create({
                    ...data,
                    id: id
                })
            );
        }


        //添加页面
        async function addPage(data: { label: string; path: string; icon?: string; schema?: any; }) {
            console.log('addPage');
            addPages(data, String(`${++pagIndex}`));
            const app_id = window.localStorage.getItem('app_id');
            var res = await axios.post(Config.Config_ADDRESS+"?type=menu",
                { app_id: app_id, type: "menu", label: data.label,path: data.path, icon: data.icon, schema: JSON.stringify(data.schema) });
               
            if (res.data.status == 0) { //保存成功
                console.log("保存成功");
                console.log(res.data);
                console.log(self.pages);
                console.log(pagIndex);
                console.log(self.pages[pagIndex]);
                //重新构建目录
                afterCreate();
                //self.pages[pagIndex].id = res.data.data;
                
            } else { //保存失败
                console.log("保存失败");
            }

                    
        }


        //添加页面
        function addPages(data: { label: string; path: string; icon?: string; schema?: any; }, id: string) {
            console.log('addPages');
            const app_id = window.localStorage.getItem('app_id');
            console.log({ app_id:app_id, type: "menu", label: data.label,path:data.path, icon: data.icon, schema: JSON.stringify(data.schema) });

            var page = PageStore.create({
                ...data,
                id: id
            });
            var selfPage = self.pages;
            self.pages.push(page);
        }

        //编辑页面导航
        function editPage(data: { label: string; path: string; icon?: string; }, index: any) {
            //根据当前索引获取到当前导航的id
            console.log('editPage');
       
            console.log(self.pages);
            console.log(self.pages[index]);
            console.log(self.pages[index].id);
            const app_id = window.localStorage.getItem('app_id');
            var obj = { app_id: app_id, type: "menu", label: data.label, icon: data.icon,path:data.path}
            ;
            axios.put(Config.Config_ADDRESS + "/" + Number(self.pages[index].id), obj)

                .then(res => {
                    console.log(res)
                    if (res.data.status == 0) {
                        console.log("修改成功")
                    }
                  
                });
        }
        //移除页面
        function removePageAt(index: number, id: any) {
            console.log('removePageAt');
            var databaseid = self.pages[index].id;
            console.log(self.pages[index]);
            self.pages.splice(index, 1);
         
            axios.delete(Config.Config_ADDRESS + "/" +databaseid)

                .then(res => {
                    if (res.data.status == 0) {
                        console.log("删除成功")
                        //重新构建页面
                        afterCreate();
                    }
                    console.log(res)
                });
            
          
        }
        //更新页面内容
        async  function updatePageSchemaAt(index: number) {
            console.log('updatePageSchemaAt');
            self.pages[index].updateSchema(self.schema);
            var databaseid = self.pages[index].id;
            var res = await axios.put(Config.Config_ADDRESS+"/"+databaseid,
                { schema: JSON.stringify(self.schema) });

            if (res.data.status == 0) { //保存成功
                console.log("修改成功");
            } else { //保存失败
                console.log("保存失败");
            }
        }
        //更新页面
        function updateSchema(value: any) {
            console.log("updateSchema");
            self.schema = value;
        }
        //设置预览
        function setPreview(value: boolean) {
            console.log('setPreview');

            self.preview = value;
        }

        function afterCreate() {
            //获取应用信息
          //  setAddPageIsOpen(false)   
          
            const app_id = window.localStorage.getItem('app_id');
            const user_id = window.localStorage.getItem('user_id');
            const user_type = window.localStorage.getItem('user_id');
            if(!app_id){
                return false;
            }
        
           
           

            if(!user_id){
                return false;
            }
            console.log("user_id:",user_id);
            console.log("app_id:",app_id);    

            console.log('afterCreate');
            //更新app_id
            var params=location.search;
          
            if(params){
                var obj = qs.parse(params, { ignoreQueryPrefix: true });//忽略符号? { ignoreQueryPrefix: true }
                let app_id=obj.app_id;  
                    window.localStorage.setItem('app_id', String(app_id));    
              
            }else{ 
             var r= window.location.href.match(new RegExp("[\?\&]" + "?app_id" + "=([^\&]+)", "i"));
                if (r != null){   
                    let app_id = unescape(r[1]);
                    window.localStorage.setItem('app_id', app_id);    
                } 
            }   

            // persist store
            if (typeof window !== 'undefined' && window.localStorage) {
                const storeData = window.localStorage.getItem('store');
                if(!storeData){
                   // addPages({ label:"xxxx-",path:"xxxx", icon: "xxxx", schema: "xxxx" },"888");   
                    window.localStorage.setItem('store', '{"pages":[{"id":"1","icon":"fa fa-file","path":"home","label":"This is Home","schema":{"type":"page","title":"Hello world-store","body":"初始页面store"}},{"id":"888","icon":"xxxx","path":"xxxx","label":"xxxx-","schema":"xxxx"}],"theme":"default","asideFixed":true,"asideFolded":false,"offScreen":false,"addPageIsOpen":true,"editPageIsOpen":false,"showHistoryIsOpen":false,"preview":false}');         
                }               
            }
            
                //获取页面信息
                var res =  axios.get(Config.Config_ADDRESS+"?type=menu&page=1&perPage=200&names='app_id':"+"'"+app_id+"'")  
                 .then(res => {
                    if(res.data.status==0){
                        if (typeof window !== 'undefined' && window.localStorage) {
                            const storeData = window.localStorage.getItem('store');
                            //权限过滤，过滤掉用户没有权限的页面
                            var authorization = window.localStorage.getItem('authorization');  
                            var  authorizationArray=authorization.split(",");
                            var pageData=[];
                                //去掉没有权限的页面
                            for (var i = 0; i < res.data.data.items.length; i++){
                                if (typeof res.data.data.items[i].schema != undefined) {
                                    res.data.data.items[i].schema=JSON.parse(res.data.data.items[i].schema);
                                }
                                if (user_type != "designer") {
                                    for(var j=0;j<authorizationArray.length;j++){
                                        if(res.data.data.items[i].id==authorizationArray[j]){
                                         pageData.push(res.data.data.items[i])
                                        }
                                     }
                                }
                               
                             
                            }


                            if (storeData && pageData) {
                                var databaseData = JSON.parse(storeData);
                                databaseData.pages = pageData;
                                console.log(databaseData.pages);
                                applySnapshot(self, databaseData);
                            }

                            reaction(
                                () => getSnapshot(self),
                                json => {
                                    window.localStorage.setItem('store', JSON.stringify(json));
                                }
                            );
                        }
                 }
                  
                });
            const store = window.localStorage.getItem('store');
            //第一次登录
            if(!store){
                window.location.reload()   
            }    
           
                //这里的res就是axios请求回来的结果
        }
       
        return {
            toggleAsideFolded,
            toggleAsideFixed,
            toggleOffScreen,
            setAddPageIsOpen,
            setEditPageIsOpen,
            addPage,
            editPage,
            createPage,
            removePageAt,
            updatePageSchemaAt,
            updateSchema,
            setPreview,
            afterCreate
        };
    });

export type IMainStore = typeof MainStore.Type;
