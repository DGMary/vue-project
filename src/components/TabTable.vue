<template>
  <div v-if="users.length">
    <el-table
      :data="users"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="name" label="Title" width="360"> </el-table-column>
      <el-table-column prop="id" label="Id" width="80"> </el-table-column>
      <el-table-column prop="username" label="User Name" width="200"></el-table-column>
      <el-table-column width="200">
        <template slot-scope="scope">
          <el-checkbox
            :key="scope.row.id"
            v-model="selectedProperties[scope.row.id]"
            :name="'checkbox_' + scope.row.id"
            :checked="false"
          >
            <span v-if="selectedProperties[scope.row.id]">Primary</span>
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
      selectedPropertiesId: [],
      selectedProperties: {},
    };
  },

  /**
   * Watch
   */
  watch: {
    /**
     * Selected values watcher
     */
    selectedProperties: {
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
      this.selectedPropertiesId = Object.entries(values)
        .filter((value) => value[1])
        .map((id) => {
          return id[0];
        });

      this.$emit('update', this.selectedPropertiesId);
    },

    /**
     * Update row className
     */
    tableRowClassName({ row }) {
      return this.selectedProperties[row.id] ? "is-checked" : "";
    },
  },
};
</script>

<style>
.el-table .is-checked {
  background: #f0f9eb;
}
</style>