<!-- components/PageTitle.vue -->
 <template>
  <h2>{{ title }}</h2>
 </template>
<script>
 export default{
  //props값은 무조건 Read Only
  props :['title'],
  created(){
    console.log('PageTitle.vue Created!')
  },
  mounted(){
    console.log('PageTitle.vue Mounted')
  }
 }
</script>