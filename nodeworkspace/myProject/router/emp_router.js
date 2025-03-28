const express = require('express')
const router = express.Router();
const empService = require('../service/customer_service.js')

router.get('/emps',async(req,res)=>{
  let empList = await empService.findAll();
  res.send(empList);
})
router.get('/emps/:id',async(req,res)=>{
  let empId = req.params.id;
  let empInfo = await empService.empById(empId);
  res.send(empInfo)
})
router.post('/emps',async(req,res)=>{
  let empInfo = req.body
  let result = await empService.empAdd(empInfo)
  res.send(result);
})
router.put('/emps/:id',async(req,res)=>{
  let empInfo = req.body;
  let empId = req.params.id;
  let result = await empService.modifyEmp(empInfo,empId);
  res.send(result);
})
router.delete('/emps/:id',async(req,res)=>{
  let empId = req.params.id;
  let result = await empService.deleteEmp(empId);
  res.send(result);
})
module.exports=router;