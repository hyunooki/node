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
router.get('/customers/:id',async (req,res)=>{
     let custId = req.params.id;
     let cusInfo = await custService.findByid(custId);
     res.send(cusInfo);
});
//등록 : POST + '/custmoers' + JSON 
router.post('/customers',async(req,res)=>{
  let addCust = req.body;
  let result =  await custService.addCustomer(addCust);
  res.send(result);
});
//수정 : PUT + '/custmoers/:id + JSON'
router.put('/customers/:id',async(req,res)=>{
  let id = req.params.id;
  let body = req.body;
  let result = await custService.modifyCumtomerInfo(body,id)
  res.send(result);
});
//삭제 : DELETE + '/custmoers/:id'
router.delete('/customers/:id',async(req,res)=>{
  let id = req.params.id
  let result = await custService.removeCustomerInfo(id);
  res.send(result)
});
module.exports=router;