<template>
                <div class="shouyi">
                        <div class="one">
                            <p>￥<span>0</span></p>
                            <p>￥<span>0</span></p>
                        </div>
                        <div class="two">
                            <p>本月预估</p>
                            <p>今日收益</p>
                        </div>
                        <div class="three">
                            <p>上月结算<span>￥0</span></p>
                            <p>上月预估<span>￥0</span></p>
                        </div>
                </div>

</template>

<script>
    export default {
        name: "FiveMains1"
    }
</script>

<style scoped>
 .shouyi{
    height:1.2rem;
    margin:0 .1rem;
    border-radius: 0 0 .15rem .15rem;
    background: #fff;
}
 .shouyi div{
    display: flex;
    justify-content: space-around;

}
 .shouyi div:nth-child(1) p{
  font-size: 10px;
  color:#626262;
  margin-top: .11rem;
}
 .shouyi div:nth-child(1) p span{
  font-size: 16px;
  color:#5d5d5d;
}
 .shouyi div:nth-child(2){
  margin-top: .11rem;
  padding-bottom: .08rem;
  border-bottom: 2px solid #f4f4f4;
}

 .shouyi .two p{
  font-size: 14px;
  color:#4c4c4c;
}

 .shouyi .three p{
  font-size: 14px;
  color:#989898;
  margin-top: .08rem;

}
 .shouyi .three p span{
  font-size: 10px;
  color:#d8c9be;
}

</style>
