import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://mylifemanga.com:3000/api/",
  withCredentials: true,
});
