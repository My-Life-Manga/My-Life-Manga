import axios from "axios";

const DEPLOY = process.env.REACT_APP_DEPLOY;
const LOCAL = process.env.REACT_APP_LOCAL;


// export const makeRequest = axios.create({
//   baseURL: DEPLOY,
//   withCredentials: true,
// });

export const makeRequest = axios.create({
  baseURL: LOCAL,
  withCredentials: true,
});

