<template>
<header>
    <div class="vue-dropdown default-theme" v-show-extend="show">
            <div class="search-module clearfix" v-show="itemlist.length">
                <input class="search-text" 
                @keyup='search($event)' :placeholder="placeholder" />
                <span class="glyphicon glyphicon-search search-icon"></span>
            </div>
            <ul class="list-module" v-show="length">
                <li v-for ="(item,index) in datalist" @click="appClick(item)" 
                :key="index">
                    <span class="list-item-text">{{item.name}}</span>
                </li>
            </ul>
        </div>
</header>
<!--     	<header>
                <ul class="head">
                    <li> 西安市<i class="iconfont">&#xe504;</i> 
                        <select>
                                <option>西安市</option>
                                <option>咸阳市</option>
                                <option>榆林市</option>
                                <option>安康市</option>
                                <option>宝鸡市</option>
                                <option>西安</option>
                                <option>咸阳</option>
                                <option>榆林</option>
                                <option>安康</option>
                                <option>宝鸡</option>

                        </select>
                    </li>
                    <li>
                        <i class="iconfont">&#xe632;</i>
                        <input type="text" placeholder="附近"  />
                    </li>
                </ul>
        </header>
 -->
</template>

<script>
    export default {
        name: "ThreeHeader",
         data(){
            return {
                datalist:[
                    {name:"西安市",},
                    {name:"西安",nodatatext:"xxx"},
                    {name:"榆林市",nodatatext:"aaa"},
                    {name:"榆林",nodatatext:"qqq"},
                ],
            }
        },
        props:{
            'show':{//用于外部控制组件的显示/隐藏
                type:Boolean,
                default:true
            },
            'itemlist':Array,
            'placeholder':String,
            'nodatatext':String
        },
        watch:{
            itemlist:function(val){
                this.datalist = val.concat();
            }
        },
        directives:{
            'show-extend':function(el,binding,vnode){//bind和 update钩子
                let value = binding.value,searchInput = null;
                if(value){
                    el.style.display='block';
                }else{//隐藏后，恢复初始状态
                    el.style.display='none';
                    searchInput = el.querySelector(".search-text");
                    searchInput.value = '';
                    vnode.context.datalist = vnode.context.itemlist;//还原渲染数据
                }
            }
        },
        methods:{
            appClick:function(data){
                this.$emit('item-click',data);
            },
            search:function(e){
                let vm = this,searchvalue = e.currentTarget.value;
                vm.datalist = vm.itemlist.filter(function(item,index,arr){
                    return item.name.indexOf(searchvalue) != -1;
                });
            }
        },
    }

</script>

<style scoped>
header{
    height:.5rem;
}
header .head{
    height:.5rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
header .head li:nth-child(1){
    height:.5rem;
    line-height:.5rem;
    font-size: 15px;
    color:#757575;
}
header .head li:nth-child(1) i{
    font-size: 14px;
    color:#c9c9c9;
    padding-left: .05rem;
}
header .head li:nth-child(2){ 
        width:2.64rem;
        height:.34rem;        
        display: flex;    
        color:#aaa;
        background:#f4f4f4 ;
        border-radius:.04rem;
        margin-top: .07rem;
        padding-left: .09rem;
}
header .head li:nth-child(2) i{ 
        color:#aaa;
        text-align: center;
        height:.34rem;        
        line-height:.34rem;        

}
header .head li:nth-child(2) input{
    width:95%;
    height:.34rem;
    font-size:14px;
    text-indent: .1rem;
    border:0; 
    background:#f4f4f4 ;

    }

</style>
