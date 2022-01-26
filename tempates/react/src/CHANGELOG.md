# 1.0.13

---

2021-12-28

- 区分 lib 和 es 两个目录来区分 main 和 module
- ssr 的支持
- **adhere-util-dict**
  - 如果 value 是函数加入是否缓存的设置
- **adhere-util-decorators**
  - componentDidCatch 中加入 Loading chunk 重新加载
- **adhere-ui-formitemcreator**
  - 优化栅格布局

# 1.0.12

---

2021-12-13

- **adhere-ui-css**
  - normalize-default.less 修改
  - mixin.less 修改
- **adhere-ui-searchtable**
  - searchformlabel 和 searchformvalue 加入其他属性的混入
- **adhere-util**
  - base 加入 omitObject 方法
  - tree 的修改
- **adhere-util-communication-ajax**
  - 加入 notification 的节流
  - 修改传参错误和 status 的缺省处理
- **adhere-util-dict**
  - 加入 config 配置
- **adhere-util-reactutil**
  - 加入@baifendian/adhere-util-reactutil

# 1.0.11

---

2021-11-19

- **adhere-ui-playground**
  - 加入 collapse 折叠操作
- **adhere-ui-searchtable**
  - componentDidUpdate 的修改
  - 分页没有时候的处理
- **adhere-util**
  - url 库修改加入是否忽略空值、加入缓存
- **adhere-util-intl**
  - 加入新词条
- **adhere-util-resource**
  - dict.form.config.js 资源的修改

# 1.0.10

---

2021-11-4

- **adhere-ui-hooks**
  - 加入代码 useForceUpdate
- **adhere-ui-searchtable**
  - 修改 searchtableimplement.tsx 的 fetchData 方法的传值 BUG
  - 样式大写修改为小写
  - 加入 getDataKey 和 getTotalKey 方法
  - getFetchListPropNameToFirstUpper 自动生成
  - column 支持权限设置(authorized)
  - onClear 方法改为在原型链上定义
  - 加入 renderTableHeader 渲染(表格头上方，查询条件下方)
  - 加入 renderTableFooter 渲染(表格下方,分页上方)
  - searchtableimplement.tsx 加入 getSearchParams 方法获取所有查询参数
  - 加入 fixedTableSpaceBetween 配置项(两端固定(表格的头始终在上方，分页始终在下方)
  - 加入 searchtablestateimplement.tsx 实现类(state 的支持)
  - 修改无数据时样式的错乱
  - 修改 loading 时的样式错乱

# 1.0.9

---

2021-10-27

- **adhere-ui-css**
  - normalize-antd.less 修改
- **adhere-ui-messagedialog**
  - BUG 的修改
- **adhere-ui-searchtable**
  - 把 max-width 的限制去掉
  - 关闭和展开查询条件加入默认状态和是否显示
  - 加入表格体 fit 和滚动
  - 加入表格固定列头，表格体滚动
  - 加入 searchtableimplement.tsx 的默认实现
- **adhere-util-browsersniff**
  - 加入@baifendian/adhere-util-browsersniff
- **adhere-util-validator**
  - 加入@baifendian/adhere-util-validator

# 1.0.8

---

2021-10-17

- **adhere-ui-historyback**
  - 加入火狐下不支持 document.referrer
- **adhere-ui-searchtable**
  - 加入自定义序号列的渲染
  - 搜索栏加入展开和关闭功能
  - 加入 Table 的缺省传递 props 功能
- **adhere-util**
  - 加入 url 库
- **adhere-util-communication-ajax**
  - BUG 的修改
- **adhere-util-intl**
  - 修改系统词条和用户词条的冲突
  - 加入新词条

# 1.0.7

---

2021-9-30

- **adhere-ui-bmap**
  - 加入@baifendian/adhere-ui-bmap 组件
- **adhere-ui-css**
  - 加入 common-no-select 函数
  - 加入 switch.less
- **adhere-ui-flexlayout**
  - fixed 和 auto 加入了 getEl 方法
- **adhere-ui-olmap**
  - 加入 windLayer(风场)
- **adhere-ui-playground**
  - 加入 adhere-ui-playground 组件
- **adhere-ui-polygonselection**
  - 加入 PolygonSelection(多边形选区)组件
- **adhere-ui-splitlayout**
  - onMouseup 事件加入 dragFinished 事件触发
  - 加入 FlexLayout 的 use
- **adhere-util**
  - math 修改
- **adhere-util-domain**
  - domain 模块的浏览器端实现

# 1.0.6

---

2021-7-2

- **adhere-ui-notification**
  - bug 的修改
- **adhere-ui-olmap**
  - 热力图组件 heatmap 修改
- **adhere-ui-popup**
  - bug 的修改
- **adhere-ui-prompt-errorprompt**
  - 加入返回值
- **adhere-ui-prompt-successprompt**
  - 加入返回值
- **adhere-ui-prompt-warnprompt**
  - 加入返回值
- **adhere-ui-searchtable**
  - index.less 加入 antd/es/pagination/style/index.less 样式
  - renderSearchFooterItems 加入 defaultItems 参数
- **adhere-ui-surnames**
  - isTouch 修改为从 Util 中调用
- **adhere-util**
  - 加入 clientDetection 客户端监测代码

# 1.0.0

---

2020-12-22

- 加入代码
