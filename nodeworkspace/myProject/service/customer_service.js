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
  let addInfo = Object.values(empInfo);
  let result = await mariaDB.query('insertEmp',addInfo)
  return result;
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
