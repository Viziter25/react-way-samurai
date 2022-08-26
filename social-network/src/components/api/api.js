import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "688d611e-316e-4024-9fab-2376d6eff74f",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 50) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
  },
  meAuth() {
    return instance.get(`auth/me`);
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => response.data);
  },
};

