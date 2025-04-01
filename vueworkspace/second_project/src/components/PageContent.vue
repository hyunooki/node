<!-- PageContent.vue -->
 <template>
  <table>
<tbody>
    <tr>
      <th>제목</th>
      <td>{{ title }}</td>
      <th>조회수</th>
      <td>{{ readInfo }}</td>
    </tr>
    <tr>
      <th>작성자</th>
      <td>{{ writer }}</td>
      <th>작성일자</th>
      <td>{{ regdate }}</td>
    </tr>
    <tr>
      <th>내용</th>
      <td width="200px;" height="100px">
         {{ content }}
      </td>
    </tr>

  <tr>
    <td>
      <button @click="updateInfo">업데이트</button>
    </td>
   </tr>
   </tbody>
  </table>
 </template>
 <script>
  export default{
  //  props:["title","count","writer","regdate","content"],
  props:{
    title : [String,Object],
    count : {
      type:Number,
      default : 0
    },
    content:String,
    regdate:{
      require :true,
      validator:function(value){
        let format = /[1-2][0-9][0-9]-[0-1][0-9]-[0-3][0-9]/;
        return format.test(value);
      }
    },
    writer:{
    type:String,
    default:function(){
      return{first:'Adward',second :'Ian'}
    }
  }
  },
    computed:{
      readInfo(){
        return this.count +1
      }
    },
    methods :{
      updateInfo(){
        this.$emit('update-info',this.readInfo);
      }
    }
  }
</script>