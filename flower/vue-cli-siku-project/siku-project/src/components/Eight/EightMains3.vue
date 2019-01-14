<template>
        <div class="xia">
                <dl v-if="mainList" v-for="(i,index) in mainList" :key="index" >
                        <dt><img :src="i.main2Img1"></dt>
                        <dd>
                                <p>{{i.min2p1}}</p>
                                <p>{{i.min2p2}}<span>{{i.min2span}}</span></p>
                                <p>{{i.min2p3}}</p>
                                <img :src="i.main2Img2">
                        </dd>
                </dl>
        </div>

<!--
 <div id="box">
        <div class="search">
                <input type="text" class="searchBox" v-model="searchVal">
                <button class="btn">搜 索</button>
        </div>
        <table class="goodsheet">
                <tr>
                <th>商品名</th>
                <th>单价
                        <span @click="orderFn('price', false)">↑</span>
                        <span @click="orderFn('price', true)">↓</span>
                </th>
                <th>销量
                        <span @click="orderFn('sales', false)">↑</span>
                        <span @click="orderFn('sales', true)">↓</span>
                </th>
                </tr>
                <tr v-for='(item, key) in list'>
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.sales}}万</td>
                </tr>
        </table>
</div>
-->
 </template>

<script>
 // import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "EightMains3",
        data(){
        return {
            mainList:[],
        }
},
methods:{
  _initData(){
    // indexMaiApi.getMainList(data=>{
    //   this.mainList=data.main1;
    //   console.log(this.mainList)
    // })
    fetch("../../../static/json/Eight.json").then(res=>{
        res.json().then(data=>{
            console.log(data.main2);
            this.mainList = data.main2
        })
    })
  }
},
//创建完成
created(){
  this._initData()

 },
    }

</script>

<style>
  .xia{
    height:auto;
    width: 100%;
}
 .xia dl{
    padding:.22rem .12rem 0;
    display: flex;
}
 .xia dl dt img{
    height:1.36rem;
    width: 1.36rem;
}
 .xia dl dd{
    padding-left: .1rem;
}
 .xia dl dd p:nth-of-type(1){
    color:#4b4b4b;
    font-weight: 500;
}
 .xia dl dd p:nth-of-type(2){
    font-size: 14px;
    color:#fc2208;
    font-weight: 800;
    margin-top: .17rem;
}
 .xia dl dd p:nth-of-type(2) span{
    font-size: 12px;
    color:#ccc;
    font-weight: 400;
    padding-left: .06rem; 
}
 .xia dl dd p:nth-of-type(3){
    font-size: 12px;
    color:#ccc;
    font-weight: 400;
    margin-top: .22rem;
}
 .xia dl dd img{
    height:.19rem;
    width: .5rem;
    margin-top: .07rem;
}
</style>
