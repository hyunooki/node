<!-- DefaultHeader.vue-->
 <template>
  <nav class="nav d-flex justify-content-center">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'customerList'}">전체조회</router-link>|
    <router-link :to="{name:'customerAdd'}">등록</router-link>
  </nav>
 </template>