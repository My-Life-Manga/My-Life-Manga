import axios from "axios";

// LAUNCH WEBSITE CONFIG
// export const makeRequest = axios.create({
//   baseURL: "https://mylifemanga.com:3000/api/",
//   withCredentials: true,
// });

// LOCAL WEBSITE CONFIG
export const makeRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});
