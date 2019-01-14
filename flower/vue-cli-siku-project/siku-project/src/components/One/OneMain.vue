<template>
  <div class="main">
    <one-mains1></one-mains1>
    <one-mains2></one-mains2>
    <one-mains3></one-mains3>
    <one-mains4></one-mains4>
    <one-mains5></one-mains5>
    <one-mains6></one-mains6>
    <one-mains7></one-mains7>
  </div>
</template>                     

<script>

    import OneMains1 from "./OneMains1";
    import OneMains2 from "./OneMains2";
    import OneMains3 from "./OneMains3";
    import OneMains4 from "./OneMains4";
    import OneMains5 from "./OneMains5";
    import OneMains6 from "./OneMains6";
    import OneMains7 from "./OneMains7";
    export default {
        name: "OneMain",
      components: {OneMains1, OneMains2, OneMains3,OneMains4,OneMains5,OneMains6,OneMains7}
    }
</script>

<style scoped>

.main::-webkit-scrollbar{
  display: none;
}


</style>
