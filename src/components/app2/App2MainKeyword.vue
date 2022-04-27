<template>
  <div class="keyword-box">
    <div class="keyword-highlight">주요피싱키워드</div>
    <div class="keyword-contents">
      <div class="keyword-news-ticker">
        <div class="keyword-contents-text">{{ keywords.Title && `${keywords.OrderNum}. ${keywords.Title}` }}</div>
        <div class="keyword-contents-image">
          <img
            class="keyword-contents-image-size"
            v-bind:class="[keywords.Arrow]"
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
import { computed, ref } from "@vue/runtime-core"

export default defineComponent({
  setup() {
    const Example = ref<string>("")
    const store = useStore<RootState>()
    const keywords = computed(() => store.state.app2.keywordList)

    const retrieveData = async () => {
      await store.dispatch("app2/selectKeywordList")
    }
    retrieveData()
    return {
      keywords,
      Example,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/styles/App2Mainkeyword.scss";
</style>
