let axios = require('axios');
let qs = require('qs');
//登录

//注册
export function postSignIn(option) {
  return axios.post('/api/zhuce',qs.stringify(option))
}
//登录
export function postSignUp(option) {
  return axios.post('/api/signUp',qs.stringify(option))
}
export function getList() {
  return axios.get('/api/getList')
}
export function addList(data) {
  return axios.post('/api/add',qs.stringify(data))
}
export function removeList(id) {
  return axios.delete('/api/removeList?id=' + id)
}
export function UpdataList(id,data) {
  return axios.put('/api/upDataList?id='+id,data)
}
