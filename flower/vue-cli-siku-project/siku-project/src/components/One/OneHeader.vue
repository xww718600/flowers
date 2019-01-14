<template>
    	<header>
                <ul class="head">
                    <li class="one"><i class="iconfont">&#xe630;</i></li>
                    <li>
                            <i class="iconfont">&#xe632;</i>
                            <input type="text" placeholder="搜一搜宝贝"  />                   
                    </li>
                    <li class="one"><router-link to="/Five"><i class="iconfont">&#xe607;</i></router-link></li>
                </ul>
        </header>
</template>

<script>
    export default {
        name: 'OneHeader',
    };


</script>

<style scoped>
header{ height:.49rem; background:#fff;}
header .head{ display:flex; height:100%; padding:0 .2rem; justify-content:space-between;}
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
</style>
