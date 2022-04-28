<template>
  <div class="phishingcase" v-if="data[idx]">
    <div class="contents-wrapper">
      <div class="contents-title">{{ data[idx].Title }}</div>
      <div class="contents-date">{{ data[idx].RegDT }}</div>
      <div class="contents-news" v-html="data[idx].Contents"></div>
    </div>
    <div class="button-wrapper">
      <img src="@/assets/phishingcase-share_kakao.jpg" />
      <img src="@/assets/phishingcase-join_antiscam.jpg" />
    </div>
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
