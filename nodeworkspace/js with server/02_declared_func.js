
//1) 함수 선언무 => var
let result =plus(1,2,3);

function plus(x,y,z){
  return(x+y+z);
}
console.log(result)

const printMsg = function(keyword){
  return "result : + "+keyword
}

// 3) 화살표 함수 : () => {}
// 3-1) 익명함수
let aray = [1,2,3,4,5];
aray.forEach(val=>console.log(val));

//고차함수란 return값이 함수일때
 const highFun=function(num){
   return(x) => {
     return x+num
   }
 }
 
const addNum = highFun(10);
result = addNum(5);
console.log(result);
//3-2) 화살표 함수 + 함수 표현식
const multi = (x,y) => x*y;

console.log(multi(2,3));











