/* eslint-disable @typescript-eslint/no-unused-vars */
import { serverURL, requestServer } from "@/service/network/network"
import { Module } from "vuex"
import { RequestData, RootState } from ".."
import { RequestApp2, NewPhishingDataType, MainPhishingDataType } from "@/service/network/request"
import constant from "@/service/constant/constant.json"

export interface Keyword {
  OrderNum: number
  Title: string
  ChangeNum: number
  Arrow: string
  IconNum: number
}

export interface App2State {
  pcode: string
  keywordList: Keyword[]
  idx: number
  NewPhishingData: NewPhishingDataType[]
  MainPhishingData: MainPhishingDataType[]
  MainPhishingDataPage: number
}

export const app2: Module<App2State, RootState> = {
  namespaced: true,
  state: {
    pcode: "",
    keywordList: [],
    idx: 0,
    NewPhishingData: [],
    MainPhishingData: [],
    MainPhishingDataPage: 1,
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
    async requestNewPhishingData({ state, commit }, payload) {
      const { data } = await requestServer(RequestApp2.NewPhishingDataForm(state.pcode, payload.length, payload.offset))
      const result = JSON.parse(data).Body
      result.forEach((element: NewPhishingDataType) => {
        element.Title = decodeURIComponent(escape(window.atob(element.Title)))
        element.Contents = decodeURIComponent(escape(window.atob(element.Contents)))
      })
      commit("SET_NEW_PHISHING_DATA", result)
    },
    async requestMainPhishingData({ commit }, params) {
      const { channel, month, page } = params
      const { data } = await requestServer(RequestApp2.MainPhishingDataForm(channel, month, page))
      const result = JSON.parse(data).Body
      result.forEach((element: MainPhishingDataType) => {
        element.CardThumbNail = serverURL(constant.image) + element.CardThumbNail
        element.CardThumbNailAlt = decodeURIComponent(escape(window.atob(element.CardThumbNailAlt)))
        element.CardTitle = decodeURIComponent(escape(window.atob(element.CardTitle)))
        element.Title = decodeURIComponent(escape(window.atob(element.Title)))
        element.altImages = element.altImages.map((altImgPath: string) =>
          decodeURIComponent(escape(window.atob(altImgPath)))
        )
        element.images = element.images.map((imgPath: string) => serverURL(constant.image) + imgPath)
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
    },
    SET_MAIN_PHISHING_DATA(state, payload) {
      state.MainPhishingData = payload
    },
    SET_MAIN_PHISHING_DATA_PAGE(state, payload) {
      state.MainPhishingDataPage = payload
    },
    SET_PCODE(state, payload) {
      state.pcode = payload
    },
  },
}
