<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<template>
    <div>
      <div class="container">
        <div class="container-fluid">
          <form class="commodityBox">
            <div class="form-group">
              <label for="text" class="control-label">名字： </label>
              <input autocomplete="off" v-model="name" id="text" type="text" placeholder="请输入名字" class="form-control">
            </div>
            <div class="form-group">
              <label for="address" class="control-label">地址：</label>
              <input autocomplete="off" v-model="address" type="text" id="address" class="form-control" placeholder="请输入地址">
            </div>
            <div class="form-group">
              <label for="xianjia" class="control-label">现价：</label>
              <input autocomplete="off" v-model="xianjia" type="text" id="xianjia" class="form-control" placeholder="请输入现在的价格">
            </div>
            <div class="form-group">
              <label for="yuanjia" class="control-label">原价：</label>
              <input autocomplete="off" v-model="yuanjia" type="text" id="yuanjia" class="form-control" placeholder="请输入原来的价格">
            </div>
            <div>
              <button @click="add" class="btn">增加</button>
            </div>
          </form>
        </div>
      </div>

    </div>
</template>
<script>
  import {addList} from '../api/index'
    export default {
        data(){
            return {
              name : '',
              address : '',
              xianjia : '',
              yuanjia : ''
            }

          },
        components: {},
        methods: {
            add(){
                addList({
                    name : this.name,
                    address : this.address,
                    xianjia : this.xianjia,
                    yuanjia : this.yuanjia
                }).then(res =>{
                    this.$router.push('/geren')
                })
            }
        }
    }
</script>
<style scoped>

</style>
