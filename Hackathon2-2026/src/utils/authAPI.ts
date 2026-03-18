// src/api/auth.ts
import { apiRequest } from "./RestAPI";
// Login user
export function login(username: string, password: string) {
return apiRequest("/api/auth/login", {
method: "POST",
body: JSON.stringify({ username, password }),
});
}
// Register user
export function register(username: string, password: string) {
return apiRequest("/api/auth/register", {
method: "POST",
body: JSON.stringify({ username, password }),
});
}
// Get current logged-in user
export function getMe() {
return apiRequest("/api/auth/me", {
method: "GET",
});
}
// Logout user
export function logout() {
return apiRequest("/api/auth/logout", {
method: "POST"
});
}