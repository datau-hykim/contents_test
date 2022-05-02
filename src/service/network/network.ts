import { server } from "@/service/constant/constant.json"
import axios, { AxiosResponse } from "axios"

export function serverURL(val: any) {
  return process.env.NODE_ENV === "production" ? val["live"] : val["dev"]
}
export function requestServer(httpData: object): Promise<AxiosResponse<string, object>> {
  return axios.post(serverURL(server), JSON.stringify(httpData))
}
