import Vue from 'vue'
import App from './App.vue'
import {
  Button,Container,Main,Header,Aside,Footer,
  Row,Col,Menu,Submenu,MenuItem,MenuItemGroup,
  DropdownMenu,Dropdown ,DropdownItem,Card,Table
  ,TableColumn
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store"
import router from "./router"
Vue.use(Button);
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Footer)

Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
