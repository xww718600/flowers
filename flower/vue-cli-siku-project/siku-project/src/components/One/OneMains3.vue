<template>
            <div class="gun">
                    <div class="qian"><img src="../../assets/img/hua.png"></div>
                    <div class="swiper-container3">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">【第二件6.8元】联合暴走漫画定制版</div>
                                <div class="swiper-slide">【第二件0元】狂欢最后一天限时抢</div>
                            </div>
                    </div>
                    <div class="hou"><img src="../../assets/img/qiu.png"></div>
            </div>

</template>

<script>
import Swiper from "d:/Documents/Desktop/项目/flower/vue-cli-siku-project/siku-project/src/assets/js/swiper"

    export default {
        name: "OneMains3",
            mounted(){
        var mySwiper = new Swiper ('.swiper-container3', {
          direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay:{
            delay:2000,
            disableOnInteraction:false,
        }
        })        
    }

    }
</script>

<style scoped>
.gun{
    height:.54rem;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
}
.gun>div{
    align-self: center;
}
.gun .qian{
    width: .56rem;
    height: .15rem;
}
.gun .qian img{
    width: .56rem;
    height: .15rem;
}
main .gun .hou{
    width: .26rem;
    height: .25rem;
}

.gun .hou img{
    width: .26rem;
    height: .25rem;
}
.gun .swiper-container3 {
    width: 2.5rem;
    height: .54rem;
    line-height: .54rem;
}  

</style>
