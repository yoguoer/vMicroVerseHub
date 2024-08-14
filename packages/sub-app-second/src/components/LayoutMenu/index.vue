<template>
  <div class="container">
    <div class="layout-top">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
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
          <el-menu-item v-else :key="item.name" :index="item.name">{{
            item.title
          }}</el-menu-item>
        </div>
      </el-menu>
    </div>
    <div class="layout-bottom">
      <router-view />
  </div>
  </div>
</template>

<script lang="ts" setup title="Menu">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const menuList = reactive([
  { title: "appSecond菜单1", name: "userList" },
  {
    title: "appSecond菜单2",
    name: "group",
    children: [
      { title: "auth", name: "auth" },
      { title: "group", name: "group" },
    ],
  },
]);

const activeIndex = ref("测试");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log("key:", key, "keyPath:", keyPath);
  router.push({ name: key });
};
</script>
<style lang="less">
.container {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.layout-top {
  width: 100vw;
}
.layout-bottom{
  margin-top:60px;
}
</style>
