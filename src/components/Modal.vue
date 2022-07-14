<template>
  <el-dialog title="Modal" :visible.sync="dialogVisible" width="600px">
    <span>This is a message {{ idUser }}</span>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogVisible = false">
        Confirm
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  /**
   * Name.
   */
  name: "Modal",
};
</script>

<style>
</style>