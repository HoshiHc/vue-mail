import Mock from "mockjs"
import homeApi from "./mockServer/home"
// 下面是路由拦截
Mock.mock("/home/getData",homeApi.getStatiscalData)