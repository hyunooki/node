function print(keyword){
  console.log(keyword)
}
function plus(x,y){
  return x+y;
}
//함수가 다 들어가있어야 다른 js에서 사용이 가능하다 06-02_destuction.js참고.
module.exports = {
  print,plus
}