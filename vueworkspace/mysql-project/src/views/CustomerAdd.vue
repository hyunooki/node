<!--views/CustomerAdd.vue-->
<template>
  <div class="container">
    <div class="row mb-3">
      <label>이름</label>
      <div class="form-group">
      <input type="text" v-model="info.name"/>
    </div>
      <div class="form-text text-danger" :class="{'warning':nameOk}">
        입력되지않았습니다.
      </div>
      <div class="form-text text-success" :class="{'warning':!nameOk}">
        사용 가능한 이름입니다.
      </div>
    </div>
    <div class="row mb-3">
      <div class="form-group">
      <label>이메일</label>
      <input type="email" v-model="info.email"/>
    </div>
    </div>
    <div class="row mb-3" >
      <div class="form-group">
      <label>연락처</label>
      <input type="tel" v-model="info.phone"/>
    </div>
    </div>
    <div class="row mb-3">
      <div class="form-group">
      <label>주소</label>
      <input type="text" v-model="info.address"/>
    </div>
    </div>
    <div class="row mt-3 "> 
      <button class="btn btn-info w-50 "
       v-on:click="addCustomer">
        등록
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
        name:null,
        email:null,
        phone:null,
        address:null        
      }
    }
  },
  computed:{
    nameOk(){
      return (this.info.name != null) && (this.info.name != '');
    }
  },
  methods :{
    async addCustomer(){
     let ajaxRes = await axios.post('/api/customers',this.info)
     .catch(err => console.log(err))
     let sqlRes =ajaxRes.data;
     let custId = sqlRes.insertId;
     if(custId>0){
      alert('정상적으로 등록되었습니다.');
      this.$router.push({name:'customerInfo',query :{id:custId}})
     }else{
      alert('정상적으로 등록되지 않았습니다.');
     }
    }
  }
}
</script>
<style scoped>
.warning{
  display: none;
}
</style> 