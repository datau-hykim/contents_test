<template>
  <div class="App2PhishingCase">
    <ul v-for="(item, idx) in data" :key="idx">
      <li class="list-item">
        <div class="item-date" v-if="idx === 0">
          <img src="@/assets/app2-phishingcase-new.png" />
        </div>
        <div class="item-date" v-else>{{ item.RegDT }}</div>
        <div class="item-title" :class="{ new: idx === 0 }">{{ item.Title }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "vuex"

export default defineComponent({
  setup() {
    const { state, dispatch } = useStore()
    const data = computed(() => state.app2.NewPhishingData)
    const setData = async () => {
      await dispatch("app2/requestNewPhishingData")
    }
    setData()

    return {
      data,
    }
  },
})
</script>
