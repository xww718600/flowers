<template>
  <div class="main">
    <five-mains1></five-mains1>
    <five-mains2></five-mains2>
    <five-mains3></five-mains3>
    <five-mains4></five-mains4>
    <five-mains5></five-mains5>
    <five-mains6></five-mains6>
  </div>
</template>                     

<script>

    import FiveMains1 from "./FiveMains1";
    import FiveMains2 from "./FiveMains2";
    import FiveMains3 from "./FiveMains3";
    import FiveMains4 from "./FiveMains4";
    import FiveMains5 from "./FiveMains5";
    import FiveMains6 from "./FiveMains6";
    export default {
        name: "FiveMain",
      components: {FiveMains1, FiveMains2, FiveMains3,FiveMains4,FiveMains5,FiveMains6}
    }
</script>

<style scoped>
.main{flex:1; overflow:auto;background: #f6f6f6;}
.main::-webkit-scrollbar{
  display: none;
}

</style>
