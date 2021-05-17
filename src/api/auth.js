import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/Account/Login",
    method: "post",
    data,
  });
}

export function refreshToken() {
  return request({
    url: "/Account/Refresh",
    method: "post",
  });
}

export function getInfo(token) {
  return request({
    url: "/vue-element-admin/user/info",
    method: "get",
    params: { token },
  });
}

export function logout() {
  return request({
    url: "/vue-element-admin/user/logout",
    method: "post",
  });
}
