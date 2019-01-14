<template>
  <div class="all">
    <one-header></one-header>
    <one-main-and-nav></one-main-and-nav>
    <one-footer></one-footer>
  </div>
</template>

<script>
   
   
/*     import MescrollVue from 'mescroll.js/mescroll.vue' */   
    import OneHeader from "../components/One/OneHeader";
    import OneFooter from "../components/One/OneFooter";
    import OneMainAndNav from "../components/One/OneMainAndNav";
   
    export default {
        name: "One",
       data(){
          return{
            products:[]
          

          }
      },  
      components:{OneFooter, OneHeader,OneMainAndNav}
    }
</script>

<style>
@import "../assets/css/swiper.css";
.all{ height:100%; display:flex; flex-direction:column;background: #fff;}

</style>
