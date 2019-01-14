<template>
            <div class="xiang">
                    <h3>商品详情</h3> 
                    <h6  v-if="mainList" v-for="(i,index) in mainList" :key="index">
                        <img :src="i.main1Img">
                    </h6>
            </div>
</template>

<script>
// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "SixMains3",
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
    fetch("../../../static/json/Six.json").then(res=>{
        res.json().then(data=>{
            console.log(data.main1);
            this.mainList = data.main1
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
 .xiang{
    width: 100%;
    height:auto;
    background: #fff;
}
 .xiang h3{
    width: 100%;
    height:.46rem;
    line-height:.46rem;
    font-size: 14px;
    font-weight: 400;
    padding-left: .15rem;
}

 .xiang img{
    width: 100%;
    height:auto;
}

</style>
