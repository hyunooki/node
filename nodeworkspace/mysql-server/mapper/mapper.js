//mapper/mapper.js
const mariaDB = require('mariadb/callback');
const sqlList = require('./sql/customer.js')
const connectionPool = mariaDB.createPool({
  //필수
  host :process.env.DB_HOST,
  port :process.env.DB_PORT,
  user :process.env.DB_USER,
  password :process.env.DB_PWD,
  database : process.env.DB_DATABASE,
  connectionLimit : process.env.DB_LIMIT,
  //선택
  permitSetMultiParamEntries: true,
  //insert id값이 들어왔을때 확실히 int값으로 가져와라
  insertIdAsNumber : true,
  //count를 할때 갯수를 체크할 때 가끔식 big int로 처리한다
  //그래서 big int가 아닌 일반 int로 바꿀 수 있도록한다.
  bigIntAsNumber : true,
});

const query = (alias,values)=>{
  return new Promise((resolve,reject)=>{
    let executeSql = sqlList[alias]
    console.log(`sql : ${executeSql}`);
    connectionPool.query(executeSql,values,(err,result)=>{
      if(err){
        reject({err});
      }else{
        resolve(result);
      }
    })
  })
  .catch(err => {
    console.log(err);
    return err;
  })
}

module.exports = {
  query
}