//middleApp.js
const express = require('express');
const app = express();
//미들웨어등록
const session = require('express-session');
const cors = require('cors');
const { options } = require('./router/emp_router');

app.listen(3000,()=>{
  console.log('http://localhost:3000');
});
//세션설정
let sessionSettion = session({
  secret : '@$@)_TQWATI)_QW%Q^TEWYJIOWE!_$#!@$()',
  resave :false,
  saveUninitialized :true,
  //세션을 얼마나 가지고 있을건지 설정
  cookie :{
    httpOnly : true,
    secure : false,
    //유효기간
    maxAge : 60000
  }
})
//세션활용
app.use(sessionSettion)
//반환값을 어떻게 해야하는지 미들웨어를 활용해야함
app.use(express.json());
//1)CORS 모든 정책 활용
//app.use(cors());

//2) 부분 CORS 정책 활용 
 const corsOption={
  origin :'http://192.168.0.28:5500',
  optionsSuccessStatus :200
 }
 app.use(cors(corsOption));
//로그인
app.post('/login',(req,res)=>{
  const {id,pwd} = req.body;
  req.session.user = id;
  req.session.pwd = pwd;
  //save는 정상적으로 비동기
  req.session.save(function(err){
    if(err) throw err;
    res.send(req.session)
  })
})
app.get('/',(req,res)=>{
  res.send(req.session.user)
})

app.get('/logout',(req,res)=>{
  req.session.destroy();
  res.redirect('/');
})
