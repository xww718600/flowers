<template>
            <div class="right">
                    <h1>母婴</h1>
                    <div class="xia">
                            <dl  v-if="mainList" v-for="(i,index) in mainList" :key="index">
                                <dt><img :src="i.main2Img"></dt>
                                <dd>{{i.main2Cont}}</dd>
                            </dl>
                    </div>
            </div>
</template>

<script>

// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "TwoYou",
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
    fetch("../../../static/json/Two.json").then(res=>{
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

<style scoped>
 .right{
    flex:1;
    height:auto;
    overflow-x: hidden;
    overflow-y: auto;
}
 .right::-webkit-scrollbar{
    display: none;
}

 .right h1{
    font-size: 14px;
    font-weight: 400;
    margin:.25rem 0 .45rem .14rem;
}
 .right .xia{
    display: flex;
    flex-wrap: wrap;
}
 .right .xia dl{
    padding:0 .13rem;
}
 .right .xia dt{
    width: .48rem;
    height:.48rem;
    margin:0 auto;
}
 .right .xia dt img{
    width: .48rem;
    height:.48rem;
}

 .right .xia dd{
    font-size: 11px;
    color:#555;
    text-align:center;
    margin-top: .07rem;
    margin-bottom: .25rem;
}
</style>
