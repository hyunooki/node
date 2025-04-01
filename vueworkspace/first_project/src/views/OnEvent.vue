<!-- views/OnEvnet.vue -->
 <template>
   <div>
     <!--keyup alt와 enter을 누르면 이벤트 발생-->
     <input v-model="msg" v-on:keyup.alt.enter="clear()">
     <p>{{ msg }}</p>
   </div>
   <hr>
   <form  @click.self="message('form')">
    form
     <div v-on:click.once="message('div')">
       div
       <p @click.stop="message('p')">
        P
        <a @click.prevent="message('a')"
            href="http://www.naver.com">네이버</a>
       </p>
     </div> 
   </form>
   <hr>
   <button @click="increaseCounter">
      Add 1
   </button>
   <br>
   <button @click="setCount(num,$event)"> 
      Add {{num}}
  </button>
  <p>The counter is : {{ counter }}</p>
 </template>
 <script>
 export default{
   data(){
    return{
        msg : '',
        num : 7,
        counter : 0,
      }
     },
     methods:{
      clear(){
        this.msg='';
      },
      message(tag){
        alert(tag);
      },
      increaseCounter(event){
        console.log('increase',event)
        this.counter++;
      },
      setCount(value,event){
        console.log('setCount',event);
        this.counter += value;
      }
     }
  }
</script>
<style scoped>
form,form *{
  margin: 10px;
  border: 1px solid saddlebrown;
}
</style>