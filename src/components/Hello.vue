<template>
  <div class="hello">
    <form class="denglu">
      <div class="form-groud">
        <label for="username">账号：</label>
        <input v-model="username" type="text" id="username" placeholder="请输入你的账号">
      </div>
      <div class="form-groud">
        <label for="password">密码：</label>
        <input v-model="password" type="text" id="password" placeholder="请输入你的密码">
      </div>
      <div class="form-groud-btn">
        <button @click="signUp" class="btn1">登录</button>
        <router-link to="/zhuce" class="btn2" tag="button">注册</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import {postSignUp} from '../api/index'
export default {
  name: 'hello',
  data () {
    return {
      username : '',
      password : ''
    }
  },
  methods:{
    signUp(){
        postSignUp({
          username : this.username,
          password : this.password
        }).then(res =>{
          console.log(res.data);
          if(res.data.code == 0){
            alert(res.data.msg)
          }else{
            alert(res.data.msg);
            this.$router.push('/geren');
            console.log(1);
          }
        }).catch(err =>{
          console.log(err);
            alert('登录失败')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.denglu{
  width: 600px;
  height: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #ececec;
  border: 1px solid #000;
  border-radius : 10px;
}
  .form-groud{
    font-size: 0;
    width: 500px;
    height: 60px;
    margin: 20px auto;
  }
.form-groud label{
  display: inline-block;
  width: 80px;
  height: 60px;
  font-size: 22px;
  line-height: 60px;
  text-align: center;
  background: #999;
  color: #fff;
  vertical-align: middle;
}
.form-groud input{
  width: 400px;
  height: 56px;
  line-height: 60px;
  border: 1px solid #666;
  vertical-align: middle;
  font-size: 24px;
  padding-left: 10px;
}
  .form-groud-btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 500px;
    height: 60px;
    margin: 20px auto;
  }
  .form-groud-btn .btn1{
    width: 80px;
    margin-right: 5px;
  }
  .form-groud-btn .btn2{
    display: inline-block;
    width: 80px;
    margin-left: 5px;
    line-height: 60px;
    text-align: center;
  }
  .form-groud-btn .btn2{
    background-color: aqua;
    font-size: 22px;
    font-weight: 900;
    cursor: pointer;
  }
</style>
