<template>
  <div class="phishingcase" v-if="data[idx]">
    <div class="contents-wrapper">
      <div class="contents-title">{{ data[idx].Title }}</div>
      <div class="contents-date">{{ $dayjs(data[idx].RegDT).format("YYYY-MM-DD HH:mm:ss") }}</div>
      <div class="contents-news" v-html="data[idx].Contents"></div>
    </div>
    <div class="button-wrapper">
      <img @click="shareKakao" src="@/assets/phishingcase-share_kakao.jpg" />
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
    const idx = Number(useRoute().params.idx)
    const data = computed(() => state.app2.NewPhishingData)
    const setData = async () => {
      await dispatch("app2/requestNewPhishingData", { length: 1, offset: idx })
    }
    if (data.value.length !== 4) {
      setData()
      console.log("불러오기")
    }
    // @ts-ignore
    const kakao = window.Kakao
    if (!kakao.isInitialized()) kakao.init("bc951a3379957948f164a0928420bea8")
    console.log(kakao.isInitialized())

    // setData()
    return {
      data,
      idx,
      setData,
    }
  },
})
</script>
