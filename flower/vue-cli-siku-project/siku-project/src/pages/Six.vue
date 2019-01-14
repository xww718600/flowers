<template>
  <div class="all">
    <six-header></six-header>
    <six-main></six-main>
    <six-footer></six-footer>
  </div>
</template>

<script>
   
   
/*     import MescrollVue from 'mescroll.js/mescroll.vue' */   
    import SixHeader from "../components/Six/SixHeader";
    import SixFooter from "../components/Six/SixFooter";
    import SixMain from "../components/Six/SixMain";
   
    export default {
        name: "Six",
       data(){
          return{
            products:[]
          

          }
      },  
      components:{SixHeader, SixFooter,SixMain}
    }
</script>

<style>
@import "../assets/css/swiper.css";

.all{ height:100%; display:flex; flex-direction:column;background: #fff;}

</style>
