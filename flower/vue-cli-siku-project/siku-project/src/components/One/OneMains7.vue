<template>
            <div class="tui">
                    <h1><img src="../../assets/img/tui.png"></h1>
                        <div class="box">
                                <div class="nei">
                                    <router-link to="/Six">
                                        <img src="../../assets/img/detail01.png">
                                        <p><i class="iconfont">&#xe65b;</i>&nbsp;home卫衣2018秋冬新款女加厚加绒韩版潮宽松中长款连帽cec外套</p>
                                        <img src="../../../static/img/juan1.png">
                                        <p>￥39<span>￥89</span><span>已售6.6万件</span></p>
                                    </router-link>
                                </div>
                                
                                <div class="nei"  v-if="mainList" v-for="(i,index) in mainList" :key="index">
                                        <img :src="i.main7Img1">
                                        <p><i class="iconfont">&#xe65b;</i>&nbsp;{{i.main7p1}}</p>
                                        <img :src="i.main7Img2">
                                        <p>{{i.main7p2}}<span>{{i.main7span1}}</span><span>{{i.main7span2}}</span></p>
                                </div>
                        </div>
            </div>
</template>

<script>
// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "OneMains7",
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
    fetch("../../../static/json/One.json").then(res=>{
        res.json().then(data=>{
            console.log(data.main7);
            this.mainList = data.main7
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
 .tui{
    height:auto;
    overflow: hidden;
    padding-left: .07rem;
}
.tui h1{
    height:.17rem;
    margin:.12rem 0;
}
 .tui h1 img{
    width: 1.18rem;
    height:.17rem;
    margin:0 auto;
}
 .tui .box{
    display:flex;
    flex-wrap: wrap;
}
 .tui .box .nei{
    width: 50%;
    height:auto;
    margin-bottom: .15rem;
}
 .tui .box .nei img:nth-of-type(1){
    width: 1.75rem;
    height:1.75rem;
}
 .tui .box .nei img:nth-of-type(2){
    width: .5rem;
    height:.2rem;
    margin:.14rem 0 0 .1rem;
}

 .tui .box .nei p:nth-of-type(1){
    font-size: 12px;
    margin:.14rem 0 0 .1rem;
}
 .tui .box .nei p:nth-of-type(1) i{
    color:#fe5e00;
}
 .tui .box .nei p:nth-of-type(2){
    color:#fc2208;
    font-size: 14px;
    margin:.14rem 0 0 .1rem;

}
 .tui .box .nei p:nth-of-type(2) span:nth-of-type(1){
    color:#ccc;
    font-size: 12px;
    text-decoration: line-through;
}
 .tui .box .nei p:nth-of-type(2) span:nth-of-type(2){
    color:#ccc;
    font-size: 10px;
    margin-left:.07rem;
}

</style>
