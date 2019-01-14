<template>
                <div class="tool">
                        <h1>我的工具</h1>
                        <ul class="tools">
                                <li v-if="mainList" v-for="(i,index) in mainList" :key="index">
                                    <a href="#">
                                            <img :src="i.main5Img">
                                            <p>{{i.main5Cont}}</p>
                                    </a>
                                </li>
                         </ul>  
                    </div>

</template>

<script>
// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "FiveMains5",
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
    fetch("../../../static/json/Five.json").then(res=>{
        res.json().then(data=>{
            console.log(data.main5);
            this.mainList = data.main5
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
    height:2.4rem;
    margin:.1rem .15rem;
    border-radius:.15rem;
    background: #fff;
    
}
 .tool h1{
  font-size: 14px;
  color:#000;
  font-weight: 400;
  padding:.15rem 0 .05rem .2rem;
  border-bottom: 2px solid #eee;
}

 .tool .tools{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}
 .tool .tools li{
  width: 25%;
  height:50%;
  margin:.15rem 0;

}
 .tool .tools li a img{
  width: .25rem;
  height:.3rem;
  margin:.08rem auto;
  
}
 .tool .tools li a p{
  font-size: 12px;
  color:#6e6e6e;  
  font-weight: 400;
}

</style>
