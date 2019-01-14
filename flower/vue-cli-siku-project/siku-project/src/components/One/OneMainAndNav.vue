<template>
<div class="one-navmain">
    <one-nav></one-nav>
    <one-main></one-main>
</div>
</template>

<script>
    import OneNav from "./OneNav";
    import OneMain from "./OneMain";
    export default {
        name: "OneMainAndNav",
            components:{OneMain, OneNav}

    };

</script>

<style scoped>
.one-navmain{
    flex:1;
    overflow:auto
}
</style>