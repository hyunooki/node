//app.js
const express = require('express');
const app = express();


app.listen(5000, ()=>{
  console.log('server start')
  console.log('http://localhost:5000')
})
/*
 content-type |express 
 Get + QueryString  | requset.query  
 Post + QueryString | request.body
 JSON               | request.body
 경로에 값을 전달   | request.params
*/
//미들웨어 등록
// application/x-www-form-urlencoded
//extended는 중첩여부를 확인 예를들어 객체타입을 할거냐 말거냐
app.use(express.urlencoded({extended :false}))
// application/json
app.use(express.json());

let empRouter = require('./router/emp_router.js');
app.use('/',empRouter);

//Error handler
app.use(function(err,req,res,next){
  // res.status(500).json({statusCode : res.statusCode,
  //                       errMessage: res.errMessage
  // })
  // res.status(500).sendFile('error.html')
})
app.get('/error',(req,res,next)=>{
  next(new Error('Process Fail! check Data'))
})
//정적파일(css,html,js,image 등 )처리
app.use(express.static('./fruits'));
//마운트 추가
app.use('/img',express.static('./fruits'));