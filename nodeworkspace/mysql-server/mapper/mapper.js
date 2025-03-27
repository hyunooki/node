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

// query 함수 정의 (alias와 values를 매개변수로 받음)
const query = (alias, values) => {
  // Promise 객체를 반환하는 함수 생성 (비동기 작업을 수행하기 위함)
  return new Promise((resolve, reject) => {
    // alias에 해당하는 SQL 쿼리를 sqlList 객체에서 가져옴
    let executeSql = sqlList[alias];
    // 실행할 SQL 쿼리를 콘솔에 출력 (디버깅용)
    console.log(`sql : ${executeSql}`);
    // connectionPool을 사용하여 데이터베이스에 쿼리를 실행
    connectionPool.query(executeSql, values, (err, result) => {
      // 쿼리 실행 중 오류가 발생한 경우
      if (err) {
        // reject를 호출하여 에러를 반환 (Promise의 실패 처리)
        reject({ err });
      } else {
        // resolve를 호출하여 쿼리 결과를 반환 (Promise의 성공 처리)
        resolve(result);
      }
    });
  })
  // Promise에서 발생한 오류를 처리하는 catch 블록
  .catch(err => {
    // 오류 내용을 콘솔에 출력 (디버깅용)
    console.log(err);
    
    // 에러 객체를 그대로 반환 (호출한 곳에서 처리할 수 있도록)
    return err;
  });
};

module.exports = {
  query
}