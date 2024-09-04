<template>
  <div class="test-msg">
    <h1>main-app</h1>
    <h3>测试给路由跳转</h3>
    <el-input class="input-container" type="textarea" :rows="2" v-model="message" placeholder="请输入跳转参数" />
    <div>
      <el-button @click="testRouterFirstHome" type="primary">appFirst 首页</el-button>
      <el-button @click="testRouterFirstMessage" type="primary">appFirst 测试通信页</el-button>
      <el-button @click="testRouterSecondHome" type="warning"> appSecond 首页</el-button>
      <el-button @click="testRouterSecondMessage" type="warning">appSecond 测试通信页</el-button>
     
    </div>
  </div>
</template>

<script setup>
import  {microAppRouter,getRounterInstance} from "v-micro-app-plugin";
import { ref } from "vue";
console.log("🚀 ~ microAppRouter:", microAppRouter,getRounterInstance)
const message = ref("");
function testRouterFirstHome() {}
function testRouterFirstMessage() {}

function testRouterSecondHome() {}
function testRouterSecondMessage() {}
 
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
