const localStorage = {

  exists: (window.localStorage !== undefined),

  isExist(exists) {
    if (!exists) return;
  },

  get(key) {
    this.isExist();
    const data = window.localStorage.getItem(key);
    if (!data) return;
    return JSON.parse(data);
  },

  set(key, data) {
    this.isExist();
    window.localStorage.setItem(key, JSON.stringify(data));
  },

  remove(key) {
    this.isExist();
    window.localStorage.removeItem(key);
  },

  clear() {
    this.isExist();
    window.localStorage.clear();
  }
}

export default localStorage;
