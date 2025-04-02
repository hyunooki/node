<!--CustomerUpdate-->
<template>
  <div class="container">
    <div class="row mb-3">
      <div class="form-group">
      <label>아이디</label>
      <input class="form-control w-50" type="text" v-model="info.id" readonly/>
    </div>
    </div>
    <div class="row mb-3">
      <div class="form-group">
      <label>이름</label>
      <input class="form-control w-50" type="text" v-model="info.name"/>
    </div>
    </div>
    <div class="row mb-3">
      <div class="form-group">
      <label>이메일</label>
      <input  class="form-control w-50" type="email" v-model="info.email"/>
    </div>
    </div>
    <div class="row mb-3" >
      <div class="form-group">
      <label>연락처</label>
      <input  class="form-control w-50"  type="tel" v-model="info.phone"/>
    </div>
    </div>
    <div class="row mb-3">
      <div class="form-group">
      <label>주소</label>
      <input  class="form-control w-50" type="text" v-model="info.address"/>
    </div>
    </div>
    <div class="row mt-3 "> 
      <button class="btn btn-info w-50 "
       v-on:click="updateCustomer">
        수정
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  data(){
    return{
      info:{
        id:null,
        name:null,
        email:null,
        phone:null,
        address:null        
      }
    }
  },
  created(){
    const selectId = this.$route.params.eid;
    this.getCustomerId(selectId);
  },
  
  methods :{
    async getCustomerId(id){
      let result = await axios.get(`/api/customers/${id}`)
                              .catch(err => console.log(err))
        this.info = result.data;
    },
    async updateCustomer(){
      let updateDta = {
        name: this.info.name,
        email:this.info.email,
        phone:this.info.phone,
        address:this.info.address
      }
     let ajaxRes = await axios.put(`/api/customers/${this.info.id}`,updateDta)
     .catch(err => console.log(err))
     let sqlRes =ajaxRes.data;
     console.log(sqlRes);
     let result = sqlRes.affectedRows;
     if(result>0){
      alert('정상적으로 수정되었습니다.');
     }else{
      alert('정상적으로 수정되지 않았습니다.');
     }
    }
  }
}
</script>