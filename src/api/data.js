import axios from "./axios"
// import { axios } from 'axios';

// 是调用二次封装的axios之中的class
  export const getmenu =(paras)=>{
      return axios.request({
        //   调用二次封装的class之中的方法以对象的形式
        url:"/permission/getmenu",
        // 接口的地址
        method:"post",
        // 定义接口请求类型
        data:paras
      })
  }
  export const getDate = () =>{
    return axios.request({
       //   调用二次封装的class之中的方法以对象的形式
       url:"/home/getData",
       // 接口的地址
       method:"get",
       // 定义接口请求类型
      //  data:paras
    })
  }
