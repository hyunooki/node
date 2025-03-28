//app.js
require('dotenv').config({path:'./mapper/dbConfig.env'})
const express = require('express')
const app = express();

app.use(express.urlencoded({extended :false}))
app.use(express.json())

app.listen(5000,()=>{
  console.log('server Strat')
  console.log("http://localhost:5000");
})


app.get('/',(req,res)=>{
  res.send('hello')
})

//라우터
let empRouter = require('./router/emp_router.js')
app.use('/member',empRouter)


