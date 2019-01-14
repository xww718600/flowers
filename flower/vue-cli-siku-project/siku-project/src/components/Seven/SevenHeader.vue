<template>
    	<header>
                <router-link to="/Five"><i class="iconfont">&#xe524;</i></router-link>
                <span>设置</span>
        </header>
</template>

<script>
    export default {
        name: "SevenHeader"
    }
</script>

<style>
header{
    width: 100%;
    height:.47rem;
    line-height:.47rem;
}
header i{
    font-size: 18px;
    margin-left:.18rem;
}
header span{
    font-size: 17px;
    margin-left:.07rem;
}

</style>
