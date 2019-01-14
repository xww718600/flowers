<template>
  <div class="all">
    <seven-header></seven-header>
    <seven-main></seven-main>
    <seven-footer></seven-footer>
  </div>
</template>

<script>
   
   
/*     import MescrollVue from 'mescroll.js/mescroll.vue' */   
    import SevenHeader from "../components/Seven/SevenHeader";
    import SevenFooter from "../components/Seven/SevenFooter";
    import SevenMain from "../components/Seven/SevenMain";
   
    export default {
        name: "Seven",
       data(){
          return{
            products:[]
          

          }
      },  
      components:{SevenHeader, SevenFooter,SevenMain}
    }
</script>

<style>

.all{ height:100%; display:flex; flex-direction:column;background: #fff;}

</style>
