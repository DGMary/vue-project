<template>
   <table class="table">
    <thead>
      <tr>
        <th colspan="3">
          <div class="btn-holder">
            <el-button type="primary" @click="sortByName">
              Sort by User Name
              <i class="icon icon-arrow" :class="[sortedAsc ? 'icon-arrow-up' : 'icon-arrow-down']">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
                  <path id="XMLID_337_" d="M253.858,234.26c-2.322-5.605-7.792-9.26-13.858-9.26h-60V15c0-8.284-6.716-15-15-15  c-8.284,0-15,6.716-15,15v210H90c-6.067,0-11.537,3.655-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347l75,75  C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l75-75C254.896,246.316,256.18,239.865,253.858,234.26z M165,293.787  L126.213,255h77.573L165,293.787z"/>
                </svg>
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
import sortBy from 'lodash';

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
      sortedAsc: true,
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
      this.sortedAsc = !this.sortedAsc;
      this.currentUsers = sortBy(this.currentUsers, [(a, b) =>  (b.username).localeCompare(a.username)]);

      if (!this.sortedAsc) {
        this.currentUsers.reverse();
      }
    }
  }
};
</script>

<style>
.icon {
  display: inline-flex;
  width: 24px;
  height: 24px;
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