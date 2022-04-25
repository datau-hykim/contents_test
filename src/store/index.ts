import { createStore } from "vuex"
import { login } from "./modules/login"
import { boilerplate } from "./modules/boilerplate"
import { message } from "./modules/message"
import { qna } from "./modules/qna"
import { refund } from "./modules/refund"
import { search } from "./modules/search"

export default createStore({
  modules: {
    login,
    boilerplate,
    message,
    qna,
    refund,
    search,
  },
})
