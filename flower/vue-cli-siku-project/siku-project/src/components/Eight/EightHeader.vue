<template>
    	<header>
                <ul class="head">
                    <li class="one"><i class="iconfont">&#xe630;</i></li>
                    <li>
                        <i class="iconfont">&#xe632;</i>
                        <input type="text" placeholder="搜一搜宝贝"  />
                    </li>
                    <li class="one"><i class="iconfont">&#xe607;</i></li>
                </ul>

            <ul class="navs">
                    <li>
                            <router-link to="/"><a href="#">精选</a></router-link>
                    </li>
                    <li>
                            <a href="#">母婴</a>
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
                    <li>
                            <i class="iconfont">&#xe608;</i>
                    </li>
            </ul>
        </header>
</template>

<script>
    export default {
        name: "EightHeader"
    }
</script>

<style>
header{ height:.88rem; background:#fff;}
header .head{ display:flex; height:.49rem; padding:0 .2rem; justify-content:space-between;}
header .head li:nth-child(1){ width:.16rem; font-size:20px; color:#000; line-height:.49rem;}
header .head li:nth-child(2){ 
        width:2.64rem;
        height:.34rem;        
        display: flex;    
        color:#aaa;
        background:#f4f4f4 ;
        border-radius:.04rem;
        margin-top: .07rem;
        padding-left: .09rem;
}
header .head li:nth-child(2) i{ 
        color:#aaa;
        text-align: center;
        height:.34rem;        
        line-height:.34rem;        

}
header .head li:nth-child(2) input{
    width:95%;
    height:.34rem;
    font-size:12px;
    text-indent: .1rem;
    border:0; 
    background:#f4f4f4 ;

    }
header .head li:nth-child(3){ width:.16rem; font-size:24px; color:#000; line-height:.49rem;}


    header .navs{height:.39rem; display:flex;}
    header .navs li{ flex:1; text-align:center;}
    header .navs li a,.navs li i{height:.39rem; line-height:.39rem; font-size:13px;color:#151515;display: block;}
    header .navs li i{color:#fd1705;border-left: 1px solid #f4f4f4; display: inline;padding-left: .12rem;}
    header .navs li:nth-child(2) a{color:#fd1705;border-bottom: 3px solid #ff290f;}

</style>
