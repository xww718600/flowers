<template>
    	<header>
            <ul class="navs">
                <li>
                        <a href="#">每日爆款</a>
                </li>
                <li>
                        <a href="#">趣分享</a>
                </li>
                <li>
                        <a href="#">宣传素材</a>
                </li>
                <li>
                        <a href="#">花粉学堂</a>
                </li>
        </ul>
</header>
</template>

<script>
    export default {
        name: "FourFooter"
    }
</script>

<style>
header{ height:.49rem; background:#fff;}
header .navs{height:100%; display:flex;}
header .navs li{ flex:1; text-align:center;}
header .navs li a{height:.49rem; line-height:.49rem; font-size:13px;color:#151515;display: block;}
header .navs li:nth-child(1) a{color:#fd1705;border-bottom: 3px solid #ff290f;}

</style>
