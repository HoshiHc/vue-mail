<template>
  <el-row class="Home" :gutter="20">
    <el-col :span="8" class="identity">
      <el-card class="l_card" shadow="always">
        <div class="user">
          <span class="user-icon">{{iconImg}}</span>
          <div class="admin">
            <span class="name">{{name}}</span>
            <span class="access">{{access}}</span>
          </div>
        </div>
        <hr/>
        <div class="i_time">
          <span>{{`上次登录时间：`+Time}}</span>
          <span>{{`上次登录地点：`+Dtid}}</span>
        </div>
      </el-card>
      <el-card  class="l_table" shadow="hover">
          <el-table :data="tableData">
              <el-table-column
              v-for="(val,key) in tableLable"
              :key="key"
              :prop="key"
              :label="val"
              ></el-table-column>
          </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" >
       <div class="right">
         <el-col 
         v-for="itme in  countData"
         :key="itme.name"
         >
          <i class="icon" :class="`el-icon-${itme.icon}`"
          :style="{background:itme.color}"
          ></i>
          <div class="detail">
             <p> ${{itme.value}}</p>
             <p>{{itme.name}}</p>
          </div>
         </el-col>
       </div>
       <el-card class="z_echter">
         <!-- 下面是折线图 -->
          <div class="frist_echterf" ref="echarts">
            <!-- vue之中ref获取虚拟dom节点 --> 
          </div>
       </el-card>
       <div class="graph">
          <el-card class="graph_y" ref="oneEcharts"></el-card>
          <el-card class="graph_y" ref="twoEcharts"></el-card>
       </div>
    </el-col>
  </el-row>
</template>

<script>
import {getDate} from "../../api/data.js"
import * as echarts from "echarts"
// 引入data.js文件，并且从其中结构出对应axios的方法
export default {
  name: "Home",
  data() {
    return {
      iconImg: "A",
      name: "小黄",
      access: "超管理员",
      Time: "2022/4/23",
      Dtid: "武汉",
      tableData:[],
      tableLable: {
          name:"可成",
           todayBuy:"今日购买",
            monethBuy:"本月购买",
             totaBuy:"总购买"
       },
      //  订单数据
      countData:[
        {
          name:"今日支付订单",
          value:200,
          icon:"success",
          color:"red"
        },
        {
          name:"今日支付订单",
          value:200,
          icon:"success",
          color:"red"
        },
          {
          name:"今日支付订单",
          value:200,
          icon:"success",
          color:"red"
        },
          {
          name:"今日支付订单",
          value:200,
          icon:"success",
          color:"red"
        },
        {
          name:"今日支付订单",
          value:200,
          icon:"success",
          color:"red"
        },
          {
          name:"今日支付订单",
          value:200,
          icon:"success",
          color:"gary"
        },
      ]  
    };
  },
  mounted(){
    // 挂载之后
  getDate().then(res =>{
    const {code , data} =res.data
    // code代表状态，data代表请求回来具体的数据的值
  //  这里通过es6的解构语法，把拿到的数据进行结构
     if(code === 20000){
     this.tableData = data.tableData
    //  上面是拿到数据表格之中的对应的数据并且进行赋值给对应的表格对象

    //  下面是处理对应的请求回来的数据
    // 第一步，拿到图表相关数据
    const order = data.orderData
    // 第二步：拿到对应的图例的值，这里我理解为key值
    const keyArry = Object.keys(order.data[0])
    // 通过对象的keys方法，拿到当前数组的第一项进行传入
    // 第三步：组装数据
    const series = []
    // 定义一个空数组，
    keyArry.forEach(key =>{
      // 遍历拿到的第一项数组
      series.push({
        // 用es6对应的方法进行添加
        name:key,
        data:order.data.map(itme =>itme[key]),
        // 遍历拿到图标的相关的数据，拿到每一项对应的key值进行返回
        type:"line"
        
      })
    })
    const option  = {
      xAxis:{
        data:order.date,
        // 拿到对应的x轴的坐标
      },
      yAxis:{
      },
      legend:{
        data:keyArry
      },
      series
    }
    // 下面就是初始化图表
    const E = echarts.init(this.$refs.echarts)
    E.setOption(option)

    // 下面是用户图
    const userDate  = {
      legend:{
        // 图的文字和相关的颜色
        textStyle:{
          color:"#333"
        },
      },
      grid:{
        left:"20%"
      },
      // 下面的是提示框
      tooltip:{
        trigger:"axis"
      },
      aAxis : {
        // x周
        type:"category",
        data:data.userData.map(item =>item.date),
        axisLine:{
          lineStyle:{
            color:"#17b3a3"
          },
        },
        axisLabel:{
          interval:0,
          color:"#333"
        },
      },
      yAxis:[
        {
          type:"value",
          axisLine:{
            lineStyle:{
              color:"#17b3a3"
            },
          },
        },
      ],
      color:["#2ec7c9","#b6a2de"],
      series:[
        {
          name:"新增用户",
          data:data.userData.map(item =>item.new),
          type:"bar"
        },
        {
          name:"活跃用户",
          data:data.userData.map(item =>item.active),
          type:"bar"
        }
      ],
    }
    const u = echarts.init(this.$refs.oneEcharts)
    u.setOption(userDate )
  }
      console.log(res.data);
    })
  }
};
</script>

<style>
@import "./index.css";
</style>