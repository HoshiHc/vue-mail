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

4.侧边栏遍历：
当我们拿到一个数组的时候，有的时候后端返回的数据并不是一级的结构，可能是二级的或者三级等更加复杂相关的结构，所以需要判断结构是否不同在vue中，这里我是在computed之中引用计算属性的标签，然后通过filter标签去遍历筛选出是否含有children属性，来判断是否为一级或者二级的相关数据结构，（注释：filter方法为，过滤并且筛选出我们需要的信息，返回一个新的数组结构）
然后在通过v-for进行循环，从而进行文本的渲染。
react书写方式：
这里额外补充一下相关react的侧边遍历的方法：原理其实差不多，不过，这里我使用的是hooks组件，所以请求回来的数据结构哦可以采用.then加上useState的方法，把他赋值给自定义的一个初始化的数组之中，方法加上个人理解，这里我是直接创建了一个箭头函数来处理请求回来的数据，这里直接附上源码

 const renderMenu = (menuList)=>{
     <!-- 定义一个函数，给上形参，这里的形参是后面请求回来的数组名称 -->
    return menuList.map(item=>{
        <!-- es6语法map，遍历传入的形参数组 -->
      if(item.children){
          <!-- 这里我没有采用过滤等方法，直接采用的if表达式来进行判断。如果求情的数组之中存在子属性，为真（children），则渲染一级路由。 -->
        return <SubMenu key={item.key} icon={item.icon} title={item.title}>
           { renderMenu(item.children) }
           <!-- 这里采用的是递归的方法 -->
           <!-- 遍历子路由之中的数组结构 -->
        </SubMenu>
      }
      return <Menu.Item key={item.key} icon={item.icon} onClick={()=>{
        //  console.log(props)
        <!-- props.history.push(item.key) -->
      }}>{item.title}</Menu.Item>
      上面主要是对没有子属性的数组结构进行遍历渲染（这里不做解释）
    })
  }
  5.路由跳转：创建点击事件clickmenu给该方法传递一个形参，
  采用函数时编程，在methods中写入该方法，用push方法进行路由跳转（vue）
  在react中如果进行跳转的话，需要在函数组件中传入props，然后
   props.history.push(item.key)进行跳转
   

   6.头部部分书写
   样式搭建没有好说的
   但是因为是响应式的内容，所以，需要和menu侧边连进行通信，所以这里我采用vuex来进行状态的管理和相互通信,
   在src之下创建一个store的文件，然后进行数据的通信管理

   7.vuex注解：(这里是我这几天研究vue对应的理解，或许有错误，详情可以去官方文档进行了解，当然我这里是手动配置，还可以在创建项目时进行勾选，会自动创建出相应模板文件)
   首先下载vuex状态管理的模块，在index.js之中进行引入，然后引入对应的Vuex模块，在然后把其进行全局的相关的注入。
   在然后就是设计相关的start（状态管理、）
   


   