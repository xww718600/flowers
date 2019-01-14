<template>
            <div class="luntwo">
                <div class="swing">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                        <img src="../../assets/img/lun7.png">
                                </div>
                                <div class="swiper-slide">
                                        <img src="../../assets/img/lun8.png">
                                </div>
                            </div>
                        </div>
                </div>
            </div>

</template>

<script>
import Swiper from "d:/Documents/Desktop/项目/flower/vue-cli-siku-project/siku-project/src/assets/js/swiper"

    export default {
        name: "OneMains4",

        mounted(){
    var mySwiper = new Swiper('.swiper-container',{
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

<style scoped>
.luntwo{
    width:100%;
    height:1.15rem;
}
.luntwo .swing{
    width:100%;
    height:100%;
}
.luntwo .swing .swiper-container{
    width:100%;
    height:100%;
}
.luntwo .swing .swiper-container .swiper-slide img{
    width:100%;
    height:100%;
}

</style>
