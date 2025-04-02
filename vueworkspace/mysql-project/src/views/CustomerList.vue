<!-- views/customerList -->
<template>
  <div class="container">
    <table class="table">
      <caption>Total : {{ count }}</caption>
      <thead>
        <tr>
          <th>No</th>
          <th>아이디</th>
          <th>이름</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="count>0">
          <tr v-for="(item,idx) in customerList" 
           :key="item.id" @click="goToCuntomerInfo(item.id)">
            <td>{{idx+1}}</td>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.phone}}</td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="4" style="text-align: center;">값이 없습니다.</td>
        </tr>
      </tbody>
    </table>
  </div>
 </template>

 <script>
 import axios from 'axios'; //=> AJAX

 
 export default{
  data(){
    return{
      customerList :[],
    }
  },
  computed : {
    count(){
      return this.customerList.length;
    }
  },
  created(){
    this.getCustomerList();
  },
  methods:{
    async getCustomerList(){ //http://localhost:3000/customers
      let ajaxRes = await axios.get(`/api/customers`)
                          .catch(err=>console.log(err));
      this.customerList = ajaxRes.data
    },
    goToCuntomerInfo(custId){
      //query:{key:value}=> ?key=value
      this.$router.push({name:'customerInfo',query:{id:custId}});
      //params
      // 1) route의 path 속성: '/target/:uId'
      // 2) params : {uId : value} => /target/value
    }
  }
 }
</script>

<style scoped>
</style>