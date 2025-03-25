//
let fruits = ["Banana","Orange","Apple",'Mango'];
fruits.sort();
console.log(fruits);
let points =[40,100,1,25,5,10];
//숫자를 제대로 filter을 하려면 아래와 같이 function을 재설정해야한다.
points.sort(function(a,b){
  return a-b;
});
console.log(points);