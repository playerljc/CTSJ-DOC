# CTSJ-DOC

简体中文 | [English](./README.md) 

一个文档生成工具，分别包含 React 和 Vue 两套生成文档的工程模板

React 工程模板

  - 使用 **[@ctsj/build](https://www.npmjs.com/package/@ctsj/build)** 进行构建
  - 使用 **[@ctsj/router](https://www.npmjs.com/package/@ctsj/router)** 做路由跳转
  - 使用 **[ant-design](https://ant.design/)** 做 UI
  - 使用 **[@baifendian/adhere-ui-playground](https://www.npmjs.com/package/@baifendian/adhere-ui-playground)** 作为代码展示组件，具体请参考[线上例子](http://49.232.163.126:8083/adhere/component/ui/demo) , 配置请[参考](http://49.232.163.126:8083/adhere/component/ui/playground)
    - AnchorNavigation - 带有锚点导航的面板
    - CodeBoxPanel - 代码展示组面板(可包含 Playground、PlayGroundTab 和 PlaygroundMulit)
    - CodePanel - 单个代码显示面板
    - CodeTabPanel - 带有选项卡切换的代码显示面板
    - FunctionProps - 函数说明面板
    - Props - React 的 Props 说明面板
    - Playground - 基本的代码和例子展示面板(包含 CodePanel)
    - PlayGroundTab - 带有选项卡切换的代码和例子展示面板(包含 CodeTabPanel)
    - PlaygroundMulit - 多代码和例子展示面板(包含 Playground 和 PlaygroundMulit)
    - PlaygroundPage - 包含 AnchorNavigation 和 CodeBoxPanel
  - React - 17.x
  - Ant-Design - 4.x
  - Typescript 4.x

Vue 工程模板
  - 使用 **[@ctsj/buildv](https://www.npmjs.com/package/@ctsj/buildv)** 进行构建
  - 使用 **[vue-router](https://router.vuejs.org/zh/)** 做路由跳转
  - 使用 **[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn/)** 做 UI
  - 使用 **[@baifendian/adherev-ui-playground](https://www.npmjs.com/package/@baifendian/adherev-ui-playground)** 作为代码展示组件，具体请参考[线上例子](http://49.232.163.126:8084/adherev/component/ui/demo), 配置请[参考](http://49.232.163.126:8084/adherev/component/ui/playground)
    - AnchorNavigation - 带有锚点导航的面板
    - CodeBoxPanel - 代码展示组面板(可包含 Playground、PlayGroundTab 和 PlaygroundMulit)
    - CodePanel - 单个代码显示面板
    - CodeTabPanel - 带有选项卡切换的代码显示面板
    - FunctionProps - 函数说明面板
    - Props - React 的 Props 说明面板
    - Playground - 基本的代码和例子展示面板(包含 CodePanel)
    - PlayGroundTab - 带有选项卡切换的代码和例子展示面板(包含 CodeTabPanel)
    - PlaygroundMulit - 多代码和例子展示面板(包含 Playground 和 PlaygroundMulit)
    - PlaygroundPage - 包含 AnchorNavigation 和 CodeBoxPanel
  - Vue - 2.x
  - Ant-Design-Vue - 1.x
  - Typescript 4.x

# 安装

```
npm install @ctsj/doc
```

```
yarn add @ctsj/doc
```

# 使用

- 创建 React 工程模板

```
ctd create -t react -n yarn -d HelloWord
```

- 创建 Vue 工程模板

```
ctd create -t vue -n yarn -d HelloWord
```

- 进入/启动

```
> cd HelloWord
> npm run startapp
```

- 构建

```
> npm run buildapp
```

# CLI

&ensp;&ensp; 使用 ctd create 创建工程

- -t --type 创建工程模板的类型 [react | vue]
- -n --npmClient 使用的 npmClient [npm | yarn] 默认是 yarn
- -d --directory 创建工程的目录 支持相对路径和绝对路径

# 开发

- ### React 开发

  - 工程目录介绍

  | 目录/文件         | 简介                |
  | ----------------- | ------------------- |
  | assets            | 静态目录            |
  | src               | 源码目录            |
  | themes            | 主题目录            |
  | .browserslistrc   | browserslistrc 配置 |
  | .editorconfig     | editorconfig 配置   |
  | .eslintrc.js      | eslint 配置         |
  | .prettierrc.js    | prettierrc 配置     |
  | .stylelintrc.js   | stylelintrc 配置    |
  | ctbuild.config.js | 构建(webpack)配置   |
  | jsconfig.json     | jsconfig.json 配置  |
  | package.json      | 项目配置            |
  | tsconfig.json     | typescript 配置     |

  - src 目录简介

    - components - 系统级别组件现在分为 gallery、ui、util 可以自行定义
    - config - 配置
      - dict - 字典目录
      - dict.config.js - 字典配置
      - router.config.js - 路由配置
    - lib - 支撑系统的 lib
      - AnchorNavigation - 带有锚点导航的面板
      - CodeBoxPanel - 代码展示组面板(可包含 Playground、PlayGroundTab 和 PlaygroundMulit)
      - CodePanel - 单个代码显示面板
      - CodeTabPanel - 带有选项卡切换的代码显示面板
      - FunctionProps - 函数说明面板
      - Props - React 的 Props 说明面板
      - Playground - 基本的代码和例子展示面板(包含 CodePanel)
      - PlayGroundTab - 带有选项卡切换的代码和例子展示面板(包含 CodeTabPanel)
      - PlaygroundMulit - 多代码和例子展示面板(包含 Playground 和 PlaygroundMulit)
      - PlaygroundPage - 包含 AnchorNavigation 和 CodeBoxPanel
      - Header - 头(包含一级菜单信息)
      - Footer - 脚(包含有外连接信息)
      - GalleryLayout - 代码段展示面板
      - ScrollFooterPanel - 带有 Footer 可滚动的面板
      - BasicLayout - 左侧二级菜单右侧路由切换面板(根据路由配置动态生成)
      - Router - 路由配置整合
      - SearchBar - 头部搜索组件(用于进行全文检索)
        - index.json - 索引文件
          - kw - 进行搜索的关键字
          - group - 组名称
          - path - 路由地址
    - app.jsx - 顶级路由组件
    - changelog.jsx - changelog 组件
    - CHANGELOG.md - CHANGELOG 的 markdown
    - introduction.jsx - 简介组件
    - index.html - html 模板文件
    - index.js - 第一个执行的 js 文件
    - index.less - 总体的 less 文件

  - package.json 说明
    - startapp 命令 - 启动工程
    - buildapp 命令 - 构建工程
      - --define 参数
        - alias=@ webpack 别名设置@为 src 目录地址
        - envVars=true process 中混入 env 变量额值
        - cssModules=true 是否启用 cssModel
        - static=assets 静态目录名称
    - lint-\* eslint 相关命令

- ### Vue 开发

  - 工程目录介绍

  | 目录/文件          | 简介                |
  | ------------------ | ------------------- |
  | assets             | 静态目录            |
  | src                | 源码目录            |
  | themes             | 主题目录            |
  | .browserslistrc    | browserslistrc 配置 |
  | .editorconfig      | editorconfig 配置   |
  | .eslintrc.js       | eslint 配置         |
  | .prettierrc.js     | prettierrc 配置     |
  | .stylelintrc.js    | stylelintrc 配置    |
  | ctbuildv.config.js | 构建(webpack)配置   |
  | jsconfig.json      | jsconfig.json 配置  |
  | package.json       | 项目配置            |
  | tsconfig.json      | typescript 配置     |

  - src 目录简介
    - components - 系统级别组件现在分为 gallery、ui、util 可以自行定义
    - config - 配置
      - component.register.config.js - Vue 全局组件和插件的注册
      - router.config.js - 路由配置
    - lib - 支撑系统的 lib
      - AnchorNavigation - 带有锚点导航的面板
      - CodeBoxPanel - 代码展示组面板(可包含 Playground、PlayGroundTab 和 PlaygroundMulit)
      - CodePanel - 单个代码显示面板
      - CodeTabPanel - 带有选项卡切换的代码显示面板
      - FunctionProps - 函数说明面板
      - Props - React 的 Props 说明面板
      - Playground - 基本的代码和例子展示面板(包含 CodePanel)
      - PlayGroundTab - 带有选项卡切换的代码和例子展示面板(包含 CodeTabPanel)
      - PlaygroundMulit - 多代码和例子展示面板(包含 Playground 和 PlaygroundMulit)
      - PlaygroundPage - 包含 AnchorNavigation 和 CodeBoxPanel
      - Header - 头(包含一级菜单信息)
      - Footer - 脚(包含有外连接信息)
      - GalleryLayout - 代码段展示面板
      - ScrollFooterPanel - 带有 Footer 可滚动的面板
      - BasicLayout - 左侧二级菜单右侧路由切换面板(根据路由配置动态生成)
      - Router - 路由配置整合
      - SearchBar - 头部搜索组件(用于进行全文检索)
        - index.json - 索引文件
          - kw - 进行搜索的关键字
          - group - 组名称
          - path - 路由地址
    - app.vue - 顶级路由组件
    - changelog.vue - changelog 组件
    - CHANGELOG.md - CHANGELOG 的 markdown
    - introduction.vue - 简介组件
    - index.html - html 模板文件
    - index.ts - 第一个执行的 js 文件
    - index.less - 总体的 less 文件
  - package.json 说明
    - startapp 命令 - 启动工程
    - buildapp 命令 - 构建工程
      - --define 参数
        - alias=@ webpack 别名设置@为 src 目录地址
        - envVars=true process 中混入 env 变量额值
        - cssModules=true 是否启用 cssModel
        - static=assets 静态目录名称
        - runtimeCompiler=true 是否动态编译 Vue 的 template 模板
    - lint-\* eslint 相关命令
