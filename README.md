# CTSJ-DOC
&ensp;&ensp;一个文档生成工具，分别包含React和Vue两套生成文档的工程模板

* React工程模板  
  * 使用 **[@ctsj/build](https://www.npmjs.com/package/@ctsj/build)** 进行构建
  * 使用 **[@ctsj/router](https://www.npmjs.com/package/@ctsj/router)** 做路由跳转
  * 使用 **[ant-design](https://ant.design/)** 做UI
  * 使用 **[@baifendian/adhere-ui-playground](https://www.npmjs.com/package/@baifendian/adhere-ui-playground)** 作为代码展示组件，
  具体请参考[线上例子](http://49.232.163.126:8083/adhere/component/ui/demo) , 配置请[参考](http://49.232.163.126:8083/adhere/component/ui/playground)
    * AnchorNavigation - 带有锚点导航的面板
    * CodeBoxPanel - 代码展示组面板(可包含Playground、PlayGroundTab和PlaygroundMulit)
    * CodePanel - 单个代码显示面板
    * CodeTabPanel - 带有选项卡切换的代码显示面板
    * FunctionProps - 函数说明面板
    * Props - React的Props说明面板
    * Playground - 基本的代码和例子展示面板(包含CodePanel)
    * PlayGroundTab - 带有选项卡切换的代码和例子展示面板(包含CodeTabPanel)
    * PlaygroundMulit - 多代码和例子展示面板(包含Playground和PlaygroundMulit)
    * PlaygroundPage - 包含AnchorNavigation和CodeBoxPanel
  * React - 17.x
  * Ant-Design - 4.x
  * Typescript 4.x
 
* Vue工程模板
  * 使用 **[@ctsj/buildv](https://www.npmjs.com/package/@ctsj/buildv)** 进行构建
  * 使用 **[vue-router](https://router.vuejs.org/zh/)** 做路由跳转
  * 使用 **[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn/)** 做UI
  * 使用 **[@baifendian/adherev-ui-playground](https://www.npmjs.com/package/@baifendian/adherev-ui-playground)** 作为代码展示组件
  * Vue - 2.x
  * Ant-Design-Vue - 1.x
  * Typescript 4.x
     
# 安装
```
npm install @ctsj/doc --save-dev
```
```
yarn install @ctsj/doc
```

# 使用
* 创建React工程模板
```
ctd create -t react -n yarn -d HelloWord
```

* 创建Vue工程模板
```
ctd create -t vue -n yarn -d HelloWord
```

* 进入/启动
```
> cd HelloWord
> npm run startapp
```

* 构建
```
npm run buildapp
```

# CLI
&ensp;&ensp; 使用ctd create创建工程
* -t --type 创建工程模板的类型 [react | vue]
* -n --npmClient 使用的npmClient [npm | yarn] 默认是yarn
* -d --directory 创建工程的目录 支持相对路径和绝对路径
  
# 开发
 * React开发
   * 工程目录介绍  
   
   | 目录/文件     | 简介 |
   | ----------- | ----------- |
   | assets      | 静态目录 |
   | src   | 源码目录 |
   | themes   | 主题目录 |
   | .browserslistrc | browserslistrc配置|
   | .editorconfig | editorconfig配置|
   | .eslintrc.js | eslint配置|
   | .prettierrc.js | prettierrc配置|
   | .stylelintrc.js | stylelintrc配置|
   | ctbuild.config.js | 构建(webpack)配置|
   | jsconfig.json | jsconfig.json配置|
   | jsconfig.json | jsconfig.json配置|
   | package.json | 项目配置|
   | tsconfig.json | typescript配置|
   
   * src目录简介
     * components - 系统级别组件现在分为gallery、ui、util可以自行定义
     * config - 配置
       * dict - 字典目录
       * dict.config.js - 字典配置
       * router.config.js - 路由配置
     * lib - 支撑系统的lib
       * AnchorNavigation - 带有锚点导航的面板
       * CodeBoxPanel - 代码展示组面板(可包含Playground、PlayGroundTab和PlaygroundMulit)
       * CodePanel - 单个代码显示面板
       * CodeTabPanel - 带有选项卡切换的代码显示面板
       * FunctionProps - 函数说明面板
       * Props - React的Props说明面板
       * Playground - 基本的代码和例子展示面板(包含CodePanel)
       * PlayGroundTab - 带有选项卡切换的代码和例子展示面板(包含CodeTabPanel)
       * PlaygroundMulit - 多代码和例子展示面板(包含Playground和PlaygroundMulit)
       * PlaygroundPage - 包含AnchorNavigation和CodeBoxPanel
       * Header - 头(包含一级菜单信息)
       * Footer - 脚(包含有外连接信息)
       * GalleryLayout - 代码段展示面板
       * ScrollFooterPanel - 带有Footer可滚动的面板
       * BasicLayout - 左侧二级菜单右侧路由切换面板(根据路由配置动态生成)
       * Router - 路由配置整合
       * SearchBar - 头部搜索组件(用于进行全文检索)
         * index.json - 索引文件
           * kw - 进行搜索的关键字
           * group - 组名称
           * path - 路由地址
     * app.jsx - 顶级路由组件
     * changelog.jsx - changelog组件
     * CHANGELOG.md - CHANGELOG的markdown
     * introduction.jsx - 简介组件
     * index.html - html模板文件
     * index.js - 第一个执行的js文件
     * index.less - 总体的less文件
   
   * package.json说明
     * startapp命令 - 启动工程
     * buildapp命令 - 构建工程
       * --define参数
         * alias=@ webpack别名设置@为src目录地址
         * envVars=true process中混入env变量额值
         * cssModules=true 是否启用cssModel
         * static=assets 静态目录名称
     * lint-* eslint相关命令
         
 * Vue开发


