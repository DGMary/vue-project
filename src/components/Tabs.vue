<template>
  <div class="tabs">
    <ul class="tabs-nav__list">
      <li  
        v-for="(tab, index) in tabs"
        :key="index"  
        class="tabs-nav__item"
        :class="['tab', selected === index && ' active']"
        
        >
        <button  @click="updataSelected(index)">
          {{ tab.title }}
        </button>
      </li>
    </ul>

    <TabContent :content="curContent" />

  </div>
</template>

<script>
import TabContent from './TabContent.vue'
import { TABSINFO } from './tabs'

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

  data() {
    return {
      selected: 0, 
      curContent: "Details",
    };
  },

  methods: {
    updataSelected(index) {
      this.selected = index;
      this.curContent = this.tabs[index].component;
    },
  }
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

