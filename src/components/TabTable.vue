<template>
  <div v-if="users.length">
    <el-table
      :data="users"
      style="width: 100%"
      ref="usersTable"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="name" label="Title" width="360"> </el-table-column>
      <el-table-column prop="id" label="Id" width="80"> </el-table-column>
      <el-table-column prop="username" label="User Name" width="200"></el-table-column>
      <el-table-column width="200">
        <template slot-scope="scope">
          <el-checkbox
            :key="scope.row.id"
            v-model="selected[scope.row.id]"
            :name="'checkbox_' + scope.row.id"
            :checked="false"
          >
            <span v-if="selected[scope.row.id]">Primary</span>
          </el-checkbox>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  /**
   * Name.
   */
  name: "TabTable",

  /**
   * Props.
   */
  props: ["users"],
  
  /**
   * Reactive properties.
   * @returns {{}}
   */
  data() {
    return {
      selectedUsers: [],
      selected: {},
    };
  },

  /**
   * Watch
   */
  watch: {
    /**
     * Selected values watcher
     */
    selected: {
      deep: true,
      handler(values) {
        this.updateSelectedProperties(values);
      },
    },
  },

  /**
   * Methods.
   */
  methods: {
    /**
     * Update selected properties
     */
    updateSelectedProperties(values) {
      this.selectedUsers = Object.entries(values)
        .filter((e) => e[1])
        .map((e) => {
          return e[0];
        });
    },

    /**
     * Update row className
     */
    tableRowClassName({ row }) {
      return this.selected[row.id] ? "is-checked" : "";
    },
  },
};
</script>

<style>
.el-table .is-checked {
  background: #f0f9eb;
}
</style>