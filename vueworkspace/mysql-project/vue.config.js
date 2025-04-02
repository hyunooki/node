const { defineConfig } = require('@vue/cli-service')
let serverOrigin = "http://localhost:3000";
module.exports =
 defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      '^/api' : {
        target : serverOrigin,     //변경할 Origin
        changeOrigin : true,       //origin 변경
        ws :false,                 //websocet을 끔
        pathRewrite : {'^/api':'/'}//경로 재작성
      }
    }
  }
})