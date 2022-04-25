import Mock from "mockjs"
// mock数据模拟

// 下面是图标数据
let List = []

export default {
    getStatiscalData:()=>{
        // mock.Random.float 随机产生0到100的随机数，保留小数
        for (let i=0; i < 7; i++){
            List.push(
                Mock.mock({
                    三星:Mock.Random.float(0,1000,0,0),
                    小米:Mock.Random.float(0,1000,0,0),
                    华为:Mock.Random.float(0,1000,0,0),
                    菠萝:Mock.Random.float(0,1000,0,0),
                    苹果:Mock.Random.float(0,1000,0,0),
                })
            )
        }
        return {
            code:20000,
            data:{
                // 饼图
                videoData:[
                    {
                        name:'小米',
                        value:2900
                    },
                    {
                        name:'小米',
                        value:2900
                    },
                    {
                        name:'小米',
                        value:2900
                    },
                    {
                        name:'小米',
                        value:2900
                    },
                ],
                // 柱状图
                userData:[
                    {
                        date:"周一",
                        new:5,
                        active:200
                    },
                    {
                        date:"周二",
                        new:5,
                        active:200
                    },
                    {
                        date:"周三",
                        new:5,
                        active:200
                    },
                    {
                        date:"周四",
                        new:5,
                        active:200
                    },
                    {
                        date:"周五",
                        new:5,
                        active:200
                    },
                    {
                        date:"周六",
                        new:5,
                        active:200
                    },
                    {
                        date:"周日",
                        new:5,
                        active:200
                    },
                ],
                // 折线图
                orderData:{
                    date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007",],
                    data:List
                },
                tableData:[
                    {
                     name:'oppo',
                     todayBuy:500,
                     monthBuy:3500,
                     totalBuy:22000
                    },
                    {
                        name:'三星',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                       },
                       {
                        name:'菠萝',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                       },
                       {
                        name:'每注',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                       },
                       {
                        name:'苹果',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                       },

                ]
            }
        }
    }
}