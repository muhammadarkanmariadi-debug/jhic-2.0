import { apiFetch } from "./api";

export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  roleName: string;
  division?: string | null;
  permissions: string[];
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}

export const authApi = {
  login: (email: string, password: string) =>
    apiFetch<LoginResponse>("/api/auth/login", { method: "POST", body: { email, password } }),

  register: (data: { email: string; password: string; fullName: string; roleName?: string }) =>
    apiFetch<{ message: string; user: { id: string; email: string; fullName: string } }>(
      "/api/auth/register",
      { method: "POST", body: data }
    ),

  me: (token: string) => apiFetch<{ user: AuthUser }>("/api/auth/me", { token }),
};
