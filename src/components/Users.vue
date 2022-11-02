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
            @input="filteredByName"
          >
            <template #prepend>
              <el-button >
                <!-- TODO  extract icon-->
                <i class="icon icon-search icon-black">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 487.95 487.95" style="enable-background:new 0 0 487.95 487.95;" xml:space="preserve">
                    <path d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1    c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4    c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/>
                  </svg>
                </i>
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
              <!-- TODO  extract icon-->
              <i class="icon icon-arrow" :class="{ up: ascending }">                
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
        <th><td>User Name</td></th>
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
      ascending: true,
      searchValue: '',
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
      this.ascending = !this.ascending;
      this.currentUsers = (this.currentUsers).sort((a, b) => {return (a.username.toLowerCase() > b.username.toLowerCase()) ? 1 :-1});
      if (!this.ascending) {
        this.currentUsers.reverse();
      }
    },

    /**
     * Filter users by Name.
     */
    filteredByName() {
      const users = [...this.users];
      
      if (this.searchValue != '' && this.searchValue) {
        this.currentUsers = users.filter((user) => {return user.username.toLowerCase().includes(this.searchValue.toLowerCase())})
      } 

      if (this.searchValue == '' ) {
        this.currentUsers = users;
      }

    }
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
.icon-black svg {
  fill: #000;
}
.icon-arrow.up {
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