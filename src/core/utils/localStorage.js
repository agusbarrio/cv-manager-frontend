export const set = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Error set item in localStorage');
  }
};
export const get = (key) => {
  try {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  } catch (error) {
    console.log('Error get item from localStorage');
    return undefined;
  }
};
export const clear = (key) => {
  localStorage.removeItem(key);
};

const localStorageUtils = { set, get, clear };

export default localStorageUtils;
