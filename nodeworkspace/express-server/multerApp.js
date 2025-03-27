//multerApp.js

const multer = require('multer');
const path = require('path');
const cors = require('cors');


const express = require('express');
const app = express();

//2) 부분 CORS 정책 활용 
 const corsOption={
  origin :'http://192.168.0.28:5500',
  optionsSuccessStatus :200
 }
 app.use(cors(corsOption));

//디스크 저장장소 설정
const storage = multer.diskStorage({
  //경로 설정
  destination : function(req,file,cb){
    cb(null,'uploads/')
  },
  //파일 이름 설정
  filename : function(req,file,cb){
    let saveFile = (new Date()).valueOf() + path.basename(file.originalname); 
     cb(null,saveFile);
  }
});

const upload = multer({storage : storage})

app.listen(5000,()=>{
  console.log('Server Start!!')
})
//단일 파일 업로드
           //경로    미들웨어                핸들러
app.post('/profile',upload.single('avatar'),(req,res)=>{
  console.log(req.file);
  console.log(req.body);
})
// 다중 파일 업로드
//                     제한갯수 지정
app.post('/photos',upload.array('photos',12),(req,res)=>{
  for(let file of req.files){
    console.log(file)
  }
})