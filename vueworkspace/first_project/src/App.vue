<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding">DataBind</router-link> |
    <!-- 이름을 활용해서 불러오는법 -->
    <router-link :to="{name: 'for'}">For</router-link> |
    <router-link to="/if">if</router-link> |
  </nav>
  <router-view/>
  <!-- <hr> -->
  <!-- 자식 컴포넌트를 가져와서 태그로 활용 -->
  <!-- <DataBinding/> -->
</template>
<script>
 // 컴포넌트 추가 1) 자식 컴포넌트로 등록
 //               => 특정 페이지의 조각을 구성
 import DataBinding  from './views/DataBinding.vue';

 export default {
  components: { //자식 컴포넌트 정의
    DataBinding
  }
 }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
