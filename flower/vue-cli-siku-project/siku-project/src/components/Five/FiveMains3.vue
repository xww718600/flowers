<template>
                <ul class="menu">
                        <li v-if="mainList" v-for="(i,index) in mainList" :key="index">
                            <a href="#">
                                    <img :src="i.main1Img">
                                    <span>{{i.main1Cont}}</span>
                            </a>
                        </li>
                </ul>  

</template>

<script>
// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "FiveMains3",
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
 .menu{
  height:.95rem;
  margin:0 .15rem;
  border-radius:.15rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
 .menu li a{
  display: block;

} 
 .menu li a img{
  width: .27rem;
  height:.27rem;
  margin-bottom: .08rem;

}
 .menu li a span{
  font-size: 12px;
  color:#767676;
}

</style>
