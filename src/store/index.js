import { createStore } from 'vuex'
import localStorage from '../utils/localStorage';

export default createStore({
  state: {
    users: [],
    error: '',
    isLoading: false,
  },

  mutations: {
    setUsers(state, users){
      state.users = users;
      localStorage.set("users",  state.users);
    },
    loading (state,  loadingStatus){
      state.isLoading = loadingStatus
    },
    postError(state, err) {
      state.error = err;
    }
  },

  actions: {
    async fetchUsers({commit}) {
      const savedUsers = localStorage.get("users");
      commit("loading", true);

      if (savedUsers) {
        commit("setUsers", savedUsers);        
      } else {  
        try {        
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await response.json();
          commit("setUsers", data);
        } catch (err) {
          commit('postError', err);
          return console.error(this.state.error);
        }
      }

      commit("loading", false);
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