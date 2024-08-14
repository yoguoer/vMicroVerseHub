<template>
  <div :class="[`${prefixCls}-container`]">
    <!-- name：应用名称, url：应用地址 -->
    <micro-app v-bind="options" :name="name"></micro-app>
  </div>
</template>
<script setup lang="ts">
import { microAppUtils } from "v-micro-app-plugin";
import { watch } from "vue";

const props = defineProps<{
  options: {
    [key: string]: any;
  };
}>();

let name = microAppUtils.getMicroAppName(props.options?.name)
let prefixCls = name

watch(
  () => props.options,
  (newValue) => {
    name = microAppUtils.getMicroAppName(newValue.name)
    prefixCls = name
  },
  { immediate: true, deep: true }
);
</script>
<style></style>
