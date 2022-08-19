import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "920904e7-e191-49aa-9779-dd972620bcd3",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 50) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const followAPI = {
  followUser(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
};

export const unfollowAPI = {
  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};

export const authAPI = {
  meAuth() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
}
