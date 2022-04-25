import { createApp } from "vue"
import ElementPlus from "element-plus"
import ko from "element-plus/es/locale/lang/ko"

import App from "./App.vue"
import router from "./router"
import store from "./store"
import dayjs from "dayjs"

import "element-plus/dist/index.css"
import "@csstools/normalize.css"
import "@/styles/index.scss"

const app = createApp(App)

app.use(store).use(router).use(ElementPlus, { locale: ko }).mount("#app")
app.config.globalProperties.$dayjs = dayjs

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $dayjs: typeof dayjs
  }
}
