let {print,plus} =require('./06-01_module');

print('Hello');

//console.log(plus(1,2));

//무조건 06-01.module.js을 보면 module.exports를 보면 
//함수가 다 들어가있어야 사용이 가능하다.
console.log(plus(1,2))

// 1) objecct
let person = {
  firstName : "John",
  lastName: "Doe",
  age: 37,
  email: "john@gamil.com",
  country :"USA"
};
let {lastName, email} = person;
console.log(lastName,email);
console.log(person.lastName,person.email);

function getFullName({firstName,lastName}){
  console.log(`${firstName},${lastName}`)
}

getFullName(person);

// 2) Array
let scores = [100,80,90];

let [a,b,c] =scores;
console.log(a);
console.log(c);