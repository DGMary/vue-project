import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    error: '',
  },

  mutations: {
    setUsers(state, users){
      state.users = users
    }
  },

  actions: {
    async fetchUsers(context) {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        context.commit("setUsers", data);
      } catch (err) {
        context.error = err;
        return console.error(context.error);
      }
    },
  },
  
  getters: {
    users(state) {
      return state.users;
    },
  },
})