<template>
  <div class="test-msg">
    <h1>sub-app-second</h1>
    <h3>测试给主应用发送信息~</h3>
    <div>
      <el-button @click="testSendMessage" type="primary">点击发送信息</el-button>
      <el-button @click="testReceiveMessage" type="warning">点击接收信息</el-button>
    </div>
  </div>
</template>

<script setup>
import { getMicroAppMessage } from "v-micro-app-plugin";

const microAppMessage = getMicroAppMessage();
function testSendMessage() {
  microAppMessage.sendMessage({
    data: { app: "appSecond", value: "🦄appSecond给主应用发送数据~sendMessage" },
    callback: () => {
      console.log("🦄appSecond使用sendMessage发送数据成功，执行回调！");
    },
  });
  microAppMessage.sendGlobal({
    data: { fun: "sendGlobal", text: "🐒appSecond给全局发送数据~sendGlobal" },
    callback: () => {
      console.log("🐒appSecond使用sendGlobal发送数据成功，执行回调！");
    },
  });
}

function testReceiveMessage(){
  setTimeout(() => {
    console.log(
      "🐳appSecond接收到的全局信息getGlobalMessage：",
      microAppMessage.getGlobalMessage(),
      "🐳接收到主应用发来的非全局信息getMessage：",
      microAppMessage.getMessage()
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
