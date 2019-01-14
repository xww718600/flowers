<template>
            <div class="like">
                <h1><img src="../../assets/img/like.png"></h1>
                <div class="likes">
                        <dl  v-if="mainList" v-for="(i,index) in mainList" :key="index">
                            <dt><img :src="i.main2Img1"></dt>
                            <dd>
                                <p>{{i.min2p1}}</p>
                                <p>{{i.min2p2}}<span>{{i.min2span}}</span></p>
                                <p>{{i.min2p3}}</p>
                                <p><img :src="i.main2Img2"></p>
                            </dd>
                        </dl>
<!--                         <dl>
                                <dt><img src="../../assets/img/like2.png"></dt>
                                <dd>
                                    <p>韩国ins女珍珠发卡bb夹发卡头饰韩版潮</p>
                                    <p>￥5.5<span>原价7.5</span></p>
                                    <p>已售27万</p>
                                    <p><img src="../../assets/img/juan2.png"></p>
                                </dd>
                            </dl>
                        <dl>
                            <dt><img src="../../assets/img/tui1.png"></dt>
                            <dd>
                                <p>韩国ins女珍珠发卡bb夹发卡头饰韩版潮</p>
                                <p>￥5.5<span>原价7.5</span></p>
                                <p>已售27万</p>
                                <p><img src="../../assets/img/juan1.png"></p>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src="../../assets/img/tui2.png"></dt>
                            <dd>
                                <p>韩国ins女珍珠发卡bb夹发卡头饰韩版潮</p>
                                <p>￥5.5<span>原价7.5</span></p>
                                <p>已售27万</p>
                                <p><img src="../../assets/img/juan2.png"></p>
                            </dd>
                        </dl>    
 -->                </div>
            </div>
</template>

<script>
// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "SixMains4",
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

<style>
 .like{
    width: 100%;
    height:auto;
    background: #fff;
}
 .like .likes{
    padding:0 .1rem;
}
 .like h1{
    width: 100%;
    height:auto;
    margin:0 auto;
}
 .like h1 img{
    width: 2.05rem;
    height:.35rem;
    margin:0 auto;
    margin-bottom: .1rem;
}
 .like dl{
    display: flex;
    justify-content: space-around;
    margin-bottom: .25rem;
}
 .like dl dt{
    width: 1.36rem;
    height:1.36rem;
    margin-right: .15rem;
}
 .like dl dt img{
    width: 1.36rem;
    height:1.36rem;
}
 .like dl dd p:nth-of-type(1){
    font-size: 14px;
    color:#000;

}
 .like dl dd p:nth-of-type(2){
    font-size: 14px;
    font-weight: 600;
    color:#fd4948;
    height:.5rem;
    line-height:.5rem;
    
}
 .like dl dd p:nth-of-type(2) span{
    font-size: 12px;
    font-weight: 200;
    color:#ccc;
}
 .like dl dd p:nth-of-type(3){
    font-size: 12px;
    font-weight: 200;
    color:#ccc;
}
 .like dl dd p:nth-of-type(4) img{
    width: .5rem;
    height:.2rem;
    margin-top: .08rem;
}

</style>
