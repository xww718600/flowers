<template>
        <nav>
            <ul class="navs">
                    <li>
                            <a href="#">精选</a>
                    </li>
                    <li>
                            <router-link to="/Eight"><a href="#">母婴</a></router-link>
                    </li>
                    <li>
                            <a href="#">食品</a>
                    </li>
                    <li>
                            <a href="#">彩妆</a>
                    </li>
                    <li>
                            <a href="#">女装</a>
                    </li>
                    <li>
                            <a href="#">洗护</a>
                    </li>
                    <li id="show">
                            <i class="iconfont"  v-on:click="showorhide()">&#xe608;</i>
                            <div class="toggle"   v-show="isshow">
                                    <h1>更多频道</h1>
                                    <div class="toggle-xia">
                                            <dl>
                                                    <dt><img src="../../assets/img/fen06.png"></dt>
                                                    <dd>婴儿出行</dd>
                                            </dl>
                                            <dl>
                                                    <dt><img src="../../assets/img/fen02.png"></dt>
                                                    <dd>儿童玩具</dd>
                                            </dl>
                                            <dl>
                                                    <dt><img src="../../assets/img/fen08.png"></dt>
                                                    <dd>家具用品</dd>
                                            </dl>
                                            <dl>
                                                    <dt><img src="../../assets/img/fen01.png"></dt>
                                                    <dd>婴儿衣服</dd>
                                            </dl>
                                            <dl>
                                                    <dt><img src="../../assets/img/fen04.png"></dt>
                                                    <dd>婴儿出行</dd>
                                            </dl>
                                            <dl>
                                                    <dt><img src="../../assets/img/fen06.png"></dt>
                                                    <dd>婴儿出行</dd>
                                            </dl>
                                            <dl>
                                                    <dt><img src="../../assets/img/fen02.png"></dt>
                                                    <dd>儿童玩具</dd>
                                            </dl>
                                            <dl>
                                                    <dt><img src="../../assets/img/fen08.png"></dt>
                                                    <dd>家具用品</dd>
                                            </dl>
                                            <dl>
                                                    <dt><img src="../../assets/img/fen01.png"></dt>
                                                    <dd>婴儿衣服</dd>
                                            </dl>
                                            <dl>
                                                    <dt><img src="../../assets/img/fen04.png"></dt>
                                                    <dd>婴儿出行</dd>
                                            </dl>

                                    </div>
                            </div>
                    </li>
            </ul>
        </nav>


</template>

<script>
     export default {
        name: "OneNav",
        data(){
                return{
                        isshow: false
                }
            
        },
        methods: {
            showorhide:function() {
                this.isshow = !this.isshow;
            }
        }
    }
</script>

<style scoped>
nav{ height:.39rem;}
nav .navs{height:100%; display:flex;}
nav .navs li{ flex:1; text-align:center;}
nav .navs li a,nav .navs li i{height:.39rem; line-height:.39rem; font-size:13px;color:#151515;display: block;}
nav .navs li i{color:#fd1705;border-left: 1px solid #f4f4f4; display: inline;padding-left: .12rem;}
nav .navs li:nth-child(1) a{color:#fd1705;border-bottom: 3px solid #ff290f;}
nav .navs{position: relative;}
nav .navs .toggle{
        width: 100%;
        height:auto;
        background: #fff;
        position: absolute;
        left: 0;
        z-index: 5;
        padding:.15rem;
}
nav .toggle h1{
        text-align: left;
        font-size: 13px;
        font-weight: 500;
        color:#333;
        margin-bottom: .15rem;
        margin-left: .15rem;
        }
nav .toggle .toggle-xia{
        display: flex;
        flex-wrap: wrap;
        }
nav .toggle .toggle-xia dl{
        width: 25%;
        height: auto;
        margin-top: .1rem;
}
      
nav .toggle .toggle-xia img{
        width: .48rem;
        height: .48rem;
        margin:0 auto;
}
nav .toggle  .toggle-xia dd{
        font-size: 12px;
        font-weight: 300;
        color:#666;
        margin:.1rem 0;
        }

</style>
