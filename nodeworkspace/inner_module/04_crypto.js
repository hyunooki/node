//04_crypto.js
const crypto = require('crypto');
const data = 'pw1234';
let secret ='adwkefdsw';
let encData = crypto.createHmac('sha512',secret)//알고리즘 고르기 sha512
                     .update(data)
                     .digest('base64'); //알고리즘을 출력하고 나서 몇글자로 출력하고 싶은지 결정
console.log(encData)
