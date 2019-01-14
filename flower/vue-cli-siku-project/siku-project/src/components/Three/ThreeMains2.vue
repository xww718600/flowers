<template>
            <ul class="tool">
                            <li v-if="mainList" v-for="(i,index) in mainList" :key="index">
                                <a href="#">
                                        <img :src="i.main1Img">
                                        <p>{{i.main1Cont}}</p>
                                </a>
                            </li>
            </ul>  

</template>

<script>
// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "ThreeMains2",
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
    fetch("../../../static/json/Three.json").then(res=>{
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
 .tool{
    width:100%;
    height:2.13rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
}
 .tool li{
    width:20%;
    height:50%;
    padding-top: .25rem;
}
 .tool li a img{
    width:.49rem;
    height:.49rem;
    margin: 0 auto;
}
 .tool li a p{
    font-size: 12px;
    color:#333;
    margin-top:.14rem;
}

</style>
