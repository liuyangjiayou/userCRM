let mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb://127.0.0.1:27017/201701xuexi',function (err) {
  if(err){
    console.log(err);
  }else{
    console.log('链接成功');
  }
});
var a = {age : 1000};
// 定义Schema数据集合的骨架模型，规定一个集合中文档的属性名和属性的类型（在工作0中是建表的意思）
let userSchema = new mongoose.Schema({
  username : String,
  password : String
},{collection : 'user'});
let listSchema = new mongoose.Schema({
  name : String,
  address : String,
  xianjia : String,
  yuanjia : String,
  id : Number
},{collection : 'list'});
let User = mongoose.model('User',userSchema);
let List = mongoose.model('List',listSchema);
module.exports = {User,List};
//写入数据
// console.log(User);
// User.create({
//   username : 'liuyang3',
//   age : 4
// });
//查找数据
// User.find({age : 4},function (err,data) {
//   console.log(data);
// });
//查找一个数据，并且金查找一次
// User.findOne({age : 4},function (err,data) {
//   console.log(data);
// });
// User.findOneAndUpdate({username : 'liuyang2'},a,function (err,data) {
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data);
//   }
// });
// db.getCollection('user').find({});
