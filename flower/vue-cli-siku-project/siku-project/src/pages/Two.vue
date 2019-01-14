<template>
  <div class="all">
    <two-header></two-header>
    <two-main></two-main>
    <two-footer></two-footer>
  </div>
</template>

<script>
   
   
/*     import MescrollVue from 'mescroll.js/mescroll.vue' */   
    import TwoHeader from "../components/Two/TwoHeader";
    import TwoFooter from "../components/Two/TwoFooter";
    import TwoMain from "../components/Two/TwoMain";
   
    export default {
        name: "Two",
       data(){
          return{
            products:[]
          

          }
      },  
      components:{TwoFooter, TwoHeader,TwoMain}
    }
</script>

<style>
.all{ height:100%; display:flex; flex-direction:column;background: #fff;}

</style>
