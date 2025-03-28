//mapper/sql/customer.js
//TABLE :customers;
const selectAll =`SELECT id,
                         name,
                         email,
                         phone,
                         address
                 FROM customers
               ORDER BY id`;

const selectById = `
   SELECT id,
          name,
          email,
          phone,
          address
    FROM customers
    WHERE id = ?
    ORDER BY id`;

const insertInfo=
`INSERT INTO customers(name,
                      email,
                      phone,
                      address)
VALUES(?,?,?,?)
`;

const updateInfo = 
`UPDATE customers
 SET ?
 WHERE id= ?` //배열[객체 ,단일값]
 /*
   1)? 갯수
   1-1) 1개 : 단일값
   1-2) 2개 이상 :배열

   2) ? 앞에 컬럼의 유무
   2-1) 컬럼이 존재하는 경우 기본데이터 값(문자,숫자)
   2-2) 컬럼이 없는 경우 객체
 */
const deleteInfo = `
 DELETE FROM customers
 WHERE id =?
`
module.exports={
  // 'selectAll' : selectAll
  selectAll,
  selectById,
  insertInfo,
  updateInfo,
  deleteInfo
}