// index.js
const axios = require('axios');

fetch('http://localhost:3000/customers')
  .then(res => res.json())
  .then(result =>{
    console.log('fetch Get');
    console.log(`\t ${result}`)
  })
  .catch(err => console.log(err));

//axios
  axios('http://localhost:3000/customers')
  .then(result =>{
    console.log('axios Get');
    console.log(`\t `,result.data)
  })
  .catch(err => console.log(err));

//단건조회
axios.get('http://localhost:3000/customers/2')
.then(result =>{
  console.log('axios 단건조회');
  console.log(`\t `,result.data)
})
.catch(err => console.log(err));

//등록
let insertInfo={
    name: '예담',
    email: 'gus@naver.com',
    phone: '010-5545-4485',
    address: '123'
};

//fetch
fetch('http://localhost:3000/customers',{
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
 },
  body : JSON.stringify(insertInfo)
})
.then(result => result.json())
.then(result =>{
    console.log('fetch Post');
    console.log(`\t`,result)
  })
  .catch(err => console.log(err));

//axios 등록
axios.post('http://localhost:3000/customers',insertInfo)
.then(result => {
  console.log('axios, 등록');
  console.log(`\t`,result.data);
})
.catch(err => console.log(err));