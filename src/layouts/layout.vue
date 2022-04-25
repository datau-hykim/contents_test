<template>
  <el-container>
    <el-aside class="aside" width="200px"><layout-sidebar /></el-aside>
    <el-container class="wrapper">
      <el-header class="header">
        <layout-header />
      </el-header>
      <el-main class="main">
        <h1>{{ route.name }}</h1>
        <router-view
      /></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import LayoutSidebar from "@/components/LayoutSidebar.vue"
import { useRoute } from "vue-router"
import LayoutHeader from "@/components/LayoutHeader.vue"

export default defineComponent({
  name: "layout",
  setup() {
    const route = useRoute()
    return {
      route,
    }
  },
  components: {
    LayoutSidebar,
    LayoutHeader,
  },
})
</script>

<style lang="scss" scoped>
.aside {
  height: 100%;
  position: fixed;
  background-color: #fc6d00;
  overflow-x: hidden;
  z-index: 99;
}
.wrapper {
  padding-left: 200px;
}
.header {
  padding-top: 20px;
  min-width: 400px;
}
</style>
