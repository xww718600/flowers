<template>
  <div class="all">
    <four-header></four-header>
    <four-main></four-main>
    <four-footer></four-footer>
  </div>
</template>

<script>
   
   
    import FourHeader from "../components/Four/FourHeader";
    import FourFooter from "../components/Four/FourFooter";
    import FourMain from "../components/Four/FourMain";
   
    export default {
        name: "Four",
       data(){
          return{
            products:[]
          

          }
      },  
      components:{FourHeader, FourFooter,FourMain}
    }
</script>

<style>
.all{ height:100%; display:flex; flex-direction:column;background: #fff;}

</style>
