//js with server/01_const.js
const count = 0;

//var count = 0 ;
//const는 상수라서 변경불가
//count = 10;
console.log(count);

const user= {
   "id":"user01",
  "name":"hong"
}
//객체가 상수이더라도 객체안에 있는 값들은 변경이가능
user.id = "mgro01";
user.name = "Kang";
user.ssn = "981015";
console.log(user);

//객체 째로 값을 변경은 불가능
//user={}; 
