<template>
<div class="mying">
            <div class="swing">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
<!--                             <div :key="index" v-for="(pic,index) in picurl" class="swiper-slide">
                                    <img :src="pic" alt="">
                            </div>
 --> 
                            <div class="swiper-slide">                               
                                    <img src="../../assets/img/lun1.png">
                            </div>
                            <div class="swiper-slide">
                                    <img src="../../assets/img/lun2.png">
                            </div>
                            <div class="swiper-slide">
                                    <img src="../../assets/img/lun3.png">
                            </div>
                            <div class="swiper-slide">
                                    <img src="../../assets/img/lun4.png">
                            </div>
                            <div class="swiper-slide">
                                    <img src="../../assets/img/lun5.png">
                            </div>
                            <div class="swiper-slide">
                                    <img src="../../assets/img/lun6.png">
                            </div>
                     </div>
                </div>
            </div>
</div>

</template>

<script>
import Swiper from "d:/Documents/Desktop/项目/flower/vue-cli-siku-project/siku-project/src/assets/js/swiper"

     export default {
        name: "OneMains1",

/*         data(){
        return{
            picurl:[
            "../../assets/img/lun7.png",
            "../../assets/img/lun2.png",
            "../../assets/img/lun3.png",
            "../../assets/img/lun4.png",
            "../../assets/img/lun5.png",
            "../../assets/img/lun6.png"
            ]
        }
        },
 */
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

<style scoped>

.mying{
    width:100%;
    height:1.5rem;
}
.mying .swing{
    width:100%;
    height:100%;
}
.mying .swing .swiper-container{
    width:100%;
    height:100%;
}
.mying .swing .swiper-container .swiper-slide img{
    width:100%;
    height:100%;
}
</style>
