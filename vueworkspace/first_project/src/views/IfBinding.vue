<!-- views/IfBinding.vue-->
 <template>
  <div>
    <input type="number" v-model.lazy="grade">
    <p v-if="grade>=90">성적 :A </p>
    <p v-else-if="grade>=80">성적 :B </p>
    <p v-else-if="grade>=70">성적 :C </p>
    <p v-else>성적 :D </p>
    <hr>
    <input type="checkbox" v-model="chData">동의여부
    <br>
    <button v-show="chData">다은단계로 진행</button>
  </div>
 </template>
 <script>
 export default{
  data(){
    return {
      grade : 80,
      chData : false
    }
  }
 }
</script>