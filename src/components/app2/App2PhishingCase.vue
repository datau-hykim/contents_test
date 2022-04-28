<template>
  <div class="App2PhishingCase">
    <ul>
      <li @click="goPage(idx)" v-for="(item, idx) in data" :key="idx" class="list-item">
        <div class="item-date" v-if="idx === 0">
          <img src="@/assets/app2-phishingcase-new.png" />
        </div>
        <div class="item-date" v-html="item.RegDT.substring(5)" v-else></div>
        <div class="item-title" :class="{ new: idx === 0 }">{{ item.Title }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const { state, dispatch } = useStore()
    const { push } = useRouter()
    const data = computed(() => state.app2.NewPhishingData)
    const setData = async () => {
      await dispatch("app2/requestNewPhishingData")
    }
    setData()

    const goPage = (idx: number) => {
      push({ name: "phishingcase", params: { idx: idx } })
    }

    return {
      data,
      goPage,
    }
  },
})
</script>
