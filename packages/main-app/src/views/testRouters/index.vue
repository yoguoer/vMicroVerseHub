<template>
  <div class="test-msg">
    <h1>main-app</h1>
    <h3>测试给路由跳转</h3>
    <el-input class="input-container" type="textarea" :rows="2" v-model="message" placeholder="请输入跳转参数" />
    <div>
      <el-button @click="testRouterFirstHome" type="primary">appFirst 用户列表页</el-button>
      <el-button @click="testRouterFirstMessage" type="primary">appFirst 测试路由页</el-button>
      <el-button @click="testRouterSecondHome" type="warning"> appSecond 用户列表页</el-button>
      <el-button @click="testRouterSecondMessage" type="warning">appSecond 测试路由页</el-button>
     
    </div>
  </div>
</template>

<script setup>
import  { microAppRouter } from "v-micro-app-plugin";
import { ref,nextTick } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const message = ref("");
function testRouterFirstHome() {
  router.push({name: 'appFirst'})
  nextTick(()=> {
    microAppRouter.push({name: 'appFirst', path: '/firstuser'})
  })
}
function testRouterFirstMessage() {
  router.push({name: 'appFirst'})
  microAppRouter.push({name: 'appFirst', path: '/firsttest-routers'})
}

function testRouterSecondHome() {
  router.push({name: 'appSecond'})
  nextTick(()=> {
    microAppRouter.push({name: 'appSecond', path: '/seconduser'})
  })
}
function testRouterSecondMessage() {
  router.push({name: 'appSecond'})
  nextTick(()=> {
    microAppRouter.push({name: 'appSecond', path: '/secondtest-routers'})
  })
}
 
</script>

<style scoped>
.test-msg {
  text-align: center;
  padding-top: 100px;
  height: 90vh;
  .input-container {
    width: 300px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
}
</style>
