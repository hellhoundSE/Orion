export const getFromSessionStorage = (key, defaultValue) => {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
};

export const setToSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
