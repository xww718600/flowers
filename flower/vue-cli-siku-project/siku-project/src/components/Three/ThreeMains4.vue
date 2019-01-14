<template>
            <div class="near">
                    <dl  v-if="mainList" v-for="(i,index) in mainList" :key="index">
                            <dt><img  :src="i.main2Img1"></dt>
                            <dd>
                                    <p>{{i.min2p1}}</p>
                                    <p>{{i.min2p2}}&nbsp;&nbsp;|&nbsp;&nbsp;{{i.min2p3}}</p>
                                    <p>{{i.min2p4}}</p>
                            </dd>
                            <dd>
                                    <p>{{i.min2p5}}</p>
                                    <p>返<span>{{i.min2span}}</span>%</p>
                            </dd>
                    </dl>
            </div>

</template>

<script>
// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "ThreeMains4",
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
 .near  {
    width:100%;
    height:auto;
} 
 .near dl{
    display: flex;
    justify-content: space-between;
    padding:.15rem .12rem;
    border-bottom: 2px solid #eee;
}
 .near dl dt{
    padding-right: .1rem;
}
 .near dl dt img{
    width:1.36rem;
    height:1.36rem;
    
}
 .near dl dd:nth-of-type(1) p:nth-of-type(1){
    font-size: 16px;
    font-weight: 500;
    color:#000;   
}
 .near dl dd:nth-of-type(1) p:nth-of-type(2){
    font-size: 12px;
    font-weight: 100;
    color:#444; 
    line-height: .4rem;   
}
 .near dl dd:nth-of-type(1) p:nth-of-type(3){
    font-size: 12px;
    font-weight: 100;
    color:#777; 
    line-height: .25rem;   
}
 .near dl dd:nth-of-type(2) p:nth-of-type(1){
    font-size: 12px;
    font-weight: 300;
    color:#444; 
    line-height: .2rem;   
}
 .near dl dd:nth-of-type(2) p:nth-of-type(2){
    font-size: 12px;
    font-weight: 100;
    color:rgb(207, 40, 40); 
    line-height: 1.1rem;   
    text-align: center;
}

 .near dl dd:nth-of-type(2) p:nth-of-type(2) span{
    font-size: 20px;
    padding-left: .05rem;
}


</style>
