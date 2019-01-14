<template>
  <div class="main">
    <seven-mains1></seven-mains1>
    <seven-mains2></seven-mains2>
  </div>
</template>                     

<script>

    import SevenMains1 from "./SevenMains1";
    import SevenMains2 from "./SevenMains2";
    export default {
        name: "SevenMain",
      components: {SevenMains1, SevenMains2}
    }
</script>

<style>
.main{flex:1; overflow:auto;background: #f7f7f7;}
.main::-webkit-scrollbar{
    display: none;
}

</style>
