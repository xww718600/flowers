<template>
  <div class="all">
    <three-header></three-header>
    <three-main></three-main>
    <three-footer></three-footer>
  </div>
</template>

<script>
   
   
/*     import MescrollVue from 'mescroll.js/mescroll.vue' */   
    import ThreeHeader from "../components/Three/ThreeHeader";
    import ThreeFooter from "../components/Three/ThreeFooter";
    import ThreeMain from "../components/Three/ThreeMain";
   
    export default {
        name: "Three",
       data(){
          return{
            products:[]
          

          }
      },  
      components:{ThreeHeader, ThreeFooter,ThreeMain}
    }
</script>

<style>
.all{ height:100%; display:flex; flex-direction:column;background: #fff;}

</style>
