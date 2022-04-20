# app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

本开源系统是一个前端通用式的后端系统，element ui作为ui框架插件库。包含vue-router，vuex等
配置：下载element ui 
yarn add yarn add element-ui -S
引入element ui
这里我是根据官方文档快速入手进行引入
注意：vue 全局引入需要加上为：vue use
进行全局注入

2.按需引入需要的element ui 
下载 babel-plugin-component -D 引入该插件是为了更好的减小对应程序的体积

3.配置指定版本的vue路由本系统采用的是vue-router@3.2.0
创建router文件，用来管理我们的路由
注意在vue2之中,index.js管理路由的情况下，路由表必须是routes，否则无法显示