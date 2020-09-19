import {
    types,
    getEnv
} from "mobx-state-tree";

export const User = types
    .model('User', {
        name: '',
        username: '',
        user_type: ''
    })
    .views((self) => ({
        get isAuthenticated() {
            return !!self.name;
        }
    }))
    .actions((self) => {
        return {
            login(id:string,app_id:string,username:string,user_type:string) {
                console.log("user.login")
                localStorage.setItem('username', username);
                localStorage.setItem('app_id', app_id);
                localStorage.setItem('authenticated', username);
                localStorage.setItem('user_id', id);
                localStorage.setItem('user_type', user_type);
               
                self.name = username;
                self.username = username;
                self.user_type = user_type;
            },
            logout() {
                console.log("user.logout")
                self.name = '';
                localStorage.removeItem('authenticated');
                localStorage.removeItem('app_id');
                localStorage.removeItem('user_id');
                localStorage.removeItem('username');
            },
            afterCreate() {
                console.log("user.afterCreate")
                self.name = localStorage.getItem('username') || '';
            }
        }
    });