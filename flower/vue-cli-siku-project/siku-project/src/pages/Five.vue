<template>
  <div class="all">
    <five-header></five-header>
    <five-main></five-main>
    <five-footer></five-footer>
  </div>
</template>

<script>
   
   
/*     import MescrollVue from 'mescroll.js/mescroll.vue' */   
    import FiveHeader from "../components/Five/FiveHeader";
    import FiveFooter from "../components/Five/FiveFooter";
    import FiveMain from "../components/Five/FiveMain";
   
    export default {
        name: "Five",
       data(){
          return{
            products:[]
          

          }
      },  
      components:{FiveHeader, FiveFooter,FiveMain}
    }
</script>

<style>
.all{ height:100%; display:flex; flex-direction:column;background: #fff;}

</style>
