import axios from "axios"
export const api = axios.create({
  baseURL: "https://localhost:3333"
  //baseURL: "https://54.233.90.83:3333"
})
