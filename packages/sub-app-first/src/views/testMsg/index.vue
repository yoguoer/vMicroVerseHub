<template>
  <div class="test-msg">
    <h1>sub-app-first</h1>
    <h3>测试给主应用发送信息~</h3>
    <el-input class="input-container" type="textarea" :rows="2" v-model="message" placeholder="请输入发送给的信息" />
    <div>
      <el-button @click="testSendMessage" type="primary">点击发送信息</el-button>
      <el-button @click="testReceiveMessage" type="warning">点击接收信息</el-button>
    </div>
  </div>
</template>

<script setup>
import { getMicroAppMessage } from "v-micro-app-plugin";
import { ref } from "vue";
import { ElMessage } from 'element-plus'
const message = ref("");
const microAppMessage = getMicroAppMessage();
function testSendMessage() {
  microAppMessage.sendMessage({
    data: { app: "appFirst", value: `🐔appFirst给主应用发送数据~sendMessage:  ${message.value}` },
    callback: () => {
      console.log(`🐔appFirst使用sendMessage: ${message.value} 发送数据成功，执行回调！`);
    },
  });
  microAppMessage.sendGlobal({
    data: { fun: "sendGlobal", text: `🐆appFirst给全局发送数据~sendGlobal:  ${message.value}`},
    callback: () => {
      console.log(`🐆使用sendGlobal:  ${message.value},发送数据成功，执行回调！`);
    },
  });
  ElMessage(` appFirst发送数据: ${message.value}`)
}

function testReceiveMessage(){
  setTimeout(() => {
    let msg = `🐰appFirst接收到的全局信息：${ JSON.stringify(microAppMessage.getGlobalMessage()) }, 🐰接收到主应用发来的非全局信息：${ JSON.stringify(microAppMessage.getMessage())  }`;
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
