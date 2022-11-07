<template>
  <div class="tabs-container">
    <keep-alive>
      <component :is="content" :users="users" :active-users="activeUsers" @update="updateActiveUsers"></component>
    </keep-alive>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Details from "./UserDetails";
import Users from './Users'

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
    ...mapGetters(['users'])
  },

  /**
   * Reactive properties.
   * @returns {{}}
   */
  data() {
    return {
      activeUsers: []
    };
  },

  props: {
    content: {
      type: String,
      required: true
    },
  },

  /**
   * Methods.
   */
  methods: {
    
    ...mapActions(["fetchUsers"]),
    
    /**
     * Update activeUsers
     */
    updateActiveUsers(id) {
       if (this.activeUsers.includes(id)) {
        this.activeUsers = this.activeUsers.filter(userId => userId != id);
      } else {
        this.activeUsers.push(id);
      }
    },
  },
}
</script>

