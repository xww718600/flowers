<template>
            <div class="swiper4">
                <h1>今日热卖榜单</h1>
                    <div class="swiper-container4">
                        <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                        <img src="../../assets/img/gun1.png">
                                        <p>内衣女文胸聚拢</p>
                                        <p>￥39.8<span>￥59.9</span></p>
                                </div>
                                <div class="swiper-slide">
                                        <img src="../../assets/img/gun2.png">
                                        <p>睡衣女柔软舒适</p>
                                        <p>￥49.8<span>￥67.9</span></p>
                                </div>
                                <div class="swiper-slide">
                                        <img src="../../assets/img/gun3.png">
                                        <p>男士护肤乳液</p>
                                        <p>￥7.8<span>￥89.9</span></p>
                                </div>
                                <div class="swiper-slide">
                                        <img src="../../assets/img/fen01.png">
                                        <p>儿童男生套装</p>
                                        <p>￥95.9<span>￥108.9</span></p>
                                </div>
                                <div class="swiper-slide">
                                        <img src="../../assets/img/fen02.png">
                                        <p>小孩子玩具</p>
                                        <p>￥19.8<span>￥57.9</span></p>
                                </div>
                                <div class="swiper-slide">
                                        <img src="../../assets/img/fen03.png">
                                        <p>婴儿床白色</p>
                                        <p>￥1349.8<span>￥1718.8</span></p>
                                </div>
                        </div>
                    </div>
            </div>

</template>

<script>
import Swiper from "d:/Documents/Desktop/项目/flower/vue-cli-siku-project/siku-project/src/assets/js/swiper"

    export default {
        name: "OneMains6",
            mounted(){
        var swiper = new Swiper('.swiper-container4', {
          slidesPerView: 4,
          spaceBetween: 30,
          freeMode: true,
        });
    }

    }
</script>

<style scoped>
.swiper4{
    height:1.9rem;
    padding:0 .1rem;
    overflow: hidden;
    margin:.08rem 0;
}
.swiper4 h1{
    font-size: 16px;
    height:.15rem;
    line-height:.15rem;
    padding-top: .05rem;
}
.swiper4 .swiper-container4 .swiper-wrapper{
    top:.1rem;
}

.swiper4 .swiper-container4 .swiper-wrapper .swiper-slide{
    height:1.2rem;
}

.swiper4 .swiper-container4 .swiper-wrapper .swiper-slide img{
    width:.75rem;
    height:.75rem;

}
.swiper4 .swiper-container4 .swiper-wrapper .swiper-slide p:nth-of-type(1){
    font-size: 12px;
    color:#222;
    margin-top: .05rem;
}
.swiper4 .swiper-container4 .swiper-wrapper .swiper-slide p:nth-of-type(2){
    font-size: 12px;
    color:#fc2208;
    font-weight: 400;
    margin-top: .08rem;
}
.swiper4 .swiper-container4 .swiper-wrapper .swiper-slide p:nth-of-type(2) span{
    font-size: 10px;
    color:#ccc;
    font-weight: 200;
    text-decoration: line-through;
}

</style>
