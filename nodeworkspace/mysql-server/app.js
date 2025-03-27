//app.js
require('dotenv').config({path:'./mapper/dbConfig.env'})
const express = require('express')
const app = express();
//미들웨어 
//application /x-www-from-urlencoded
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.listen(3000,()=>{
  console.log('Server start')
  console.log('http://localhost:3000')
})

//라우팅
app.get('/',(req,res)=>{
  res.send('Welcome');
})

//라우터
const custRouter = require('./router/customer_router')
app.use('/',custRouter)