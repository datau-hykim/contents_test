import { createStore } from "vuex"
import { App2State, app2 } from "./modules/app2"
export interface RequestData {
  Header: { CmdType: string }
  Body: unknown
}

export interface RootState {
  app2: App2State
}
export default createStore<RootState>({
  modules: {
    app2,
  },
})
