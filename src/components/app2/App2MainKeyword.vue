<template>
  <div class="keyword-box">
    <div class="keyword-highlight">주요피싱키워드</div>
    <div class="keyword-contents">
      <div class="keyword-news-ticker">
        <div class="keyword-conetnts-text">{{ keyword.OrderNum }}. {{ keyword.Title }}</div>
        <div class="keyword-conetnts-image">
          <img
            class="keyword-conetnts-image-size"
            :class="[keyword.Arrow]"
            :src="require('@/assets/app2-mainkeyword-ticker_' + keyword.Arrow + '.png')"
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
import { computed, onMounted, ref } from "@vue/runtime-core"
import { Keyword } from "@/store/modules/app2"

export default defineComponent({
  setup() {
    const store = useStore<RootState>()
    const keywords = computed(() => store.state.app2.keywordList)
    const keyword = ref<Keyword>({
      OrderNum: 0,
      Title: "",
      ChangeNum: 0,
      Arrow: "",
      IconNum: 0,
    })
    const retrieveData = async () => {
      await store.dispatch("app2/selectKeywordList")
    }
    let idx = 0
    console.log(keywords.value[idx].OrderNum)

    retrieveData()
    const getOrderNum = ref(0)
    onMounted(() => {
      getOrderNum.value = keywords.value[idx].OrderNum
    })
    const updateTicker = () => {
      if (keywords.value.length - 1 > idx) {
        idx++
      } else {
        idx = 0
      }
      if (keywords.value[idx].Arrow === "") {
        keywords.value[idx].Arrow = "up"
      }
    }
    updateTicker()
    return {
      keywords,
      keyword,
      getOrderNum,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/styles/App2Mainkeyword.scss";
</style>
