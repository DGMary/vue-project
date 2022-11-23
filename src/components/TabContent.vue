<template>
  <div class="tabs-container" v-loading="isLoading">
    <keep-alive>
      <component :is="content" :users="users" :active-users="activeUsers"></component>
    </keep-alive>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Details from "./UserDetails";
import Users from './Users'
import emitter from "./emittery";
import localStorage  from "../utils/localStorage.js"


export default {
  /**
   * Name.
   */
  name: "TabContent",

  /**
   * Components
   */
  components: {
    Details,
    Users,
  },

  created() {
    this.fetchUsers();
  },

  computed: {
    ...mapGetters(['users', 'isLoading'])
  },

  /**
   * Reactive properties.
   * @returns {{}}
   */
  data() {
    return {
      activeUsers: [],
    };
  },

  props: {
    content: {
      type: String,
      required: true
    },
  },

  /**
   * Mounted
   */
   mounted() {
    this.getUsersFromLocalStorage();

    emitter.on('update',  (id) => {            
      this.updateActiveUsers(id)
    })
  },

  /**
   * Methods.
   */
  methods: {
    
    ...mapActions(["fetchUsers"]),

    getUsersFromLocalStorage() {
      let activeUsersSaved = localStorage.get("activeUsersSaved");

      if (activeUsersSaved) {        
        let keys = Object.keys(activeUsersSaved).filter(k => activeUsersSaved[k])
        this.activeUsers = keys.map(el => parseInt(el));
      }
    },
    
    /**
     * Update activeUsers
     */
    updateActiveUsers() {  
      this.getUsersFromLocalStorage();
    },
  },

  /**
   * Before destroy
   */
   beforeDestroy() {
    emitter.off('update');
  },
}
</script>

