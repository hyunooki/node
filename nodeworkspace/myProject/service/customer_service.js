const mariaDB = require('../mapper/mapper.js');

const findAll = async () => {
  let list = await mariaDB.query('selectAll');
  return list;
}

module.exports={
  findAll
}
