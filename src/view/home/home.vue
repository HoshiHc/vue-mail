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

          </div>
         </el-col>
       </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      iconImg: "A",
      name: "小黄",
      access: "超管理员",
      Time: "2022/4/23",
      Dtid: "武汉",
      tableData:[
        {
           name:"open",
           todayBuy:100,
           monethBuy:300,
           totaBuy:800
        },
           {
           name:"open",
           todayBuy:100,
           monethBuy:300,
           totaBuy:800
        },
           {
           name:"open",
           todayBuy:100,
           monethBuy:300,
           totaBuy:800
        },
           {
           name:"open",
           todayBuy:100,
           monethBuy:300,
           totaBuy:800
        },
      ],
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
        }
      ]
      
    };
  }
};
</script>

<style>
@import "./index.css";
</style>