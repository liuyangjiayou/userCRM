let express = require('express');
let app = express();
let path = require('path');
let url = require('url');
let {User,List} = require('../shujuku/index');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
let resule = {msg : '',code : 1};
//注册
app.post('/api/zhuce',function (req,res) {
  User.findOne({
    username : req.body.username
  },function (err,docs) {
    if(err){
      resule.msg = '注册失败';
      res.send(resule)
    }else{
      if(docs){
        resule.msg = '该用户已经被注册';
        res.send(resule);
      }else{
        User.create(req.body,function (err,docs) {
          if(err){
            resule.msg = '注册失败';
            res.send(resule)
          }else{
            resule.msg = '注册成功';
            res.send(resule)
          }
        });
      }
    }
  });
});
//登录
app.post('/api/signUp',function (req,res) {
  User.findOne({
    username : req.body.username,
    password : req.body.password
  },function (err,docs) {
    if(err){
      console.log(err);
    }else{
      if(docs){
        resule.msg = '登录成功';
        resule.code = 1;
        res.send(resule);
      }else{
        resule.msg = '登录失败';
        resule.code = 0;
        res.send(resule);
      }
    }
  })
});

//列表查询
app.get('/api/getList',function (req,res) {
  List.find({},function (err,docs) {
    if(err){return console.log(err)}
    res.send(docs)
  })
});
//添加列表
app.post('/api/add',function (req,res) {
  List.find({},function (err,docs) {
    req.body.id = docs.length > 0 ? docs[docs.length-1].id + 1 : 1;
    List.create(req.body,function (err,docs) {
      if(err){return console.log(err)}
      else{
        res.send("成功添加")
      }
    })
  });
});
//删除列表
app.delete('/api/removeList',function (req,res) {
  let {pathname,query} = url.parse(req.url,true);
  let id = query.id;
  List.find({},function (err,docs) {
      docs.forEach(item => {
      if(item.id == id){
         List.remove(item,function (err,docs) {
           res.send('删除成功')
         })
      }
    });

    // List.remove(del,function (err,docs) {
    //   console.log(docs);
    // })
  })
});


app.listen(4000,function () {
  console.log('链接成功');
});
