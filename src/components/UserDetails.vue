<template>
  <div v-if="users.length">
    <el-collapse v-model="activeUser">
      <div
        v-for="user in users"
        :key="user.id"
        class="el-collapse-item__holder"
      >
        <div 
          v-if="activeUsers.includes(user.id)" 
          class="label"
        >
          Primary
        </div>     
        <el-button type="primary" @click="openModal(user.id)">
          More info
        </el-button>
        <el-collapse-item :title="user.name" :name="user.id">
          <div>
            <p><b>Name:</b> {{ user.name }}</p>
            <p><b>Username:</b> {{ user.username }}</p>
            <p><b>Id</b> {{ user.id }}</p>
          </div>
        </el-collapse-item>
      </div>
    </el-collapse>
    <!-- <el-dialog 
      title="Modal" 
      :visible.sync="dialogVisible" 
      width="600px"
      >
      <span>This is a message</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
export default {
  /**
   * Name.
   */
  name: "UserDetails",

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

    /**
     * Active users
     */
    activeUsers: {
      type: Array, 
      required: true
    }
  },

  /**
   * Reactive properties.
   * @returns {{}}
   */
  data() {
    return {
      activeUser: null,
      dialogVisible: false,
    };
  },

  /**
   * Methods.
   */
  methods: {    
    openModal() {
      this.dialogVisible = true;
    },
  },
};
</script>


<style>
.el-collapse-item__holder {
  position: relative;
}
.el-collapse-item__holder .el-button {
  position: absolute;
  top: 9px;
  right: 12px;
}
.el-collapse-item__arrow {
  margin-left: 12px;
}
.el-collapse-item__header {
  border: 1px solid lightgrey;
  padding: 4px 140px 4px 24px;
}
.el-collapse-item__content {
  padding: 24px;
  border: 1px solid lightgrey;
  border-bottom: none;
}
.label {
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  position: absolute;
  top: -2px;
  left: 10px;
  padding: 2px 6px;
  background: lightblue;
  font-weight: 600;
}
</style>