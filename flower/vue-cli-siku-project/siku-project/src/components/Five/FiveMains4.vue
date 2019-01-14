<template>
                <div class="zhuan">
                    <h1>会员专享</h1>
                    <ul class="xiang">
                            <li v-if="mainList" v-for="(i,index) in mainList" :key="index">
                                <a href="#">
                                        <img :src="i.main2Img">
                                        <p>{{i.main2Cont1}}</p>
                                        <p>{{i.main2Cont2}}</p>
                                </a>
                            </li>
                    </ul>  
                    </div>

</template>

<script>
// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "FiveMains4",
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
 .zhuan{
    height:1.49rem;
    margin:.1rem .15rem;
    border-radius:.15rem;
    background: #fff;
    
}
 .zhuan h1{
  font-size: 14px;
  color:#000;
  font-weight: 400;
  padding:.15rem 0 .05rem .2rem;
  border-bottom: 2px solid #eee;
}

 .zhuan .xiang{
  height:1.05rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
 .zhuan .xiang li a img{
  width: .39rem;
  height:.39rem;
  margin:.08rem auto;
  
}
 .zhuan .xiang li a p:nth-of-type(1){
  font-size: 14px;
  color:#333;  
  font-weight: 600;
}
 .zhuan .xiang li a p:nth-of-type(2){
  font-size: 12px;
  color:#c1c1c1;
  margin-bottom: .15rem;  
}

</style>
