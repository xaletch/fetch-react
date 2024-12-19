export const setLocalstorage = (name, value) => {
  localStorage.setItem(name, value);
}

export const getLocalstorage = (name) => {
  return localStorage.getItem(name);
}