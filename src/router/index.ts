import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import layout from "@/layouts/layout.vue"
import app2 from "@/views/app2.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: layout,
    name: "컨텐츠 레이아웃",
    children: [
      {
        path: "/app2/:channel/:month",
        name: "app2-month",
        component: app2,
      },
      {
        path: "/app2/:channel/:IsMember/:Auth",
        name: "app2-member",
        component: app2,
      },
      {
        path: "/app2",
        name: "app2",
        component: app2,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
