<template>
  <div class="home">
    <h1>sub-app-first</h1>
    <el-button @click="goPage" type="primary">点我进入！！！</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goPage() {
  router.push({ name: "firsttest" });
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  position: absolute;
  top: 0;
  left: 0;
}
</style>
