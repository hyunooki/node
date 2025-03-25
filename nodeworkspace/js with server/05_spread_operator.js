//펼침 연산자
let a = [[24,32],1,3,5];
let b = [10,20];

let newList = [...b,...a];
console.log(newList);

let str = "CD";
let strAry = [...str];
console.log(str[0]);
console.log(strAry)

//구조 분해 할당
let obj = {
  id:100,
  name:'Hong',
  birth : new Date('1995-12-15')
}
let {id,name,birth} = obj;

console.log(birth);