<template>
  <div class="main">
    <two-zuo></two-zuo>
    <two-you></two-you>
  </div>
</template>                     

<script>

    import TwoZuo from "./TwoZuo";
    import TwoYou from "./TwoYou";
    export default {
        name: "TwoMain",
      components: {TwoZuo, TwoYou}
    }
</script>

<style scoped>
.main{flex:1;display: flex; }
</style>
