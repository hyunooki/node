//service/customer_service.js
const mariaDB = require('../mapper/mapper.js');
//전체조회
const findAll = async () => {
 let list =  await mariaDB.query('selectAll');
 return list;
};
//단건조회
const findByid = async(custId) =>{
  //쿼리문 반환 값을 받을 때 무조건 배열이기 때문에
  //인덱스 번호를 찾아서 조회한다.
  console.log(custId)
  let info = await mariaDB.query('selectById',custId);
  return info[0];
};
//등록
const addCustomer = async(custInfo) => {
  console.log("제이슨"+json);
  let columnList = ['name','email','phone','address'];
  let addInfo = converterAray(custInfo,columnList);
  let result = await mariaDB.query('insertInfo',addInfo);
  return result;
};
//객체 => 배열
const converterAray= (target,list)=>{
  let array = [];
  for(let filed of list){
    let val = target[filed];
    array.push(val)
  }
  return array;
}
//수정 
const modifyCumtomerInfo = async(custInfo,custId) =>{
  let updateInfo = [custInfo,custId];
  let result = await mariaDB.query('updateInfo',updateInfo);
  return result;
};
//삭제
const removeCustomerInfo = async(custId) =>{
  let result = await mariaDB.query('deleteInfo',custId);
  return result;
};

module.exports={
  findAll,
  findByid,
  addCustomer,
  modifyCumtomerInfo,
  removeCustomerInfo
}