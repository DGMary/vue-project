<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="Users" name="users">
      <TabUsers :users="users" :active-users="activeUsers" />
    </el-tab-pane>
    <el-tab-pane label="Table" name="table">
      <TabTable :users="users" @update="updateActiveUsers"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import TabUsers from "./TabUsers";
import TabTable from './TabTable'


export default {
  /**
   * Name.
   */
  name: "App",

  /**
   * Components
   */
  components: {
    TabUsers,
    TabTable,
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
    updateActiveUsers(el) {
      this.activeUsers = el;
      console.log(el, "test emit", this.activeUsers);
      // this.selectedUsers = Object.entries(values)
      //   .filter((e) => e[1])
      //   .map((e) => {
      //     return e[0];
      //   });
    },
  },
}
</script>

<style>

</style>