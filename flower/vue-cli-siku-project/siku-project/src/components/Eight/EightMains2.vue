<template>
<div>
        <div class="zhong">
                <a href="#">
                        <span>综合</span>
                        <i class="iconfont">&#xe504;</i>
                </a>
                <a href="#">
                        <span>劵后价</span>
                        <span @click="orderFn('price', false)" class="yellow">↑</span>
                        <span @click="orderFn('price', true)" class="yellow">↓</span>
                </a>
                <a href="#">
                        <span>销量</span>
                        <span @click="orderFn('sales', false)" class="yellow">↑</span>
                        <span @click="orderFn('sales', true)" class="yellow">↓</span>
                </a>
                <a href="#">
                        <i class="iconfont">&#xe608;</i>
                </a>
        </div>

        <div class="xia">
                <dl  v-for='(item, key) in list' >
                        <dt><img :src="item.img1"></dt>
                        <dd>
                                <p>{{item.name}}</p>
                                <p>￥{{item.price}}<span>原价{{item.yuanjia}}</span></p>
                                <p>已售{{item.sales}}万件</p>
                                <img :src="item.img2">
                        </dd>
                </dl>
        </div>
</div>
</template>

<script>
    export default {
        name: "EightMains2",
        data(){
        return {
                goodsList:[
                        {       img1:"../../../static/img/mu02.png",
                                name:"【caramella】新品秋冬宝宝中筒袜",
                                price:39.9,
                                yuanjia:67,
                                sales:2.6,
                                img2:"../../../static/img/juan1.png"
                        },
                        {       img1:"../../../static/img/mu01.png",
                                name:"【caramella】新品秋冬宝宝中筒袜",
                                price:59,
                                yuanjia:86,
                                sales:1.6,
                                img2:"../../../static/img/juan2.png"
                        },
                        {       img1:"../../../static/img/mu03.png",
                                name:"【caramella】新品秋冬宝宝中筒袜",
                                price:25,
                                yuanjia:57,
                                sales:0.5,
                                img2:"../../../static/img/juan1.png"
                        },
                        {       img1:"../../../static/img/mu04.png",
                                name:"【caramella】新品秋冬宝宝中筒袜",
                                price:35,
                                yuanjia:89,
                                sales:6,
                                img2:"../../../static/img/juan2.png"
                        },
                        {       img1:"../../../static/img/mu05.png",
                                name:"【caramella】新品秋冬宝宝中筒袜",
                                price:78,
                                yuanjia:99,
                                sales:2,
                                img2:"../../../static/img/juan1.png"
                        },
                        {       img1:"../../../static/img/mu06.png",
                                name:"【caramella】新品秋冬宝宝中筒袜",
                                price:69,
                                yuanjia:89,
                                sales:5,
                                img2:"../../../static/img/juan2.png"
                        },
                        {       img1:"../../../static/img/fen01.png",
                                name:"【caramella】新品秋冬宝宝中筒袜",
                                price:29,
                                yuanjia:59,
                                sales:1.5,
                                img2:"../../../static/img/juan1.png"
                        },
                        {       img1:"../../../static/img/fen02.png",
                                name:"【caramella】新品秋冬宝宝中筒袜",
                                price:39,
                                yuanjia:89,
                                sales:2.2,
                                img2:"../../../static/img/juan2.png"
                        },
                ],
                searchVal:'', //默认输入为空
                letter:'', //默认不排序
                original:false //默认从小到大排列
        }
    },
                methods:{
                        orderFn(letter,original){
                        this.letter = letter; //排序字段 price or sales
                        this.original = original; //排序方式 up or down
                        }
                },
                //通过计算属性过滤数据
                computed:{
                        list: function(){
                                var _this = this;
                                //逻辑-->根据input的value值筛选goodsList中的数据
                                var arrByZM = [];//声明一个空数组来存放数据
                                for (var i=0;i<this.goodsList.length;i++){
                                        //for循环数据中的每一项（根据name值）
                                        if(this.goodsList[i].name.search(this.searchVal) != -1){
                                                //判断输入框中的值是否可以匹配到数据，如果匹配成功
                                                arrByZM.push(this.goodsList[i]);
                                                //向空数组中添加数据
                                }
                        }
                        //逻辑-->升序降序排列 false: 默认从小到大 true：默认从大到小
                        //判断，如果要letter不为空，说明要进行排序
                        if(this.letter != ''){
                                arrByZM.sort(function( a , b){
                                if(_this.original){
                                        return b[_this.letter] - a[_this.letter];
                                }else{
                                        return a[_this.letter] - b[_this.letter];
                                }
                                });
                        }
                        //一定要记得返回筛选后的数据
                        return arrByZM;
                        }
                }
    };
</script>

<style>
 .zhong{
    height:.4rem;
    line-height:.4rem;
    width: 100%;
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    display: flex;
    justify-content: space-around;
}
 .zhong a span{
    font-size: 13px;
    color:#333;
}
 .zhong a i{
    font-size: 1px;
    color:#c9c9c9;
}
 .zhong a:nth-child(1) span,.zhong a:nth-child(1) i{
    color:#fc2208;
}
 .zhong a:nth-child(4) i{
    font-size: 20px;
    color:#444;
}
.zhong a .yellow{
        background: #fc2208;
        padding: 0 4px;
        color: #fff;
        cursor: pointer;
}

  .xia{
    height:auto;
    width: 100%;
}
 .xia dl{
    padding:.22rem .12rem 0;
    display: flex;
}
 .xia dl dt img{
    height:1.36rem;
    width: 1.36rem;
}
 .xia dl dd{
    padding-left: .1rem;
}
 .xia dl dd p:nth-of-type(1){
    color:#4b4b4b;
    font-weight: 500;
}
 .xia dl dd p:nth-of-type(2){
    font-size: 14px;
    color:#fc2208;
    font-weight: 800;
    margin-top: .17rem;
}
 .xia dl dd p:nth-of-type(2) span{
    font-size: 12px;
    color:#ccc;
    font-weight: 400;
    padding-left: .06rem; 
}
 .xia dl dd p:nth-of-type(3){
    font-size: 12px;
    color:#ccc;
    font-weight: 400;
    margin-top: .22rem;
}
 .xia dl dd img{
    height:.19rem;
    width: .5rem;
    margin-top: .07rem;
}

</style>
