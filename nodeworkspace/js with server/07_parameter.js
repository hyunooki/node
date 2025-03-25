//
function say(message='매개변수가 넘어오지 않았습니다.'){
  let msg = message
  console.log(msg)
}
say('Hello asd   dfsewrfdsf')
say();

//2) Rest parameter 
const plus = function(x,y,...rests){
  let result = x+y;
  for (let rest of rests){
    result += rest;
  }
  return result;
}
console.log(plus(1,2,3,4,5,6,7,8,9))