<template>
  <router-view />
</template>

<script setup lang="ts" name="APP">
import { setWaterMark } from "v-watermark-plugin";

// 获取当前时间
const getCurrentDate = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month = String(now.getMonth() + 1).padStart(2, "0"); // 获取月份，确保是两位数格式
  let day = String(now.getDate()).padStart(2, "0"); // 获取日期，确保是两位数格式
  return `${year}${month}${day}`;
};
const today = getCurrentDate();

const options = {
  // text: ["这是水印文本 1", "这是水印文本 2"],
  text: [`Vivien ${today}`],
  color: "rgba(100, 100, 100)",
  opacity: 0.8
};

// 调用 setWaterMark 函数添加水印
setWaterMark(options);
</script>

<style lang="less">
#app {
  margin: 0;
  padding: 0;
}
</style>
