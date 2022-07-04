<template>
  <div>
    <el-collapse v-model="activeUser">
      <div
        v-for="user in users"
        :key="user.id"
        class="el-collapse-item__holder"
      >
        <el-button type="primary" @click="openModal(user.id)"
          >More info</el-button
        >
        <el-collapse-item :title="user.name" :name="user.id">
          <div>
            <p><b>Name:</b> {{ user.name }}</p>
            <p><b>Username:</b> {{ user.username }}</p>
            <p><b>Id</b> {{ user.id }}</p>
          </div>
        </el-collapse-item>
      </div>
    </el-collapse>
    <el-dialog title="Modal" :visible.sync="dialogVisible" width="600px">
      <span>This is a message {{ idUser }}</span>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  /**
   * Name.
   */
  name: "TabUsers",

  /**
   * Watcher
   */
  watch: {
    /**
     * Value watcher
     */
    value() {
      this.updateActiveUser();
    },
  },

  /**
   * Mounted hook.
   */
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => (this.users = json));
  },

  /**
   * Reactive properties.
   * @returns {{}}
   */
  data() {
    return {
      activeUser: [],
      dialogVisible: false,
      idUser: 0,
      users: {},
    };
  },

  /**
   * Methods.
   */
  methods: {
    /**
     * Update active user
     */
    updateActiveUser() {
      this.activeUser = this.value;
    },

    openModal(id) {
      console.log(id);
      this.dialogVisible = true;
      this.idUser = id;
    },
  },
};
</script>


<style scoped>
.el-collapse-item__holder {
  position: relative;
}
.el-collapse-item__holder .el-button {
  position: absolute;
  top: 4px;
  right: 0;
}
</style>