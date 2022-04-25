import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import sample from "@/views/sample.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/sample",
    name: "샘플",
    component: sample,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
