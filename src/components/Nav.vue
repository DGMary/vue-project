<template>
    <ul class="tabs-nav__list" >
      <li  
        v-for="(item, index) in tabsInformation"
        :key="index"  
        class="tabs-nav__item"
        >
        <button>{{ item.title }}</button>
      </li>
    </ul>
</template>

<script>
import { TABSINFO } from './tabs.js'

export default {
  /**
   * Name.
   */
  name: "Nav",

  /**
   * Computed
   */
  computed: {
    /**
     * TabsInformation.
     */
     tabsInformation () {
      return TABSINFO;
    },
  },
}
</script>

<style>
.tabs-nav__list {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.tabs-nav__item button {
  border: none;
  padding: 0;
  font-size: 14px;
  line-height: 1.4;
  background: none;
  padding: 10px 15px;
}
</style>

