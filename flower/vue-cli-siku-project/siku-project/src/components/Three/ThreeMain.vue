<template>
  <div class="main">
    <div class="main-nei">
        <three-mains1></three-mains1>
        <three-mains2></three-mains2>
        <three-mains3></three-mains3>
        <three-mains4></three-mains4>
    </div>
  </div>
</template>                     

<script>

    import ThreeMains1 from "./ThreeMains1";
    import ThreeMains2 from "./ThreeMains2";
    import ThreeMains3 from "./ThreeMains3";
    import ThreeMains4 from "./ThreeMains4";
    export default {
        name: "ThreeMain",
      components: {ThreeMains1, ThreeMains2, ThreeMains3,ThreeMains4}
    }
</script>

<style scoped>

.main{flex:1;display: flex;flex-direction: column;overflow: auto;}

</style>
