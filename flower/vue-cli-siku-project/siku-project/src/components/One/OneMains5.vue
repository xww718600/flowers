<template>
            <div class="qiang" >
                    <div class="gou"  v-if="mainList" v-for="(i,index) in mainList" :key="index">
                            <ul class="zuo">
                                    <li>{{i.min5p1}}</li>
                                    <li>{{i.min5p2}}</li>
                                    <li>{{i.min5p3}}</li>
                            </ul>
                            <div class="you">
                                    <img :src="i.main5Img1">
                            </div>
                    </div>
           </div>

</template>

<script>
// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "OneMains5",
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
 .qiang{
    width:100%;
    height:1.17rem;
    display:flex;
    padding:0 .14rem .15rem .09rem;
}
.qiang .gou{
    flex:1;
    display:flex;
}

.qiang .gou:nth-child(1){
    border-right:1px solid #ccc;
}
 .qiang .gou li:nth-child(1){
    font-size: 14px;
    color:#797979;
    margin-left: .06rem;
    margin-top: .08rem;
}
.qiang .gou li:nth-child(2){
    font-size: 12px;
    color:#eee;
    background: #fc2208;
    border-radius: .1rem;
    display:block;
    padding:.02rem .05rem;
    margin-left: .04rem;
    margin-top: .05rem;

}

.qiang .gou li:nth-child(3){
    font-size: 12px;
    color:#797979;
    display:inline-block;
    border:1px solid #ccc;
    border-radius: .1rem;
    padding:.015rem .07rem;
    margin-left: .06rem;
    margin-top: .2rem;

}
 .qiang .gou .you img{
    width: .8rem;
    height:.78rem;
    margin-top: .15rem;
}

</style>
