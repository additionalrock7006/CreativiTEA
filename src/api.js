import fallbackMenu from "../menu.json";

const DEFAULT_LOCAL_API = import.meta.env.DEV ? "http://localhost:7001" : "";
export const API_BASE_URL = (
  import.meta.env.VITE_API_URL || DEFAULT_LOCAL_API
).replace(/\/$/, "");

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
