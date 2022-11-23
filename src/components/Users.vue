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
        v-for="user in sortedUsers"
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
import emitter from './emittery';
import localStorage  from "../utils/localStorage.js"

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
      checkedUser: localStorage.get("activeUsersSaved") || {},
      sortUsersByName: [],
    };
  },

  /**
   * Computed.
   */
  computed: {

    /**
    * Sorted users.
    */
    sortedUsers() {
      return this.sortUsersByName.length ? this.sortUsersByName : this.users;
    },
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
      localStorage.set("activeUsersSaved", this.checkedUser);
      emitter.emit('update', id);
    },

    /**
     * Sort users by Name.
     */
    sortByName() {
      this.sortUsersByName = JSON.parse(JSON.stringify(this.users)).sort(function(a, b){
        return (a.username>b.username) ? 1 :-1;
      });
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