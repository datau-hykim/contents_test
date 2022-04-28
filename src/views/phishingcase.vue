<template>
  <div v-if="data[idx]">
    <div>{{ data[idx].Title }}</div>
    <div>{{ data[idx].RegDT }}</div>
    <div v-html="data[idx].Contents"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const { state, dispatch } = useStore()
    const idx = useRoute().params.idx
    const data = computed(() => state.app2.NewPhishingData)
    const setData = async () => {
      await dispatch("app2/requestNewPhishingData")
    }
    setData()
    return {
      data,
      idx,
    }
  },
})
</script>
