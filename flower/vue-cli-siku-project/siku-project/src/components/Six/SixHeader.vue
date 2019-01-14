<template>
    	<header>
                <router-link to="/"><h1><i class="iconfont">&#xe524;</i></h1></router-link>
        </header>
</template>

<script>
    export default {
        name: "SixHeader"
    }
</script>

<style>
header{
    height:.5rem;
}
header h1{
    height:.5rem;
    width: 100%;
}
header i{
    font-size: 28px;
    font-weight: 200;
    color:#999;
    height:.5rem;
    line-height:.45rem;
    padding-left: .1rem;
}

</style>
