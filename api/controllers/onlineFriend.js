import { makeRequest } from 'axios';

export const getOnlineUsers = () => {
  return makeRequest.get("/online-users").then((res) => {
    return res.data;
  });
};