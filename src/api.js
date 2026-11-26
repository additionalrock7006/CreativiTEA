import fallbackMenu from "../menu.json";

export const API_BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

export function normalizeMenuData(data) {
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.items)) return data.items;
  if (data && Array.isArray(data.menu)) return data.menu;
  return [];
}

export function getFallbackMenu() {
  return normalizeMenuData(fallbackMenu);
}

export function apiUrl(path) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return API_BASE_URL ? `${API_BASE_URL}${cleanPath}` : cleanPath;
}
