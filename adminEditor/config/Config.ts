import {
    types,
    getEnv
} from "mobx-state-tree";

// let BASE_SERVICE_ADDRESS = "http://127.0.0.1:5212/v1/";
// let STATIC_FILE_ADDRESS = "http://127.0.0.1:5212";
// let ADMIN_ADDRESS = "http://127.0.0.1:5207";
// let ADMIN_EDIT_ADDRESS = "http://127.0.0.1:5204";


let BASE_SERVICE_ADDRESS = "";
let ADMIN_ADDRESS = "";
let ADMIN_EDIT_ADDRESS = "";
let STATIC_FILE_ADDRESS = "";


var domian=getDomian();
if (BASE_SERVICE_ADDRESS == "") {
    BASE_SERVICE_ADDRESS=domian+":5012/v1/"
}

if (STATIC_FILE_ADDRESS == "") {
    STATIC_FILE_ADDRESS=domian+":5012"
}

if (BASE_SERVICE_ADDRESS == "") {
    BASE_SERVICE_ADDRESS=domian+":5012/v1/"
}
if (ADMIN_ADDRESS == "") {
    ADMIN_ADDRESS=domian+":5207"
}

if (ADMIN_EDIT_ADDRESS == "") {
    ADMIN_EDIT_ADDRESS=domian+":5204"
}
function getDomian() {
     // 返回所使用的 web 协议，如：http:
    var protocol = window.location.protocol;
     // 返回 web 主机的端口，如：8080
    var port = window.location.port;
    var domian = window.location.protocol + "//" + window.location.hostname; // 
    console.log(domian);
    return domian;
}



export const Config ={
    APP_ENV: "dev",
    ADMIN_ADDRESS: ADMIN_ADDRESS,
    ADMIN_EDIT_ADDRESS: ADMIN_EDIT_ADDRESS,
    BASE_SERVICE_ADDRESS: BASE_SERVICE_ADDRESS,
    STATIC_FILE_ADDRESS:STATIC_FILE_ADDRESS,
    PRODUCT_ADDRESS: BASE_SERVICE_ADDRESS+"product",
    AUTHORIZATION_ADDRESS:  BASE_SERVICE_ADDRESS+"authorization",
    LOGIN_ADDRESS:  BASE_SERVICE_ADDRESS+"user/login",
    Config_ADDRESS:  BASE_SERVICE_ADDRESS+"config",
    User_ADDRESS:  BASE_SERVICE_ADDRESS+"user",
    File_ADDRESS:  BASE_SERVICE_ADDRESS+"file",
  } 