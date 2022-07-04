<template>
  <div id="app">
    <el-tabs v-model="activeName">
      <el-tab-pane label="Users" name="first">
        <TabUsers />
      </el-tab-pane>
      <el-tab-pane label="Table" name="second">
        <TabTable />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabUsers from "./components/TabUsers";
import TabTable from "./components/TabTable";

export default {
  /**
   * Name.
   */
  name: "App",

  /**
   * Components
   */
  components: {
    TabUsers,
    TabTable,
  },

  /**
   * Reactive properties.
   * @returns {{}}
   */
  data: function () {
    return {
      activeName: "first",
    };
  },
};
</script>

<style></style>
