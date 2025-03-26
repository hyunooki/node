//05_fs.js
const fs = require('fs');

const data = '가가가가';

fs.writeFile('./sample.txt',data,'utf-8',
         (err)=>{
          if(err){
            throw err;
         }
         console.log('파일쓰기 완료')
        })

fs.readFile('./sample.txt','utf-8',(err,result)=>{
  if(err){
     throw err
    }
  console.log(result);
})