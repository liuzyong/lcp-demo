

# UniappAdmin 开源可视化搭建后台

>访问 | [官网](http://www.uniappadmin.cn)

## 文档地址（编写中）

- http://doc.uniappadmin.cn/

## 产品思想
1、前端可视化搭建平台，通过可视化拖拽、配置就能生成各种后台页面，极大减少开发成本，甚至可以不需要了解前端。
目前在百度广泛用于内部平台的前端开发，已有 100+ 部门使用，创建了 3w+ 页面。

2、基于docker 完成应用的一键打包跟安装部署

3、基于微服务架构的ＡＰＩ服务，满足80％的ＡＰＩ使用场景，避免重复造轮子

4、Sass模式，一个总管理平台可以控制、管理、生成所有应用。
## 大事记

- 10月8日：发布 1.0 正式版
- 10月30日：发布 1.0 配套文档
- 11月30日： docker商店(可通过docker商店一键安装uniappadmin)


## 特点

- 💻 **快速交付**，最快一天可配置出一个完整的后台管理系统。
- 🌴 **微服务化API**，在单体架构上实现API服务，满足80%API使用场景。
- 🚀 **可视化搭建**，无需写一行后台前端代码。
- 🔌 **一键部署**，提供基于docker的一键部署安装功能。
- 📦 **Sass模式**，一个总后台管理可生成无数子应用（一个应用即是一个后台管理系统）
- 📀 **应用市场**，基于docker实现的应用市场，开发者完成应用开发后，可一键上传到应用市场售卖。


##  总平台（总后台）

- [🔥UniappAdmin](http://demo.uniappadmin.cn:5207/)
账户：
密码：

## 🔥UniappAdmin 设计人员端（产品经理/设计人员/开发者）
- [🔥UniappAdmin](http://demo.uniappadmin.cn:5204/)
账户：
密码：

## 🔥UniappAdmin 普通用户端
- [🔥UniappAdmin]http://demo.uniappadmin.cn:5204/)
账户：
密码：
## 🍳 UniappAdmin



- [sula-cooker](https://cook.sula.now.sh)

<div>
  <img src="https://file.9pigfly.com/demo.png" width="49%"/>
  <img src="https://file.9pigfly.com/demo2.png" width="49%"/>
</div>

## 🥗 安装Uniappadmin
提供基于Docker 的可视化一键安装脚本（技术小白请选这个）
[一键安装脚本下载](https://gitee.com/uniappadmin/install) 



## 📦 以下是需要对UniappAdmin 二次开发才需要看的

UniappAdmin  技术栈：
Go 语言  用于开发微服务化的API服务、如单据服务API、产品服务API、配置服务API
Ｒeact  用于开发总后台及可视化编辑器

下载 master 分支代码
```bash
git clone   git@gitee.com:uniappadmin/uniappadmin.git
```

## 🔨 启动API 服务（需要安装go 环境）

go 原生编译
```go
go build  ./base_service/main.go

./base_service.exe (windows)
./base_service_liunx (liunx)
```
## 🔨 启动总后台

```js
cd admin
npm run dev
npm start 
```
## 🔨 启动可视化编辑器

```js
cd adminEditor
npm run dev
npm start 
```

## 📋 已经完成

- [x] docker 可视化部署安装web脚本 
- [x] 微服务化API 
- [x] 可视化编辑器
- [x] 商业化案例
- [x] 生产环境测试

## 📋 待完成

- [ ] API文档
- [ ] docker应用市场 
- [ ] 独立社区
- [ ] 应用打包成dockerfile文件
- [ ] 使用文档

## 🔗 社区 技术支持服务
独立社区还在建设中，用户可先在码云提交issues,获取问题解答。

## 🔗 VIP 技术支持服务
由官方开发者提供的保底技术支持服务,保证您的项目随时都有人可协助解决使用中及开发中遇到的问题,由于人员成本问题,我们需要象征性的收一点费用.
http://www.uniappadmin.cn/support.html
收取的费用主要用于社区建设，该费用会在社区建设完毕后返回给对应支持者账户中，支付后请保留支付凭证。



## 加入VIP微信群
申请需要备注提供支付金额，及支付人姓名 
<div>
  <img src="https://file.9pigfly.com/demo3.png" width="300" />
</div>