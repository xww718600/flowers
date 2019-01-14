<template>
        	<ul class="menu">
                    <li>
                        <a href="#">
                            <span></span>
                            <span>9.9包邮</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span></span>
                            <span>海抢购</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span></span>
                            <span>免单福利</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span></span>
                            <span>聚划算</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span></span>
                            <span>今日推荐</span>
                        </a>
                    </li>
            </ul>


</template>

<script>
    export default {
        name: "OneMains2"
    }
</script>

<style scoped>
.menu{
    height:.9rem; 
    display: flex;
}
.menu li{
    height:100%;
    width: 20%;
}
.menu li a{ 
    height:100%; 
    display:flex; 
    flex-direction:column; 
    align-items:center;
}
.menu li a span:nth-child(1){width:.44rem; height:.44rem;margin-top: .12rem;}
.menu li a span:nth-child(2){ height:.34rem; line-height:.34rem;font-size: 12px;color:#3f3f3f; }
.menu li:nth-child(1) a span:nth-child(1){ background:url(../../assets/img/logo.png) no-repeat 0 0; background-size:cover;}
.menu li:nth-child(2) a span:nth-child(1){ background:url(../../assets/img/logo.png) no-repeat -.77rem 0; background-size:cover;}
.menu li:nth-child(3) a span:nth-child(1){ background:url(../../assets/img/logo.png) no-repeat -1.54rem 0; background-size:cover;}
.menu li:nth-child(4) a span:nth-child(1){ background:url(../../assets/img/logo.png) no-repeat -2.3rem 0; background-size:cover;}
.menu li:nth-child(5) a span:nth-child(1){ background:url(../../assets/img/logo.png) no-repeat -3.07rem 0; background-size:cover;}


</style>
