<template>
  <div class="test-msg">
    <h1>sub-app-second</h1>
    <h3>测试给路由跳转参数</h3>
    <el-input class="input-container" type="textarea" :rows="2" v-model="message" placeholder="请输入跳转参数" />
    <div>
      <el-button @click="testRouterFirstHome" type="primary">main 首页</el-button>
      <el-button @click="testRouterFirstMessage" type="primary">main 测试通信页</el-button>
      <el-button @click="testRouterSecondHome" type="warning"> appFirst 首页</el-button>
      <el-button @click="testRouterSecondMessage" type="warning">appFirst 测试通信页</el-button>
    </div>
  </div>
</template>

<script setup>
import { microAppRouter } from "v-micro-app-plugin";
import { ref } from "vue";
const message = ref("");
function testRouterFirstHome() {
  microAppRouter.push({ name: "mainApp", path: "/home" });
}
function testRouterFirstMessage() {
  microAppRouter.push({ name: "mainApp", path: "/maintestMsg" });
}

function testRouterSecondHome() {
  microAppRouter.push({ name: "appFirst", path: "/home" });
}
function testRouterSecondMessage() {
  microAppRouter.push({ name: "appFirst", path: "/firsttestMsg" });
}
</script>

<style scoped>
.test-msg {
  height: 90vh;
  padding-top: 100px;
  text-align: center;
  .input-container {
    width: 300px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
}
</style>
