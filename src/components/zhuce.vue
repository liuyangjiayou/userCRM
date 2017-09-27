<template>
    <div>
      <form>
        <div class="form-groud">
          <label for="username">注册账号</label>
          <input onkeyup="value=value.replace(/[^\w\.\/]/ig,'')" v-model="username" type="text" id="username" placeholder="只能输入数字和字母" >
        </div>
        <div class="form-groud">
          <label for="passname">注册密码</label>
          <input v-model="password" type="text" id="passname" placeholder="请输入您的密码" >
        </div>
        <div class="form-groud">
          <label for="passname2">重复密码</label>
          <input v-model="password2" type="text" id="passname2" placeholder="请再次输入您的密码" >
        </div>
        <div class="form-groud-btn">
          <button @click="zhuce" class="btn" type="button">确认注册</button>
        </div>
      </form>
    </div>
</template>
<script>
  import {postSignIn} from '../api/index'
    export default {
        data(){
            return {
              username : '',
              password : '',
              password2 : ''
            }
        },
        components: {},
        methods: {
          zhuce(){
              if(this.username && this.username.length >=6){
                  if(this.password && this.password){
                    if(this.password == this.password2){
                      postSignIn({
                        username : this.username,
                        password : this.password
                      }).then(res =>{
                        confirm(res.data.msg);
                        if(confirm){
                          this.$router.push('/')
                        }
                      }).catch(err =>{
                        this.$router.back();
                      })
                    }else{
                      alert('密码与重复密码不一样')
                    }
                  }else{
                      alert('密码不能为空')
                  }
              } else {
                alert('用户名不能为空并且长度不能低于6位')
              }

          }
        },
    }
</script>
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
    width: 80px;
    margin-left: 5px;
  }
  .form-groud-btn button{
    background-color: aqua;
    font-size: 22px;
    font-weight: 900;
    cursor: pointer;
  }
</style>
