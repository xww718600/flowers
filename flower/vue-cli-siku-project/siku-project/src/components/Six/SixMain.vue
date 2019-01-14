<template>
  <div class="main">
    <six-mains1></six-mains1>
    <six-mains2></six-mains2>
    <six-mains3></six-mains3>
    <six-mains4></six-mains4>
  </div>
</template>                     

<script>

    import SixMains1 from "./SixMains1";
    import SixMains2 from "./SixMains2";
    import SixMains3 from "./SixMains3";
    import SixMains4 from "./SixMains4";
    export default {
        name: "SixMain",
      components: {SixMains1, SixMains2, SixMains3,SixMains4}
    }
</script>

<style>
.main{flex:1;display: flex;flex-direction: column;background: #f7f7f7;overflow: auto;}
.main::-webkit-scrollbar{
  display: none;
}

</style>
