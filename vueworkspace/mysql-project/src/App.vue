<template>
  <!-- Header component -->
   <DefaultHeader/>
  <router-view/>
  <!-- footer component -->
</template>

<script>
import DefaultHeader from './layouts/DefaultHeader.vue';

export default{
  components:{
    DefaultHeader,
  }
}
</script>
<style>
 
</style>
