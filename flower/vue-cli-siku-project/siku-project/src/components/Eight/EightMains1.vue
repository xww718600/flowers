<template>
            <ul class="shang">
                <li v-if="mainList" v-for="(i,index) in mainList" :key="index" >
                    <a href="#">
                        <img :src="i.main1Img">
                        <span>{{i.main1Cont}}</span>
                    </a>
                </li>
     </ul>        
</template>

<script>
// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "EightMains1",
        data(){
        return {
            mainList:[],
        }
},
methods:{
  _initData(){
    // indexMaiApi.getMainList(data=>{
    //   this.mainList=data.main1;
    //   console.log(this.mainList)
    // })
    fetch("../../../static/json/Eight.json").then(res=>{
        res.json().then(data=>{
            console.log(data.main1);
            this.mainList = data.main1
        })
    })
  }
},
//创建完成
created(){
  this._initData()

 },
    }
</script>

<style>
 .shang{
    height:1.98rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap; 
}
 .shang li{
    width: 20%;
    height:50%;
}
 .shang li a{ 
    display:block; 
    height:100%; 
    display:flex; 
    flex-direction:column; 
    align-items:center; 
    justify-content:center;
}
 .shang li img{
    width: .48rem;
    height:.48rem;
}
 .shang li span{
    font-size: 12px;
    color:#333;
    margin-top: .1rem;
}

</style>
