import { server } from "@/service/constant/constant.json"
import axios, { AxiosResponse } from "axios"

export function serverURL() {
  return process.env.NODE_ENV === "production" ? server.live : server.dev
}
export function requestServer(httpData: object): Promise<AxiosResponse<string, object>> {
  return axios.post(serverURL(), JSON.stringify(httpData))
}
