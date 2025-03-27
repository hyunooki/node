//service/customer_service.js
const mariaDB = require('../mapper/mapper.js');
//전체조회
const findAll = async () => {
 let list =  await mariaDB.query('selectAll');
 return list;
};
//단건조회
const findByid = () =>{};
//등록
const addCustomer = () => {};
//수정 
const modifyCumtomerInfo = () =>{};
//삭제
const removeCustomerInfo = () =>{};

module.exports={
  findAll,
  findByid,
  addCustomer,
  modifyCumtomerInfo,
  removeCustomerInfo
}