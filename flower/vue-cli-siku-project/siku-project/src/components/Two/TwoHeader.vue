<template>
    	<header>
                <ul class="head">
                    <li>
                        <i class="iconfont">&#xe632;</i>
                        <input type="text" placeholder="搜一搜宝贝"  />
                    </li>
                </ul>
        </header>
</template>

<script>

    export default {
        name: "TwoHeader",

   }

</script>

<style scoped>

header{ height:.49rem; background:#fff;}
header .head{ display:flex; height:100%;justify-content:center;border-bottom: 1px solid #ccc;}
header .head li{ 
        width:2.64rem;
        height:.34rem;        
        display: flex;    
        color:#aaa;
        background:#f4f4f4 ;
        border-radius:.04rem;
        margin-top: .07rem;
        padding-left: .09rem;
}
header .head  i{ 
        color:#aaa;
        text-align: center;
        height:.34rem;        
        line-height:.34rem;        

}
header .head li input{
    width:95%;
    height:.34rem;
    font-size:12px;
    text-indent: .1rem;
    border:0; 
    background:#f4f4f4 ;

    }
</style>
