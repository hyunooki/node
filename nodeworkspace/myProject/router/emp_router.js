const express = require('express')
const router = express.Router();
const empService = require('../service/customer_service.js')

router.get('/emps',async(req,res)=>{
  let empList = await empService.findAll();
  res.send(empList);
})

module.exports=router;