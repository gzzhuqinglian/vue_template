# vue-base #



<!--[组件地址demo](https://gzzhuqinglian.github.io/apages/vuebase/#/index)-->


**本项目的定位是基础模板来开发**


## 前言
>基于目前的前端发展趋势。数据和试图分离，组件化，性能以及和原生交互的等方面的需求。采用了vue的相关技术架构。 目前的技术栈主要的采用vue+axios+vuex+mockjs由webpack2打包，最后生成单页应用。基础配置分为测试环境，生产环境和开发环境。本地开发设置了本地服务代理，避免了跨域问题。同时用了mockjs模拟数据，可以和后端无缝切换。测试和生产环境，只需要执行相关的命令就能打成可以运行的代码包，可以快速集成在APP里面，或者放在服务器上。



## 开发
```bash
    # 克隆项目
    git clone https://github.com/PanJiaChen/vue-element-admin.git

    # 安装依赖
    npm install
    //or # 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
    npm install --registry=https://registry.npm.taobao.org

    # 本地开发 开启服务
    npm run dev
```
浏览器访问 http://localhost:9000

## 发布
```bash
    # 发布测试环境
    npm run build:sit

    # 构建生成环境
    npm run build:prod
```

## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── config                 // 路由配置
│   ├── filtres                // 全局filter
│   ├── mock                   // mock数据
│   ├── pages                  // view页面
│   ├── store                  // 全局store管理
│   ├── style                  // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
│   └── jquery                 // jquery
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json

```

## 状态管理
后台只有user和app配置相关状态使用vuex存在全局，其它数据都由每个业务页面自己管理。


##规范
###开发之前

尽量使用最新ES6语法，具体如下：

- 正确使用const和let替代var
- 使用模板字符串${this.data}
- 将工具函数等依赖单独分离，并用import导入
- 对象字面量缩写、箭头函数
- 通用工具集可以在utils/内扩展
- 通用组件在components/内扩展

### 组件

#### 1. 命名
- 尽量简单、表意
- export 出的对象是用驼峰命名法，比如 Page 、 ButtonItem
- 如组件需要嵌套使用，子组件命名在父组件后加-item，比如timeline及timeline-item

#### 2. 目录
- 组件应在目录 compoents/下，每个组件要有单独的目录，目录命名是用小写，入口文件为index.js，导出组件，再由index.js 暴露给使用者
- 每个组件的文件名当使用小写， 但必须与组件的名称一致，比如 timeline.vue和timeline-item.vue

#### 3. 属性
- 必须规定type或者使用validator进行验证
- 如果validator验证为几个值中的一个，则使用utils/内的相关函数进行验证
- 如果有尺寸的参数size，则只能使用small 、large，默认是适中，可不写

### 事件

#### 1. 命名
- 使用on- 为前缀，比如on-change
#### 2. 规范
- 使用$emit来对外触发事件，而不用$dispatch和$broadcast
- 嵌套组件之间通信，使用$parent和$children，而不用$emit，避免使用这错误使用自定义事件

### 样式
- 尽量不用!important（公共样式除外）
- 尽量不使用行内样式
- 兼容多个浏览器时，将标准属性写在底部
- 使用z-index的值尽量不要超过150（公共样式和提示框模块除外），不允许直接使用（999~9999）之间的大值
- “0”值后面不要写单位
- 每个声明应该用分号结束



