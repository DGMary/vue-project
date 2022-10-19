<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="Users" name="users">
      <UserDetails :users="users" :active-users="activeUsers" />
    </el-tab-pane>
    <el-tab-pane label="Table" name="table">
      <Users :users="users" @update="updateActiveUsers"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import UserDetails from "./UserDetails";
import Users from './Users'


export default {
  /**
   * Name.
   */
  name: "App",

  /**
   * Components
   */
  components: {
    UserDetails,
    Users,
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

