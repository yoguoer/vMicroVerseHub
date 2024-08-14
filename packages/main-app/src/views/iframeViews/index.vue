<template>
  <div ref="iframeContainers" v-if="loading">
    <iframe
      :key="name"
      :src="url"
      height="100%"
      width="100%"
      sandbox="allow-scripts allow-same-origin"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

let route = useRoute() // 获取当前路由信息

const iframeContainers = ref(null)
let url = ref(null)
let name =  ref(null)
let loading = ref(false)

onMounted(() => {
})

onUnmounted(() => {
})

watch(
  () => route,
  (newRoute) => {
    loading.value = true
    url.value = newRoute.meta.iframeUrl
    name.value = newRoute.name
  },
  { immediate: true, deep: true }
)
</script>

<style scoped>
</style>
