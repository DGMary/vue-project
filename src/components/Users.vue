<template>
   <table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>User Name</th>
        <th>User selected</th>
      </tr>
    </thead>
    <tbody>
      <tr  
        v-for="user in users"
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
    };
  },

  /**
   * Methods.
   */
  methods: {
    checkedUserId(id) {
      this.$emit('update', id);
    },
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

.el-table .is-checked {
  background: #f0f9eb;
}

.checkbox {
  cursor: pointer;
}
</style>