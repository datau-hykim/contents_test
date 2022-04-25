import { createStore } from "vuex"
import { sample } from "./modules/sample"

export default createStore({
  modules: {
    sample,
  },
})
