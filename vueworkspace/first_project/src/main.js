// main.js
//Root Vue 객체 생성위해 함수 가져오기
import { createApp } from 'vue' 
//Root Vue 객체 정의파일 가져오기
import App from './App.vue'
// import App from './components/CommonComponents.vue'
//Vue Router 가져오기
import router from './router'



createApp(App).
use(router).
mount('#app')
