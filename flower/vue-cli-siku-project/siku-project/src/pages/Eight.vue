<template>
  <div class="all">
    <eight-header></eight-header>
    <eight-main></eight-main>
    <eight-footer></eight-footer>
  </div>
</template>

<script>
   
   
/*     import MescrollVue from 'mescroll.js/mescroll.vue' */   
    import EightHeader from "../components/Eight/EightHeader";
    import EightFooter from "../components/Eight/EightFooter";
    import EightMain from "../components/Eight/EightMain";
   
    export default {
        name: "Eight",
       data(){
          return{
            products:[]
          

          }
      },  
      components:{EightHeader, EightFooter,EightMain}
    }
</script>

<style>
.all{ height:100%; display:flex; flex-direction:column;background: #fff;}

</style>
