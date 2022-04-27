<template>
  <div class="keyword-box">
    <div class="keyword-highlight">주요피싱키워드</div>
    <div class="keyword-contents">
      <div class="keyword-news-ticker">
        <div class="keyword-conetnts-text">{{ keywords.OrderNum }}. {{ keywords.Title }}</div>
        <!-- <div class="keyword-conetnts-image">
          <img
            class="keyword-conetnts-image-size"
            :class="[keyword.Arrow]"
            :src="require('@/assets/app2-mainkeyword-ticker_' + keyword.Arrow + '.png')"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { RootState } from "@/store"
import { useStore } from "vuex"
import { computed } from "@vue/runtime-core"

export default defineComponent({
  setup() {
    const store = useStore<RootState>()
    const keywords = computed(() => store.state.app2.keywordList)
    const idx = computed(() => store.state.app2.idx)
    const retrieveData = async () => {
      await store.dispatch("app2/selectKeywordList")
    }
    retrieveData()

    // let idx = 0
    // const getOrderNum = ref(0)
    // onMounted(() => {
    //   getOrderNum.value = keywords.value[idx].OrderNum
    //  })
    // const updateTicker = () => {
    //   if (keywords.value.length - 1 > idx) {
    //     idx++
    //   } else {
    //     idx = 0
    //   }
    //   if (keywords.value[idx].Arrow === "") {
    //     keywords.value[idx].Arrow = "up"
    //   }
    // }
    // updateTicker()
    return {
      keywords,
      idx,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/styles/App2Mainkeyword.scss";
</style>
