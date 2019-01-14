<template>
        <main id="main">
            <div class="da"  v-if="mainList" v-for="(i,index) in mainList" :key="index">
                    <div class="shang">
                            <h1><img :src="i.main2Img1"></h1>
                            <p>
                                <a>{{i.min2a1}}</a>
                                <a>{{i.min2a2}}</a>
                            </p>
                            <p><i class="iconfont">&#xeb61;</i>{{i.min2p1}}</p>
                    </div>
                    <div class="zhong">
                        <p>{{i.min2p2}}</p>
                        <p>{{i.min2p3}}</p>
                        <p>{{i.min2p4}}</p>
                        <p>{{i.min2p5}}</p>
                        <p>{{i.min2p6}}</p>
                        <p>{{i.min2p7}}</p>
                        <h1><img :src="i.main2Img2"></h1>
                    </div>
                    <div class="xia">
                        <p>{{i.min2p8}}</p>
                        <p><i class="iconfont">&#xe6d2;</i>{{i.min2p9}}</p>
                    </div>
            </div>

       </main>

</template>

<script>
// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "FourMain",
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
    fetch("../../../static/json/Four.json").then(res=>{
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
main{flex:1;overflow: auto;background: #f7f7f7;}

.da{
    padding:.12rem .15rem;
    margin-bottom: .1rem;
    background: #fff;
}

        /* shang */
.da .shang{
    display: flex;
    
}
.da .shang h1{
    width: .4rem;
    height:.4rem;
}
.da .shang h1 img{
    width: .4rem;
    height:.4rem;
}
.da .shang p:nth-of-type(1){
    display: flex;
    flex-direction: column;
    padding-left: .12rem;
}
.da .shang p:nth-of-type(1) a:nth-of-type(1){
    font-size: 12px;
    color:#000;
    font-weight: 500;
}
.da .shang p:nth-of-type(1) a:nth-of-type(2){
    font-size: 12px;
    color:#999;
    font-weight: 100;
}
.da .shang p:nth-of-type(2){
    font-size: 13px;
    color:#d0402d;
    text-align: center;
    width: .6rem;
    height: .25rem;
    line-height:.25rem;
    background: #ffede9;
    border-radius: 20%;
    margin-left: 1.3rem;
}

    /* zhong */
.da .zhong{
    margin-top: .12rem;
}
.da .zhong p{
    line-height: .2rem;
    font-size: 12px;
    color:#666;
    font-weight: 100;

}
.da .zhong img{
    width: 55%;
    margin-top: .15rem;

}

    /* xia */
.da .xia{
    background: #f7f7f7;
    height:.8rem;
    margin-top: .2rem;
    padding:.12rem;
}
.da .xia p:nth-of-type(1){
    font-size: 12px;
    color:#333;
    font-weight: 100;

}
.da .xia p:nth-of-type(2){
    font-size: 12px;
    color:#d49088;
    text-align: center;
    width: .8rem;
    height: .25rem;
    line-height:.25rem;
    background: #ffedeb;
    border-radius: 20%;
    margin-left: 2.4rem;
}

</style>
