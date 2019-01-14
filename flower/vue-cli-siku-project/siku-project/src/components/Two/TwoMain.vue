<template>
<div class="main">
      <div class="left">
              <ul class="zuo">
                  <li class="li-tab" v-for="(item,index) in tabs"  @click="toggleTabs(index)" :class="{active:index!=nowIndex}">{{item}}</li>
              </ul>
      </div>
      <div class="right">
              <div class="divTab" v-show="nowIndex===0">
                          <h1>母婴</h1>
                          <div class="xia">
                                  <dl>
                                      <dt><img src="../../assets/img/fen01.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen02.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen03.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen04.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen05.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen06.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen07.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen08.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen09.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen10.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen01.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen02.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen03.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen04.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen05.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen06.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                          </div>
              </div> 
              <div class="divTab" v-show="nowIndex===1">
                          <h1>食品</h1>
                          <div class="xia">
                                  <dl>
                                      <dt><img src="../../../static/img/shi1.png"></dt>
                                      <dd>谷物冲饮</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../../static/img/shi2.png"></dt>
                                      <dd>休闲零食</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../../static/img/shi3.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../../static/img/shi4.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../../static/img/shi5.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../../static/img/shi6.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../../static/img/shi7.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../../static/img/shi8.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../../static/img/shi9.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../../static/img/shi10.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                          </div>
              </div>        
              <div class="divTab" v-show="nowIndex===2">
                          <h1>女装</h1>
                          <div class="xia">
                                  <dl>
                                      <dt><img src="../../assets/img/she02.png"></dt>
                                      <dd>精品女装</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/qu03.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/detail01.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/detail02.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/detail03.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/detail04.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                      </div>            
              </div> 
              <div class="divTab" v-show="nowIndex===3">
                          <h1>女鞋</h1>
                          <div class="xia">
                                  <dl>
                                      <dt><img src="../../assets/img/she01.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/tui2.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                                  <dl>
                                      <dt><img src="../../assets/img/fen10.png"></dt>
                                      <dd>母婴用品</dd>
                                  </dl>
                      </div>            
              </div> 
      </div>
</div>
      

</template>                     

<script>


 export default {
        name: "Two",
        data(){
        return {
              tabs:['母婴','食品','女装','女鞋','彩妆','洗护','运动','箱包','护肤','男装','男鞋','女鞋'],//（这个也可以用对象key，value来实现）
              nowIndex:0,//默认第一个tab为激活状态
       }
    },
        methods:{
            toggleTabs:function(index){
                this.nowIndex=index;
            },
        }

}

 </script>

<style scoped>

 .main{flex:1;display: flex; }
 .left{
    width:1rem;
    height:auto;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #ccc;
}
.left::-webkit-scrollbar{
    display: none;
}
 .left .zuo{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width:1rem;
    height:auto;
}
 .left .zuo li{
    font-size: 14px;
    width:.70rem;
    height:.30rem;
    line-height:.30rem;
    text-align: center;
    margin:.17rem 0 .26rem;
    background: #ccc;
}
  .active{
    border-radius:.15rem;
    color:#fff;
}

 .right{
    flex:1;
    height:auto;
    overflow-x: hidden;
    overflow-y: auto;
}
 .right::-webkit-scrollbar{
    display: none;
}

 .right h1{
    font-size: 14px;
    font-weight: 400;
    margin:.25rem 0 .45rem .14rem;
}
 .right .xia{
    display: flex;
    flex-wrap: wrap;
}
 .right .xia dl{
    padding:0 .13rem;
}
 .right .xia dt{
    width: .48rem;
    height:.48rem;
    margin:0 auto;
}
 .right .xia dt img{
    width: .48rem;
    height:.48rem;
}

 .right .xia dd{
    font-size: 11px;
    color:#555;
    text-align:center;
    margin-top: .07rem;
    margin-bottom: .25rem;
}

</style>
