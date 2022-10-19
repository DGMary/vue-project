<template>
  <div class="tabs-container">
    <Nav />
    <div class="tabs-content">
      Tabs content
    </div>

    <el-tabs v-model="activeTab">
      <el-tab-pane label="Users" name="users">
        <UserDetails :users="users" :active-users="activeUsers" />
      </el-tab-pane>
      <el-tab-pane label="Table" name="table">
        <Users :users="users" @update="updateActiveUsers"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import UserDetails from "./UserDetails";
import Users from './Users'
import Nav from './Nav.vue'



export default {
  /**
   * Name.
   */
  name: "Tabs",

  /**
   * Components
   */
  components: {
    UserDetails,
    Users,
    Nav
  },

  /**
   * Reactive properties.
   * @returns {{}}
   */
  data() {
    return {
      users: [],
      activeTab: "users",
      activeUsers: [],
    };
  },

  /**
   * Mounted hook.
   */
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => (this.users = json))
      .catch(error => console.log(error.message));
  },

  /**
   * Methods.
   */
  methods: {
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

