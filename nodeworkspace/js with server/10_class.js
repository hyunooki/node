//class.js
//1) 생성자 함수
function User(name, age, city){
  //필드
  this.name = name;
  this.age = age;
  this.city = city;
  //메서드
  this.getInfo = function(){
    return `${this.name},${this.age},${this.city}`;
  }
}
let hong = new User('Hong',30,'Daegu');
console.log(hong.getInfo())

let kim = new User("kin",25,"jeju")
console.log(kim.getInfo());

//class
class Emp{
  // 생성자
  constructor(id,name,dept){
    this._id = id;
    this._name = name;
    this._dept = dept;
  }
  //get & set
  get id(){
    return this._id;
  }
  get name(){
    return this._name;
  }
  set name(name){
    this._name = name;
  }
  
  
  //메서드
  setDept(dept){
    this._dept = dept;
  }

  getDept(){
    return this._dept;
  }
}

let kang = new Emp(100,"Kang","sales")
//set id 형태가 없어 값은 바뀌지 않는다.
kang.id = 200;
//set name은 형태가 있으니 kang.name으로 값이 바뀐다.
kang.name = 'King';
//setter을 메서드로 지정을하여 dept는 setDept형식으로 기입한다.
kang.setDept('Marketing');

console.log(kang);
