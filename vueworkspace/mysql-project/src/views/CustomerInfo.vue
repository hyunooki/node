<!-- views/CustomerInfo.vue -->
 <template>
  <div class="container text-center">
    <!-- content 영역-->
    <div class="row mt-5" style="border: 2px solid black;" >
      <div class="row">
        <div class="col-4">아이디</div>
        <div class="col-8">{{ customer.id }}</div>
      </div>
      <div class="row">
        <div class="col-4">이름</div>
        <div class="col-8">{{ customer.name }}</div>
      </div>
      <div class="row">
        <div class="col-4">이메일</div>
        <div class="col-8">{{ customer.email }}</div>
      </div>
      <div class="row">
        <div class="col-4">연락처</div>
        <div class="col-8">{{ customer.phone }}</div>
      </div>
      <div class="row">
        <div class="col-4">주소</div>
        <div class="col-8">{{ customer.address }}</div>
      </div>
    </div>
    <!-- button 영역-->
    <div class="row mt-3">
      <button class="col btn btn-info me-5" @click="goToUpdateForm()">
        수정
      </button>
      <button class="col btn btn-secondary me-5" @click="goToCustomerList()">
        목록
      </button>
      <button class="col btn btn-danger" @click="delInfo()">
        삭제
      </button>
    </div>
  </div>
 </template>
 <script>

import axios from 'axios';

export default{
  data(){
    return { 
      customer : {}
     }
    },
    created(){
    const selectId = this.$route.query.id;
    this.getCustomerId(selectId);
  },
  methods :{
    async getCustomerId(id){
      let result = await axios.get(`/api/customers/${id}`)
                              .catch(err => console.log(err))
        this.customer = result.data;
    },
    async delInfo(){
      let result = await axios.delete(`/api/customers/${this.customer.id}`)
                               .catch(err=> console.log(err))
        if(result.data.affectedRows>0){
          alert('정상적으로 삭제 되었습니다.')
          this.$router.push('/customerList')
        }else{
           alert('삭제 실패')
        }
    },
    goToUpdateForm(){
      this.$router.push({name:'customerUpdate',params:{eid:this.customer.id}})
    },
    goToCustomerList(){
      this.$router.push('/customerList')
    }

  }
}
</script>