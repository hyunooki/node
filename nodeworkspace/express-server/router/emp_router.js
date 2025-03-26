//router/emp_router.js
const express = require('express');
const router = express.Router();
const {query} = require('../mapper/emp-map.js')

// REST API
// 전체조회 : GET + '/emps'
router.get('/emps',(req,resp)=>{
  let list = query('SELECT');// 서비스
  resp.send(list);//응답 형태
})
//단건조회 
router.get('/emps/:empId',(req,res)=>{
    let searchId = req.params.empId;
    console.log(searchId);
    let info = query('SELECT',null,{id:searchId});
    console.log(info);
    res.send(info[0])
})
//등록
router.post('/emps',(req,resp)=>{
   let addInfo = req.body;
   query('INSERT',addInfo);
   resp.send({'result':'success'});
 })
// //수정
router.put('/emps/:eid',(req,resp)=>{
  let searchId = req.params.eid;
  let updateInfo = req.body;
  query('UPDATE',updateInfo,{id:searchId});
  resp.send({'result':'success','id' :searchId});
})
//삭제
router.delete('/emps/:eid',(req,resp)=>{
  let searchId = req.params.eid;
  query('DELETE',null,{id:searchId})
  resp.status(204).send('Complete');
})


module.exports = router;