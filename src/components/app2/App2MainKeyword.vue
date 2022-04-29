<template>
  <div class="App2Mainkeyword">
    <div class="keyword-title">주요피싱키워드</div>
    <div class="keyword-contents">
      <div class="keyword-contents-box">
        <div class="keyword-contents-text">{{ keywords.Title && `${keywords.OrderNum}. ${keywords.Title}` }}</div>
        <div
          class="keyword-contents-img"
          v-if="keywords.Arrow"
          :class="(keywords.Arrow === 'hot' || keywords.Arrow === 'new') && 'box'"
        >
          <img
            class="keyword-contents-image-size"
            :src="require(`@/assets/app2-mainkeyword-ticker_${keywords.Arrow}.png`)"
          />
        </div>
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
    const retrieveData = async () => {
      await store.dispatch("app2/selectKeywordList")
    }
    retrieveData()

    return {
      keywords,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/styles/App2Mainkeyword.scss";
</style>
