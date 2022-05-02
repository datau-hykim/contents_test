<template>
  <div>
    <img alt="매일 19억원 피해 금액 발생" src="@/assets/app2-main.jpg" />
    <img alt="최근 5년간 보이스피싱 피해현황" src="@/assets/app2-banner.jpg" />
    <section>
      <app-2-main-keyword />
    </section>
    <section class="section-phishing_case">
      <h2>신종 금융사기 사례</h2>
      <app-2-phishing-case />
    </section>
    <img src="@/assets/app2-banner2.jpg" />
    <section class="section-phishing_case">
      <h2>주요 금융사기 유형</h2>
      <app-2-phishing-main />
      <phishingcase />
    </section>
    <section class="section-phishing_damage">
      <app-2-phishing-damage />
    </section>
    <section>
      <app-2-btn-link />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import App2PhishingCase from "@/components/app2/App2PhishingCase.vue"
import App2MainKeyword from "@/components/app2/App2MainKeyword.vue"
import App2PhishingMain from "@/components/app2/App2PhishingMain.vue"
import App2PhishingDamage from "@/components/app2/App2PhishingDamage.vue"
import Phishingcase from "./phishingcase.vue"
import App2BtnLink from "@/components/app2/App2BtnLink.vue"

export default defineComponent({
  components: { App2MainKeyword, App2PhishingCase, App2PhishingMain, App2PhishingDamage, Phishingcase, App2BtnLink },
  // setup() {

  // },
})
</script>
