<template>
  <div class="main-wrapper">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const { params } = useRoute()
    const { commit } = useStore()
    commit("app2/SET_PCODE", params.channel)
  },
})
</script>
