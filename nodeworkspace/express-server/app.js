//app.js

const express = require('express');
const app = express();

app.listen(5000, ()=>{
  console.log('server start')
  console.log('http://localhost:5000')
})

// REST API
// 전체조회 : GET + '/emps'
app.get('/emps',(req,resp)=>{
  resp.send('server connect')
})
//등록
app.post('/',(req,resp)=>{
  resp.send('server connect')
})
//수정
app.put('/',(req,resp)=>{
  resp.send('server connect')
})
//삭제
app.delete('/',(req,resp)=>{
  resp.send('server connect')
})