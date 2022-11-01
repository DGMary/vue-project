<template>
   <table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>
            <td>
              <div>User Name</div>
            </td>
            <td> 
              <div class="btn-holder"><el-button type="primary" @click="sortByName">Sort by User Name</el-button></div>
            </td>
        </th>
        <th>User selected</th>
      </tr>
    </thead>
    <tbody>
      <tr  
        v-for="user in currentUsers"
        :key="user.id"
      >
        <td>{{user.name}}</td>
        <td>{{user.username}}</td>
        <td>          
          <label 
          :for="'checkbox_' + user.id"
          >
            <input 
              type="checkbox" 
              class="checkbox"
              :name="'checkbox_' + user.id"
              v-model="checkedUser[user.id]"
              @change="checkedUserId(user.id)">
            <span  v-if="checkedUser[user.id]">Primary</span>            
          </label>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>
export default {
  /**
   * Name.
   */
  name: "Users",

  /**
   * Props.
   */
  props: {
    /**
     * Users
     */
    users: {
      type: Array, 
      required: true
    },
  },

  /**
   * Reactive properties.
   * @returns {{}}
   */
  data() {
    return {
      checkedUser: {},
      currentUsers: [...this.users],
    };
  },

  /**
   * Methods.
   */
  methods: {

    /**
     * Checked user id
     * @param id 
     */
    checkedUserId(id) {
      this.$emit('update', id);
    },

    /**
     * Sort users by Name.
     */
    sortByName() {
      this.currentUsers = (this.currentUsers).sort((a, b) => {return (a.username.toLowerCase() > b.username.toLowerCase()) ? 1 :-1});
    }
  }
};
</script>

<style>

.table td  {
  min-width: 200px;
}

.table th,
.table td {
  padding: 8px 16px;
  border: 1px solid lightgray;
}

.table th td {
  border: none;
  padding: 0;
  min-width: none;
}

.el-table .is-checked {
  background: #f0f9eb;
}

.checkbox {
  cursor: pointer;
}
</style>