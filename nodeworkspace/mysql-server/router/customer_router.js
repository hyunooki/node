// router/customer_router.js
//라우터 모듈

const express = require('express');
const router = express.Router();
const custService = require('../service/customer_service.js')

// cutomers
//전체 조회 : GET +'/customer'
router.get('/customers',async (req,res)=>{
   let cusList = await custService.findAll();
   res.send(cusList);
});
//단건 조회 : GET + '/custmoers/:id'
router.get('/customers/:id',(req,res)=>{
  
});
//등록 : POST + '/custmoers' + JSON 
router.post('/customers',(req,res)=>{
  
});
//수정 : PUT + '/custmoers/:id + JSON'
router.put('/customers/:id',(req,res)=>{
  
});
//삭제 : DELETE + '/custmoers/:id'
router.delete('/customers/:id',(req,res)=>{
  
});
module.exports=router;