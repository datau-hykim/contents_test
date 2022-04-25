<template>
  <el-menu text-color="white" :router="true" :default-openeds="opend" class="side_cover">
    <template v-for="item in main[0].children" :key="item.path">
      <el-menu-item
        :index="item.path"
        class="side_item"
        :class="{ active_menu: $route.path === `${item.path}` }"
        :route="{ path: item.path }"
      >
        <el-icon>
          <component :is="item.meta.icon" />
        </el-icon>
        {{ item.name }}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import { main } from "@/router"
import { UserFilled, Coin, Message, Phone, Setting } from "@element-plus/icons"

export default defineComponent({
  name: "LayoutSidebar",
  components: {
    UserFilled,
    Coin,
    Message,
    Phone,
    Setting,
  },
  setup() {
    const route = useRoute()
    const opend = ref([route.path])
    return {
      main,
      opend,
    }
  },
})
</script>

<style lang="scss" scoped>
.side_cover {
  background-color: #fc6d00;
  border: none;
}
.side_item {
  color: white;
  font-weight: bold;
  .icons {
    color: white;
  }
}
.side_item:hover {
  background-color: #f1a66c;
}
.active_menu {
  color: #fc6d00 !important;
  background-color: white !important;
  .icons {
    color: #fc6d00;
  }
}
.submenu_title {
  color: white;
  font-weight: bold;
  .icons {
    color: white;
  }
}
/deep/.el-sub-menu__title:hover {
  background-color: #f1a66c;
}
.sub_item {
  background-color: #883b00;
  color: white;
  font-weight: bold;
  padding-left: 20px !important;
}
.sub_item:hover {
  background-color: #f1a66c;
}
</style>
