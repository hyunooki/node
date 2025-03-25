let persons = [{
  name: "유재석",
  point: 95,
  city: "서울"
}, {
  name: "김종국",
  point: 92,
  city: "부산"
}, {
  name: "하하",
  point: 81,
  city: "대구"
}]
// 1)점수가 80점이상잉 사람들만 따로
 let scores = persons.filter(function(item,idx){
    return item.point >80;
 })
 // PS) 객체배열일 경우 새로운 배열과 원본배열
 // 둘다 데이터 변경 발생
 scores[0].name= "강호동";
 console.log(scores);
 console.log(persons);
 //map으로 작성
// 2)각 사람들 별로 no를 추가
let newList = persons.map(function(value,index){
  return {
    no:((index+1)*100),
    name:value.name,
    city:value.city,
  }
});
console.log(persons);
console.log(newList);
newList[0].name = "홍길동";
console.log(persons);
console.log(newList);
