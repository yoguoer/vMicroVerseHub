<template>
  <div class="home">
    <h1>sub-app-Second</h1>
    <el-button @click="goPage" type="primary">点我进入！！！</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goPage() {
  router.push({ name: "secondtestMsg" });
}
</script>

<style scoped>
.home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
}
</style>
