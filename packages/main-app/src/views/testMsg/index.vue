<template>
  <div class="test-msg">
    <h1>main-app</h1>
    <h3>测试给主应用发送信息~</h3>
    <div>
      <el-button @click="testSendMessageFirst" type="primary">点击给appFirst发信息</el-button>
      <el-button @click="testSendMessageSecond" type="warning">点击给appSecond发信息</el-button>
      <el-button @click="testSendMessage" type="success">点击给全局发信息</el-button>
      <el-button @click="testReceiveMessage">点击接收信息</el-button>
    </div>
  </div>
</template>

<script setup>
import { getMicroAppMessage } from "v-micro-app-plugin";

const microAppMessage = getMicroAppMessage();

function testSendMessageFirst() {
  microAppMessage.sendMessage({
    data: { app: "mainApp", value: "🦊mainApp给appFirst发送数据~sendMessage" },
    appName: "appFirst",
    callback: () => {
      console.log("🦊mainApp使用sendMessage发送数据成功，执行回调！");
    },
  });
}

function testSendMessageSecond() {
  microAppMessage.sendMessage({
    data: { app: "mainApp", value: "🐷mainApp给appSecond发送数据~sendMessage" },
    appName: "appSecond",
    callback: () => {
      console.log("🐷mainApp使用sendMessage发送数据成功，执行回调！");
    },
  });
}

function testSendMessage() {
  microAppMessage.sendGlobal({
    data: { fun: "sendGlobal", text: "🐶mainApp给全局发送数据~sendGlobal" },
    callback: () => {
      console.log("🐶mainApp使用sendGlobal发送数据成功，执行回调！");
    },
  });
}

function testReceiveMessage() {
  setTimeout(() => {
    console.log(
      "🐸主应用收到的全局信息getGlobalMessage：",
      microAppMessage.getGlobalMessage(),
      "🐸主应用收到appFirst发来的信息getMessage：",
      microAppMessage.getMessage('appFirst'),
      "🐸主应用收到appSecond发来的信息getMessage：",
      microAppMessage.getMessage('appSecond')
    );
  }, 1000);
}
</script>

<style scoped>
.test-msg {
  text-align: center;
  padding-top: 100px;
  height: 90vh;
}
</style>
