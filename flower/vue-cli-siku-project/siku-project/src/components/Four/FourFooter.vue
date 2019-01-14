<template>
        <footer>
                <ul class="foot">
                        <li>
                            <router-link to="/"><a href="#">
                                <i class="iconfont">&#xe502;</i>
                                <span>首页</span>
                            </a></router-link>
                        </li>
                        <li>
                            <router-link to="/Two"><a href="#">
                                <i class="iconfont">&#xe505;</i>
                                <span>分类</span>
                            </a></router-link>
                        </li>
                        <li>
                            <router-link to="/Three"><a href="#">
                                    <img src="../../assets/img/footer.png">
                                    <span></span>
                            </a></router-link>
                        </li>
                        <li>
                            <router-link to="/Four"><a href="#">
                                <i class="iconfont">&#xe508;</i>
                                <span>花粉社区</span>
                            </a></router-link>
                        </li>
                        <li>
                            <router-link to="/Five"><a href="#">
                                <i class="iconfont">&#xe617;</i>
                                <span>我的</span>
                            </a></router-link>
                        </li>
                </ul>        
        </footer>


</template>

<script>
    export default {
        name: "FourFooter"
    }
</script>

<style>
footer{height:.55rem;}
footer .foot{height:100%;display:flex;}
footer .foot li{flex:1;text-align: center;}
footer .foot li:nth-child(4) a{color:#fc2208}
footer .foot li a{ display:block;}
footer .foot li a img{
  display: block;
  margin:.05rem auto 0;
  width: .48rem;
  height:.42rem;
  }
footer .foot li a i{display:block;font-size: 20px;height:.31rem;line-height:.31rem;}
footer .foot li a span{ display:block; font-size:13px;}

</style>
