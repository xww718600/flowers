<template>
            <div class="xinxi">
                    <ul v-if="mainList" v-for="(i,index) in mainList" :key="index">
                            <li>{{i.main1Cont1}}<span>{{i.main1Cont3}}</span></li>
                            <li>{{i.main1Cont2}}<i class="iconfont">&#xe62e;</i></li>
                    </ul>
            </div>
</template>

<script>
// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "SevenMains2",
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
    fetch("../../../static/json/Seven.json").then(res=>{
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
 .xinxi{
    height:auto;
    width: 100%;
}
 .xinxi ul{
    height:.49rem;
    line-height:.49rem;
    padding:0 .22rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
}
 .xinxi ul:nth-of-type(1){
    border-top: 2px solid #ededed;
    border-bottom: 2px solid #ededed;
}
 .xinxi ul li:nth-of-type(1){
    font-size: 14px;
    color:#6b6b6b;
}
 .xinxi ul li:nth-of-type(2){
    font-size: 14px;
    color:#a9a9a9;
}
 .xinxi ul li:nth-of-type(2) i{
    font-size: 12px;
    color:#a9a9a9;
    margin-left: .1rem;
}
 .xinxi ul:nth-of-type(2),.xinxi ul:nth-of-type(4),.xinxi ul:nth-of-type(6),.xinxi ul:nth-of-type(8){
    margin-bottom: .1rem;
}
 .xinxi ul:nth-of-type(8) li span{
    font-size: 13px;
    color:#a9a9a9;
    margin-left: .2rem;
}
 .xinxi ul:nth-of-type(8) li:nth-of-type(2){
    font-size: 13px;
    color:#e15d48;

}


</style>
