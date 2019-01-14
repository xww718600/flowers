<template>
        <footer>
                    <h1><i class="iconfont">&#xeb61;</i>分享</h1>
                    <h2><i class="iconfont">&#xe69e;</i>领劵￥20</h2>
        </footer>
</template>

<script>
    export default {
        name: "SixFooter"
    }
</script>

<style>
footer{
    height:.51rem; 
    line-height:.51rem; 
    display: flex;
    text-align: center;
}
footer h1{
    width:28%;
    height:100%;
    font-size: 15px;
    font-weight: 100;
    color:#fff;
    background-image:linear-gradient(to right,#fcb53f,#fc9718)
}
footer h1 i{
    font-size: 17px;
    padding-right: .1rem;
}

footer h2{
    width:72%;
    height:100%;
    font-size: 15px;
    font-weight: 100;
    color:#fff;
    background-image:linear-gradient(to right,#fb5154,#e03030)
}
footer h2 i{
    font-size: 18px;
    padding-right: .1rem;
}

</style>
