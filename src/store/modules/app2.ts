/* eslint-disable @typescript-eslint/no-unused-vars */
import { requestServer } from "@/service/network/network"
import { Module } from "vuex"
import { RootState } from ".."
import { RequestApp2, NewPhishingDataType, Keyword } from "@/service/network/request"

export interface App2State {
  keywordList: Keyword[]
  idx: number
  NewPhishingData: NewPhishingDataType[]
}

export const app2: Module<App2State, RootState> = {
  namespaced: true,
  state: {
    keywordList: [],
    idx: 0,
    NewPhishingData: [],
  },
  actions: {
    async selectKeywordList({ state, commit }) {
      const { data } = await requestServer(RequestApp2.GetPhishingkeyword())
      const result = JSON.parse(data).Body
      setInterval(() => {
        if (result[state.idx].Arrow == "") {
          result[state.idx].Arrow = "up"
        }
        state.keywordList = result[state.idx]
        state.idx++
        if (state.idx === result.length) {
          state.idx = 0
        }
      }, 2000)

      commit("SET_KEYWORD_LIST", result)
    },
    async requestNewPhishingData({ commit }) {
      const { data } = await requestServer(RequestApp2.NewPhishingDataForm("123"))
      const result = JSON.parse(data).Body
      result.forEach((element: NewPhishingDataType) => {
        element.Title = decodeURIComponent(escape(window.atob(element.Title)))
        element.RegDT = element.RegDT.substring(5, 10)
      })
      commit("SET_NEW_PHISHING_DATA", result)
    },
  },
  mutations: {
    SET_KEYWORD_LIST(state, payload) {
      state.keywordList = payload
    },
    SET_NEW_PHISHING_DATA(state, payload) {
      state.NewPhishingData = payload
    },
  },
}
