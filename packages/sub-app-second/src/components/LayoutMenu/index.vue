<template>
  <div
    :class="
      microBaseApp
        ? 'second-vertical-container'
        : 'second-horizontal-container'
    "
  >
    <div class="layout-top">
      <el-menu
        :default-active="activeIndex"
        :mode="microBaseApp ? 'vertical' : 'horizontal'"
        @select="handleSelect"
      >
        <div v-for="item in menuList" :index="item.name" :key="item.name">
          <el-sub-menu v-if="item.children && item.children.length > 0">
            <template #title>{{ item.title }}</template>
            <el-menu-item
              v-for="child in item.children"
              :key="child.name"
              :index="child.name"
            >
              {{ child.title }}
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else :key="item.name" :index="item.name"
            >{{ item.title }}
          </el-menu-item>
        </div>
        <el-menu-item
          index="slot"
          class="slot-area"
          v-if="!(microBaseApp)"
        >
          <span slot="title" @click="goHome"> ↩ 返回首页</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="layout-bottom">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup title="Menu">
import {computed, reactive, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { microAppUtils } from "v-micro-app-plugin";
import menus from "@/settings/menus"
const { isBaseApp, isMicroApp } = microAppUtils;
const _isBaseApp = isBaseApp();
const _isMicroApp = isMicroApp();

const router = useRouter();
const route = useRoute();

const menuList = reactive(menus);

const activeIndex = ref("secondtestMsg");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log("key:", key, "keyPath:", keyPath);
  router.push({ name: key });
  activeIndex.value = key;
};
const microBaseApp = computed(() => {
  return _isMicroApp && !_isBaseApp 
});
const goHome = ()=>{
  router.push({ name: 'home' });
} 

watch(
  () => route,
  (newValue) => {
    activeIndex.value = newValue?.name;
  },
  { immediate: true, deep: true }
);
</script>
<style lang="less">
.second-vertical-container,
.second-horizontal-container {
  width: 99vw;
  display: flex;
  flex-direction: column;
}
.second-vertical-container {
  flex-direction: row;
  .el-menu {
    width: 300px;
  }
}
.layout-top {
  overflow: hidden;
}
.layout-bottom {
  width: 100%;
  height: 100vh;
  border-left: 1px solid #eee;
}
:deep(.el-menu) {
  width: 300px !important;
}
.slot-area {
  position: absolute;
  right: 0;
}
</style>
