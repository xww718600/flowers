<template>
  <div class="main">
    <eight-mains1></eight-mains1>
    <eight-mains2></eight-mains2>
  </div>
</template>                     

<script>

    import EightMains1 from "./EightMains1";
    import EightMains2 from "./EightMains2";
    export default {
        name: "EightMain",
      components: {EightMains1, EightMains2}
    }
</script>

<style>
.main{flex:1; overflow:auto}


</style>
