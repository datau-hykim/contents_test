/* eslint-disable @typescript-eslint/no-unused-vars */
import { requestServer } from "@/service/network/network"
import { Module } from "vuex"
import { RequestData, RootState } from ".."

export interface Keyword {
  OrderNum: number
  Title: string
  ChangeNum: number
  Arrow: string
  IconNum: number
}

export interface App2State {
  keywordList: Keyword[]
  idx: number
}

export const app2: Module<App2State, RootState> = {
  namespaced: true,
  state: {
    keywordList: [],
    idx: 0,
  },
  actions: {
    async selectKeywordList({ commit }) {
      const httpData: RequestData = {
        Header: {
          CmdType: "GetPhishingkeyword",
        },
        Body: {
          Length: 4,
          Offset: 0,
        },
      }
      const result = await requestServer(httpData)
      if (result) commit("SET_KEYWORD_LIST", result)
    },
  },
  mutations: {
    SET_KEYWORD_LIST(state, payload) {
      const keywords = JSON.parse(payload.data).Body
      setInterval(() => {
        state.keywordList = keywords[state.idx]
        state.idx++
        if (state.idx === keywords.length) {
          state.idx = 0
        }
      }, 1000)
    },
  },
}
