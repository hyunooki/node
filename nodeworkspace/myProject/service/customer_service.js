const mariaDB = require('../mapper/mapper.js');

const findAll = async () => {
  let list = await mariaDB.query('selectAll');
  return list;
}
//단건조회
const empById = async(empId) => {
  let info = await mariaDB.query('empById',empId);
  return info[0];
}
//등록
const empAdd = async(empInfo) => {
  let columnList = Object.keys(empInfo);
  let addInfo = convertAry(empInfo,columnList);
  let result = await mariaDB.query('insertEmp',addInfo)
  return result;
}
//객체를 배열로
const convertAry = (target,list) => {
  let array =[];
  for(let filed of list){
    let val = target[filed]
    array.push(val)
  }
  return array;
}
//수정
const modifyEmp = async(empInfo,empId) => {
  let updateInfo = [empInfo,empId];
  let result = await mariaDB.query('updateEmp',updateInfo);
  return result;
}
//삭제
const deleteEmp = async(empId) => {
  let result = await mariaDB.query('deleteEmp',empId);
  return result;
}
module.exports={
  findAll,
  empById,
  empAdd,
  modifyEmp,
  deleteEmp
}
