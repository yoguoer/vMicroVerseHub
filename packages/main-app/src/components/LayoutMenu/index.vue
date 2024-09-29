<template>
  <div :class="_isMicroApp && !_isBaseApp ? 'vertical-container' : 'horizontal-container'">
    <div class="layout-top">
      <el-menu
        :default-active="activeIndex"
        :mode="_isMicroApp && !_isBaseApp ? 'vertical' : 'horizontal'"
        @select="handleSelect"
      >
        <div v-for="item in menuList" :index="item.name" :key="item.name">
          <el-sub-menu v-if="item.children && item.children.length > 0">
            <template #title>{{ item.title }}</template>
            <el-menu-item v-for="child in item.children" :key="child.name" :index="child.name">
              {{ child.title }}
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else :key="item.name" :index="item.name">{{ item.title }} </el-menu-item>
        </div>
        <el-menu-item index="slot" class="slot-area" v-if="!(_isMicroApp && !_isBaseApp)">
          <span slot="title" @click="goHome"> ↩ 返回首页</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="layout-bottom" v-if="isMicroAppView">
      <MicroAppContainer :options="microAppOptions" />
    </div>
    <div class="layout-bottom" v-else>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup title="Menu">
import { watchEffect, ref, reactive, type Ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import MicroAppContainer from "@/components/MicroAppContainer/index.vue";
import { isEmpty, isNullOrUnDef } from "@/utils/is";
import { microAppUtils } from "v-micro-app-plugin";

const { isBaseApp, isMicroApp } = microAppUtils;
const _isBaseApp = isBaseApp();
const _isMicroApp = isMicroApp();

const router = useRouter();
const route = useRoute();
let isMicroAppView: Ref = ref(false);
let microAppOptions: Ref = ref({});

watchEffect(async () => {
  microAppOptions.value = route.meta.microAppOptions;
  isMicroAppView.value = !isNullOrUnDef(microAppOptions.value) && !isEmpty(microAppOptions.value);
});

const menuList = reactive([
  { title: "子应用A", name: "appFirst" },
  { title: "子应用B", name: "appSecond" },
  {
    title: "其它",
    name: "mainuser",
    children: [
      { title: "mainauth", name: "mainauth" },
      { title: "maingroup", name: "maingroup" }
    ]
  },
  { title: "测试通信", name: "maintestMsg" }
]);

const activeIndex = ref("maintest");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log("key:", key, "keyPath:", keyPath);
  router.push({ name: key });
  activeIndex.value = key;
};

const goHome = () => {
  router.push({ name: "home" });
};

watch(
  () => route,
  newValue => {
    activeIndex.value = newValue?.name;
  },
  { immediate: true, deep: true }
);
</script>
<style lang="less">
.vertical-container,
.horizontal-container {
  width: 99vw;
  display: flex;
  flex-direction: column;
}
.vertical-container {
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
.slot-area {
  position: absolute;
  right: 0;
}
</style>
