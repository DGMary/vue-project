<template>
  <div class="tabs">
    <Nav :selected="selected" :tabs="tabs" />
    <TabContent :content="curContent" />
  </div>
</template>

<script>
import TabContent from './TabContent.vue'
import Nav from './Nav.vue'
import { TABSINFO } from './tabs'

import emitter from './emittery';

export default {
  /**
   * Name.
   */
  name: "Tabs",

  /**
   * Components
   */
  components: {
    TabContent,
    Nav,
  },

  /**
   * Computed
   */
  computed: {
    /**
     * TabsInformation.
     */
     tabs () {
      return TABSINFO;
    },
  },  

  /**
   * Data
   */
  data() {
    return {
      selected: 0, 
      curContent: "Details",
    };
  },

  mounted() {
    emitter.on('handleClicked',  (index) => {
      this.selected = index;
      this.curContent = this.tabs[index].component;
    })
  },
}
</script>

<style>
.tabs-nav__list {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 20px;
}
.tabs-nav__item {
  border: 1px solid lightgrey;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
}

.tabs-nav__item  + .tabs-nav__item  {
  border-left: none;
}
.tabs-nav__item button {
  border: none;
  padding: 0;
  font-size: 14px;
  line-height: 1.4;
  background: none;
  padding: 10px 15px;
  cursor: pointer;
}

.tabs-nav__item button:hover {
  color: blue;
}
.tabs-nav__item.active button {
  font-weight: bold;
}
</style>

