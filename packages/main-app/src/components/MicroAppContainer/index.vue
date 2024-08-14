<template>
  <div :class="[`${prefixCls}-container`]">
    <!-- name：应用名称, url：应用地址 -->
    <micro-app v-bind="options" :name="name" keep-alive></micro-app>
  </div>
</template>
<script setup lang="ts">
import { microAppUtils } from "v-micro-app-plugin";

let name = microAppUtils.getMicroAppName()
let prefixCls = name
 
const props = defineProps<{
  options: {
    [key: string]: any;
  };
}>();


</script>
<style></style>
