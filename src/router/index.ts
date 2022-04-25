import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import layout from "@/layouts/layout.vue"
import login from "@/views/login.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "로그인",
    component: login,
  },
]

export const main: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "CS레이아웃",
    component: layout,
    children: [
      {
        path: "/search",
        name: "가입자 조회",
        meta: { icon: "UserFilled" },
        component: () => import("@/views/search.vue"),
      },
      {
        path: "/refund",
        name: "환불 관리",
        meta: { icon: "Coin" },
        component: () => import("@/views/refund.vue"),
      },
      {
        path: "/message",
        name: "메시지 발송",
        meta: { icon: "Message" },
        component: () => import("@/views/message.vue"),
      },
      {
        path: "/qna",
        name: "1:1 문의 관리",
        meta: { icon: "Phone" },
        component: () => import("@/views/qna.vue"),
      },
      {
        path: "/boilerplate",
        name: "답변 상용구 관리",
        meta: { icon: "Setting" },
        component: () => import("@/views/boilerplate.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes.concat(main),
})

export default router
