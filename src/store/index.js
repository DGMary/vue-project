import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    error: '',
    isLoading: false,
  },

  mutations: {
    setUsers(state, users){
      state.users = users
    },
    loading (state,  loadingStatus){
      state.isLoading = loadingStatus
    },
    postError(state, err) {
      state.error = err;
      console.error(state.error);
    }
  },

  actions: {
    async fetchUsers({commit}) {
      commit("loading", true);
      try {        
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        commit("setUsers", data);
      } catch (err) {
        commit('postError', err);
      } finally {
        commit("loading", false);
      }
    },
  },
  
  getters: {
    users(state) {
      return state.users;
    },

    isLoading(state) {
      return state.isLoading;
    },
  },
})