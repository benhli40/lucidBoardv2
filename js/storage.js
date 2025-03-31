// storage.js – LocalStorage logic for LucidBoard

// Keys
const INSIGHT_KEY = 'lucid-insights';
const CLUTTER_KEY = 'lucid-clutter';

// ===== INSIGHTS =====

export function getInsights() {
  const raw = localStorage.getItem(INSIGHT_KEY);
  try {
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveInsights(data) {
  localStorage.setItem(INSIGHT_KEY, JSON.stringify(data));
}

// ===== CLUTTER =====

export function getClutter() {
  const raw = localStorage.getItem(CLUTTER_KEY);
  try {
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveClutter(data) {
  localStorage.setItem(CLUTTER_KEY, JSON.stringify(data));
}