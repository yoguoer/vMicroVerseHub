<template>
  <div :class="[`${prefixCls}-container`]">
    <!-- name：应用名称, url：应用地址 -->
    <micro-app v-bind="options" :name="options.name" keep-alive></micro-app>
  </div>
</template>
<script setup lang="ts">
import { watch } from "vue";

const props = defineProps<{
  options: {
    [key: string]: any;
  };
}>();

let prefixCls = props.options.name

watch(
  () => props.options,
  (newValue) => {
    prefixCls = newValue.name
  },
  { immediate: true, deep: true }
);
</script>
<style></style>
