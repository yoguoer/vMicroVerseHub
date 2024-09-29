<template>
  <div class="test-msg">
    <h1>main-app</h1>
    <h3>测试给主应用发送信息~</h3>
    <el-input class="input-container" type="textarea" :rows="2" v-model="message" placeholder="请输入发送给的信息" />
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
import { ref } from "vue";
import { ElMessage } from 'element-plus'
const message = ref("");
const microAppMessage = getMicroAppMessage();
function testSendMessageFirst() {
  microAppMessage.sendMessage({
    data: { app: "mainApp", value: `🦊mainApp给appFirst发送数据~sendMessage: ${message.value}`},
    appName: "appFirst",
    callback: () => {
      console.log(`🦊mainApp使用sendMessage: ${message.value} 发送数据成功，执行回调！`);
    },
  });
  ElMessage(`🦊mainApp给appFirst发送数据~sendMessage: ${message.value}`)
}

function testSendMessageSecond() {
  microAppMessage.sendMessage({
    data: { app: "mainApp", value: `🐷mainApp给appSecond发送数据~sendMessage: ${message.value}` },
    appName: "appSecond",
    callback: () => {
      console.log(`🐷mainApp使用sendMessage: ${message.value} 发送数据成功，执行回调！`);
    },
  });
  ElMessage(`🐷mainApp给appSecond发送数据~sendMessage: ${message.value}` )
}

function testSendMessage() {
  microAppMessage.sendGlobal({
    data: { fun: "sendGlobal", text: `🐶mainApp给全局发送数据~sendGlobal: ${message.value}` },
    callback: () => {
      console.log(`🐶mainApp使用sendGlobal: : ${message.value} 发送数据成功，执行回调！`);
    },
  });
  ElMessage(`🐶mainApp给全局发送数据~sendGlobal: ${message.value}` )
}

function testReceiveMessage() {
  setTimeout(() => {
    const msg = `🐸主应用收到的全局信息：${ JSON.stringify(microAppMessage.getGlobalMessage())  }, \n 🐸主应用收到appFirst发来的信息: ${ JSON.stringify(microAppMessage.getMessage('appFirst')) }, \n 🐸主应用收到appSecond发来的信息: ${ JSON.stringify(microAppMessage.getMessage('appSecond')) } `
    ElMessage(msg)
    console.log(msg);
  }, 1000);
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
