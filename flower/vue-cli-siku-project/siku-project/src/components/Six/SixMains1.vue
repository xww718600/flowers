<template>
            <div class="dong">
                <div class="swing">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                        <img src="../../assets/img/detail01.png">
                                </div>
                                <div class="swiper-slide">
                                        <img src="../../assets/img/detail02.png">
                                </div>
                                <div class="swiper-slide">
                                        <img src="../../assets/img/detail03.png">
                                </div>
                                <div class="swiper-slide">
                                        <img src="../../assets/img/detail04.png">
                                </div>
                            </div>  
                        </div>    
                </div>      
            </div>
</template>

<script>
import Swiper from "d:/Documents/Desktop/项目/flower/vue-cli-siku-project/siku-project/src/assets/js/swiper"

    export default {
        name: "SixMains1",
            mounted(){
        new Swiper('.swiper-container',{
        loop:true,
        autoplay:{
            delay:2000,
            stopOnLastSlide:false,
            disableOnInteraction:false,
        },
      })
    }
    }
</script>

<style>
 .dong{
    width:3.75rem;
    height:3.55rem;
}
 .dong .swing{
    width:3.75rem;
    height:3.55rem;
}
 .dong .swing{
    width:100%;
    height:3.55rem;
}
 .dong .swing .swiper-container{
    width:100%;
    height:3.55rem;
}
 .dong .swing .swiper-container .swiper-slide img{
    width:100%;
    height:3.55rem;
}

</style>
