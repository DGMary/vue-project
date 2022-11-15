<template>
   <table class="table">
    <thead>
      <tr>
        <th colspan="3">
          <el-input
            v-model="searchValue"
            placeholder="Please serach by name"
            class="input-with-select"
            size="large"
          >
            <template #prepend>
              <el-button >
                <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
              </el-button>
            </template>
          </el-input>
        </th>
      </tr>
      <tr>
        <th colspan="3">
          <div class="btn-holder">
            <el-button type="primary" @click="sortByName">
              Sort by User Name  
              <i class="el-icon--right">
                <font-awesome-icon icon="fa-solid fa-arrow-up" :class="[sortedAsc ? 'icon-arrow-up' : 'icon-arrow-down']"/>
              </i>    
            </el-button>
          </div>      
        </th>
      </tr>
      <tr>
        <th>Title</th>
        <th>User Name</th>
        <th>User selected</th>
      </tr>
    </thead>
    <tbody>
      <tr  
        v-for="user in userList"
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
import { slice} from 'lodash';

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
      currentUsers: slice(this.users),
      sortedAsc: true,
      searchValue: '',
    };
  },

  /**
   * Computed.
   */
  computed: {
    userList() {
      let users = this.currentUsers;

      // this.sortedAsc = !this.sortedAsc;
      // users = sortBy(users, [(a, b) =>  (b.username).localeCompare(a.username)]);



      users = users.sort((a, b) => {return (a.username.toLowerCase() > b.username.toLowerCase()) ? 1 :-1});
      // this.currentUsers = sortBy(this.currentUsers, [(a, b) => (b.username).localeCompare(a.username)]);

      if (!this.sortedAsc) {
        users.reverse();
      }

      if (this.searchValue.length > 0) {
       return  users = users.filter((user) => {return user.username.toLowerCase().includes(this.searchValue.toLowerCase())})
      }

      return users;

    }
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
      this.sortedAsc = !this.sortedAsc;
    },
  }
};
</script>

<style>
.icon {
  display: inline-flex;
  width: 20px;
  height: 20px;
}
.icon svg {
  display: inline-flex;
  width: 100%;
  height: 100%;
  fill: #fff;
}

.icon-arrow-up {
  transform: rotate(180deg);
  transition: 0.3 ease-in-out;
}

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

.btn-holder .icon {
   margin: 0 4px;
}
</style>