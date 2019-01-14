<template>
    	<header>
                <ul class="head">
                        <li><img src="../../assets/img/touxiang.png"></li>
                        <li>
                                <p>木有昵称<span><img src="../../assets/img/yuan.png"></span></p>
                                <p>邀请码：IR8KJ3O<span>复制</span></p>
                        </li>
                        <li>    
                                <i class="iconfont">&#xe607;</i>
                                <i id="ii" class="iconfont"><router-link to="/Seven" tag ="i">&#xe508;</router-link></i>
                        </li>
                </ul>
                <p class="di">粉丝0<span>成长值0</span></p>
        </header>

</template>

<script>
    export default {
        name: "FiveHeader",

    }
</script>

<style scoped>
header{ height:1.3rem; background-image:linear-gradient(to right,#fb5154,#e03030);}
header .head{ 
    display:flex; 
    height:.9rem; 
}
header .head li:nth-child(1){
    width: .73rem;
    height:.73rem;
    margin-top: .16rem;
    margin-left: .18rem;
  }
header .head li:nth-child(1) img{
    width: .73rem;
    height:.73rem;
    border-radius: 50%;
  }
header .head li:nth-child(2) p:nth-child(1){
    font-size: 14px;
    color:#ffd8dc;
    font-weight: 200;
    margin-top: .25rem;
    margin-left: .1rem;
  }
 header .head li:nth-child(2) p:nth-child(1) span img{
    width: .65rem;
    height:.17rem;
    display: inline-block;
    margin-left: .05rem;
  }
 header .head li:nth-child(2) p:nth-child(2){
    font-size: 12px;
    color:#ffccbe;
    font-weight: 600;
    margin-top: .15rem;
    margin-left: .05rem;
  }
header .head li:nth-child(2) p:nth-child(2) span{
    font-size: 12px;
    color:#ffafa6;
    font-weight: 200;
    background: #e96464;
    padding:.03rem .05rem;
    border-radius: 50%;
    margin-left: .1rem;
  }
header .head li:nth-child(3){
    font-size: 25px;
    color:#ffddd8;
    margin-top: .17rem;
    margin-left: .2rem;
  }
header .head li:nth-child(3) i:nth-child(1){
    font-size: 26px;
    color:#fff;
  }

header .head li:nth-child(3) i:nth-child(2){
    margin-left: .05rem;
    font-size: 25px;
    color:#fff;
  }
header .di{
    font-size: 12px;
    color:#ff9291;
    margin-top: .1rem;
    margin-left: .31rem;
}
header .di span{
    margin-left: .2rem;
}

</style>
