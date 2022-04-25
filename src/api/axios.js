import axios from "axios"
import config from "../config"


// 引入之后对当前的一个变量进行判断
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
// 这段代码是判断当前开发环境，如果是development则代表开发环境，如果为真则选取dev为开发环境，否则就认为是生产环境

class HttpRequest{
// 对外暴露类的实例
   constructor(baseUrl){
       this.baseUrl = baseUrl
   }
   getInsideConfig(){
    //    定义axios先相关的配置
    // 初始值：
    const config = {
        baseUrl:this.baseUrl,
        header:{}
        // 请求头的相关的信息
    }
    return config
   }

//    下面是拦截器的信息
  interceptors(instance){
    // 添加路由拉拦截
    instance.interceptors.request.use(
        function(config){
            // 在发送请求之前做了生命
            return config;
        },
        function(error){
            // 请求错误的时候做了生命
            return Promise.reject(error);
        });
        instance.interceptors.response.use(
            // 添加路由相应拦截器
            function(response){
                
                return response;
                // 相应数据散点
            },
            function(error) {
                // 相应错误
                return Promise.reject(error)
            }
        )
}

      request(options){
        //   处理接口请求的函数
        const instance = axios.create()
        options = {...this.getInsideConfig(), ...options }
        // 下面是调用拦截器把上面创建的实例传入
        this.interceptors(instance)
        return instance(options)
        // 返回实例，然后在把对应的数据进行传入
      }
}
export default new HttpRequest(baseUrl)
// 传入url对应的地址
