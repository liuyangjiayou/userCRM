<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<template>
  <div>
    <div v-if="!isShow" class="bgText">
      <h2>
        你好！你的商品现在空空如也，请你现在添加商品！
        <router-link to="/add">增加</router-link>
      </h2>
    </div>
    <div v-if="isShow" class="commodityBox" v-for="ListData in ListDatas">
      <h1>{{ListData.name}}</h1>
      <img :src="ListData.address">
      <p>现价：{{ListData.xianjia}}</p>
      <p>原价：{{ListData.yuanjia}}</p>
      <span>评论数:10</span>
      <span>赠送积分:10</span>
      <div class="btn">
        <router-link to="/add" tag="button">增加</router-link>
        <button @click="remove(ListData.id)">删除</button>
        <button>修改</button>
      </div>
    </div>
  </div>
</template>
<script>
  import {getList,removeList} from '../api/index'
  export default {
    data(){
      return {
          isShow : true,
          ListDatas : ''
      }
    },
    components: {},
    methods: {
        remove(id){
            var flag = confirm('你确定要删除这一项吗？');
          console.log(flag);
          if(flag){
              removeList(id).then(res=>{
                  alert(res.data);
                    this.getListFn()
              })
            }else{
                this.$router.puah({path : '/geren'})
            }
        },
        getListFn(){
          getList().then(res=>{
            if(res.data.length){
              this.ListDatas = res.data
            }else{
              this.isShow = !this.isShow
            }
          });
        }
    },
    mounted(){
     this.getListFn()
    }
  }
</script>
<style scoped>
  .commodityBox {
    width: 350px;
    height: 260px;
    border: 1px solid #006600;
    border-radius: 20px;
    padding: 10px;
    background-color: #ececec;
    display: inline-block;

  }
  h1 {
    font-size: 26px;
    background-color: #0074D9;
    margin: 0;
  }
  img{
    width: 170px;
    height: 170px;
    background-color: #7f7f7f;
    float: left;
    margin-right: 20px;
  }
  p{
    background-color: #ebebeb;
    margin: 10px auto;
  }
  span{
    display: block;
    height: 20px;
  }
  .btn {
    margin: 10px;
  }
  .bgText{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -27px;
    margin-left: -237px;
  }
</style>
