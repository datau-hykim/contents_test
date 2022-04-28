/* eslint-disable @typescript-eslint/no-unused-vars */
import { requestServer } from "@/service/network/network"
import { Module } from "vuex"
import { RequestData, RootState } from ".."
import { RequestApp2, NewPhishingDataType, MainPhishingDataType } from "@/service/network/request"

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
  NewPhishingData: NewPhishingDataType[]
  MainPhishingData: MainPhishingDataType[]
}

export const app2: Module<App2State, RootState> = {
  namespaced: true,
  state: {
    keywordList: [],
    idx: 0,
    NewPhishingData: [],
    MainPhishingData: [],
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
    async requestNewPhishingData({ commit }) {
      const { data } = await requestServer(RequestApp2.NewPhishingDataForm("123"))
      const result = JSON.parse(data).Body
      result.forEach((element: NewPhishingDataType) => {
        element.Title = decodeURIComponent(escape(window.atob(element.Title)))
        element.Contents = decodeURIComponent(escape(window.atob(element.Contents)))
        element.RegDT = element.RegDT.substring(0, 10)
      })
      commit("SET_NEW_PHISHING_DATA", result)
    },
    async requestMainPhishingData({ commit }, params) {
      const { channel, month, page } = params
      const { data } = await requestServer(RequestApp2.MainPhishingDataForm(channel, month, page))
      const result = JSON.parse(data).Body
      result.forEach((element: MainPhishingDataType) => {
        element.CardThumbNail = "https://images.antiscam.co.kr/" + element.CardThumbNail
        element.CardThumbNailAlt = decodeURIComponent(escape(window.atob(element.CardThumbNailAlt)))
        element.CardTitle = decodeURIComponent(escape(window.atob(element.CardTitle)))
        element.Title = decodeURIComponent(escape(window.atob(element.Title)))
        element.altImages = element.altImages.map((altImgPath: string) =>
          decodeURIComponent(escape(window.atob(altImgPath)))
        )
        element.images = element.images.map((imgPath: string) => "https://images.antiscam.co.kr/" + imgPath)
      })
      commit("SET_MAIN_PHISHING_DATA", result)
    },
  },
  mutations: {
    SET_KEYWORD_LIST(state, payload) {
      const keywords = JSON.parse(payload.data).Body
      setInterval(() => {
        if (keywords[state.idx].Arrow == "") {
          keywords[state.idx].Arrow = "up"
        }
        state.keywordList = keywords[state.idx]
        state.idx++
        if (state.idx === keywords.length) {
          state.idx = 0
        }
      }, 3000)
    },
    SET_NEW_PHISHING_DATA(state, payload) {
      state.NewPhishingData = payload
      console.log("무테이션")
    },
    SET_MAIN_PHISHING_DATA(state, payload) {
      state.MainPhishingData = payload
    },
  },
}
