<template>
  <div class="tabs-container">
    <keep-alive>
      <component :is="content" :users="users" :active-users="activeUsers" @update="updateActiveUsers"></component>
    </keep-alive>
  </div>
</template>

<script>
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

  /**
   * Reactive properties.
   * @returns {{}}
   */
  data() {
    return {
      users: [],
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

