<template>
            <div class="left">
                    <ul class="zuo">
                            <li v-if="mainList" v-for="(i,index) in mainList" :key="index">
                                {{i.main1Text}}
                            </li>
                    </ul>
            </div>
</template>

<script>

// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "TwoZuo",
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

<style scoped>
 .left{
    width:1rem;
    height:auto;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #ccc;
}
.left::-webkit-scrollbar{
    display: none;
}
 .left .zuo{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width:1rem;
    height:auto;
}
 .left .zuo li{
    font-size: 14px;
    width:.70rem;
    height:.30rem;
    line-height:.30rem;
    text-align: center;
    margin:.17rem 0 .26rem;
}
 .left .zuo li:nth-child(1){
    color:#fff;
    background: #fc2208;
    border-radius:.15rem;
}
</style>
