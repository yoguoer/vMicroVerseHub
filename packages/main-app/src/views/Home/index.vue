<template>
  <div class="home">
    <h1>main-app</h1>
    <el-button @click="goPage" type="primary">点我进入！！！</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goPage() {
  router.push({ name: "appFirst" });
}
</script>

<style scoped>
.home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
}
</style>
