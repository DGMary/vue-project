<template>
  <div v-if="todosData">
    <el-table :data="todosData" style="width: 100%">
      <el-table-column prop="title" label="Title" width="360"> </el-table-column>
      <el-table-column prop="id" label="Id" width="80"> </el-table-column>
      <el-table-column prop="completed" label="Сompleted" width="100">
        <template slot-scope="scope">
          {{ scope.row.completed }}
        </template>
      </el-table-column>
      <el-table-column width="100">
        <template slot-scope="scope">
          <el-checkbox @change="handleEdit(scope.$index, scope.row)"
            >Option</el-checkbox
          >
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
   * Reactive properties.
   * @returns {{}}
   */
  data: function () {
    return {
      todosData: [],
    };
  },

  /**
   * Mounted hook.
   */
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => (this.todosData = json))
      .catch(error => console.log(error.message));
  },

  /**
   * Methods.
   */
  methods: {
    handleEdit(ind, row) {
      console.log("test", ind, row);
    },
  },
};
</script>

<style>
</style>