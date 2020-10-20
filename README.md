

# UniappAdmin 开源可视化搭建后台

>访问 | [官网](http://www.uniappadmin.cn)


## 为什么要使用uniappadmin
1、0代码搭建，所见即所得
通过拖拽组件与简单配置即可完成基础应用功能设计，配合自定义代码能力，可满足大多数应用开发场景；
应用模板与导入导出能力，实现对典型案例及历史应用版本的高效复用，大大降低开发成本，提高项目开发效率

2、应用模板，一键应用生成（开发中）
根据每个不同行业特点，内置行业应用，如CRM、ERP、WMS等


## 行业应用场景

- **产品管理后台配套建设** 

灵活的数据对接特性，可小时级构建复杂产品服务管理中心，满足产品服务运营管理与快速交付

应用形式：业务管理后台、运营平台、审核平台、CMS等


用户场景：期待产品服务快速上线，或对当前平台有拓展优化需求的企业

- **办公应用搭建与完善** 

可基于BPM、数据模型等能力，根据实际企业办公场景诉求，搭建各类适合自身需求的办公应用，并支持与已有系统打通

应用形式：行政审批系统、客户管理、项目管理、HR管理系统等


用户场景：期待低成本、高定制化和高灵活度进行数字化办公转型的企业


- **企业ERP系统建设、迁移与扩展** 

可按需快速构建库管、生产、调度、客服等各业务系统，并接驳打通已有系统，形成架构统一、灵活升级的一体化ERP平台

应用形式：库存管理、生产管理、销售管理、财务管理、客服管理等


用户场景：有业务数字化转型需求、并期望充分利用已有系统的企业单位

- **IT智能化改造** 

融合有更多的AI集成特性，可帮助企业快速搭建或改造具备智能化能力的工业应用，实现业务升级

应用形式：工业质检、智慧巡检、生产管理、产能分析等


用户场景：有工业智能化、物联网等等产业AI升级需求的企业


- **客户外包项目定制实施** 

可根据业务需求快速实现定制化开发，需求变更成本低，更可免除运维烦恼，实现高效交付

应用形式：行业综合解决方案 (如政务、教育、物联网、工业、能源、电商等)


用户场景：期望高效交付、灵活升级、低运维成本的集成商或企事业单位


- **SaaS软件研发** 

基于AI、数据集成、可视化和云服务能力，可快速研发输出具备AI特性的企业SaaS应用

应用形式：企业SaaS应用生产与交付中台


用户场景：期待高效开发具备AI、云特性的企业应用的ISV或创业团队


- **数字化中台建设** 

可与智能云数据中台、AI中台和微服务产品深度融合，联合构建企业数字化中台

应用形式：应用开发/管理中台、信息化管理中心


用户场景：有中台建设需求，期待重构云基础设施、提升整体IT产能的企业


## 总后台使用文档（编写中）

- http://doc.uniappadmin.cn/


## 编辑器文档地址

- https://baidu.gitee.io/amis/docs/index



## 产品思想
1、前端可视化搭建平台，通过可视化拖拽、配置就能生成各种后台页面，极大减少开发成本，甚至可以不需要了解前端。
目前在百度广泛用于内部平台的后台管理，已有 100+ 部门使用，创建了 3w+ 页面。

2、基于docker 完成应用的一键打包跟安装部署

3、基于微服务架构的API服务，满足80％的API使用场景，避免重复造轮子

4、Sass模式，一个总管理平台可以控制、管理、生成所有应用。
## 大事记

- 10月8日：发布 1.0 正式版 
- 10月30日：发布 1.0 配套文档
- 11月30日： 发布docker商店(可通过docker商店一键安装uniappadmin)


## 特点

- 💻 **快速交付**，最快一天可配置出一个完整的后台管理系统。
- 🌴 **微服务化API**，在单体架构上实现API服务，满足80%API使用场景。
- 🚀 **可视化搭建**，无需写一行后台前端代码。
- 🔌 **一键部署**，提供基于docker的一键部署安装功能。
- 📦 **Sass模式**，一个总后台管理可生成无数子应用（一个应用即是一个后台管理系统）
- 📀 **应用市场**，基于docker实现的应用市场，开发者完成应用开发后，可一键上传到应用市场售卖。

## 演示

###  总平台（总后台）   

- [🔥UniappAdmin](http://demo.uniappadmin.cn:5207)http://demo.uniappadmin.cn:5207

账户：admin
密码：admin

###  🔥UniappAdmin 设计人员端（产品经理/设计人员/开发者）
- [🔥UniappAdmin](http://demo.uniappadmin.cn:5204/?app_id=95624659617185792)http://demo.uniappadmin.cn:5204/?app_id=95624659617185792

账户：uniappadmin
密码： uniappadmin

###  🔥UniappAdmin 普通用户端
- [🔥UniappAdmin](http://demo.uniappadmin.cn:5204/?app_id=95624659617185792)http://demo.uniappadmin.cn:5204/?app_id=95624659617185792

账户： 会员
密码： 123456
## 🍳 UniappAdmin 演示图


<div>
  <img src="https://file.9pigfly.com/demo.png" width="49%"/>
  <img src="https://file.9pigfly.com/demo2.png" width="49%"/>
</div>

## 🥗 安装Uniappadmin
提供基于Docker 的可视化一键安装脚本（技术小白请选这个）
[一键安装脚本下载](https://gitee.com/uniappadmin/install) 



## 📦 以下是需要对UniappAdmin 二次开发才需要看的

UniappAdmin  技术栈：

- Go 语言  用于开发微服务化的API服务、如单据服务API、产品服务API、配置服务API
- React 语言 用于开发总后台及可视化编辑器

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
## 导入数据库 并配置
```
sql 文件路径：/uniappadmin/base_service/conf/uniappadmin.sql
配置文件路径: /uniappadmin/base_service/conf/app.conf
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





## Uniappadmin技术交流群
<div>
  <img src="https://file.9pigfly.com/wechat1.png" width="300" />
</div>




## 捐献及支付服务费 支付宝收款码
<div>
  <img src="https://file.9pigfly.com/demo5.png" width="300" />
</div>


## 团队招募

1、招募有识之士，一起加入开发应用市场,共享市场红利。

2、加入团队可定期获得对应比例分红，团队总人数为10人,招完即止。

3、招纳范围：前端需熟悉react,后端需开发过PHP、GO项目（其中一种），了解docker者优先
