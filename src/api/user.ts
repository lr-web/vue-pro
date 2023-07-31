import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

const baseUrl = import.meta.env.VITE_BASE_URL

export interface LoginData {
  username: string;
  password: string;
  authCode: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return axios.post<LoginRes>(
    `${baseUrl}/login?username=${data.username}&password=${data.password}&authCode=${data.authCode}`,
    data
  );
}

export function logout() {
  return axios.post<LoginRes>('/logout');
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
