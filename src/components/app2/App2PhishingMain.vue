<template>
  <div class="conts-phishing_main">
    <div class="phishing-main_contents">
      <ol class="contents-list">
        <li v-for="(dataItem, dataIdx) in data" :key="dataIdx">
          <button type="button" class="contents-thumb" @click="openThumbPop(dataItem)">
            <span class="img"><img :src="dataItem.CardThumbNail" alt="" /></span>
            <p>{{ dataItem.CardTitle }}</p>
          </button>
        </li>
      </ol>
    </div>
    <div class="phishing-main_paging">
      <button type="button" class="paging-btn" :class="page === 1 && 'active'" @click="changePage(1)">1</button>
      <button type="button" class="paging-btn" :class="page === 2 && 'active'" @click="changePage(2)">2</button>
      <button type="button" class="paging-btn" :class="page === 3 && 'active'" @click="changePage(3)">3</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"
import { MainPhishingDataType } from "@/service/network/request"

export default defineComponent({
  setup() {
    const { state, dispatch } = useStore()
    const data = computed(() => state.app2.MainPhishingData)
    const { params } = useRoute()
    const page = ref(1)

    const setData = async () => {
      await dispatch("app2/requestMainPhishingData", {
        channel: params.channel,
        month: Number(params.month),
        page: page.value,
      })
      console.log("불러오기")
    }
    if (data.value.length !== 4) {
      setData()
    }

    const changePage = (idx: number) => {
      page.value = Number(idx)
      setData()
    }
    const openThumbPop = (dataItem: MainPhishingDataType) => {
      console.log(dataItem)
    }

    return {
      data,
      page,
      changePage,
      openThumbPop,
    }
  },
})
</script>
