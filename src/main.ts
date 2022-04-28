import { createApp } from "vue"

import App from "./App.vue"
import router from "./router"
import store from "./store"
import dayjs from "dayjs"

import "@/styles/index.scss"
import "normalize.css"

const app = createApp(App)

app.use(store).use(router).mount("#app")
app.config.globalProperties.$dayjs = dayjs

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $dayjs: typeof dayjs
  }
}
