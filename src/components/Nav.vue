<template>
  <ul class="tabs-nav__list" v-if="tabs.length">
      <li  
        v-for="(tab, index) in tabs"
        :key="index"  
        :class="['tabs-nav__item', selected === index && ' active']"        
        >
        <button  @click="tabSelected(index)">
          {{ tab.title }}
        </button>
      </li>
    </ul>
</template>

<script>
import emitter from './emittery';

export default {

  /**
   * Name.
   */
  name: "Nav",

  /**
   * Props.
   */
  props: {
    /**
     * Tabs
     */
    tabs: {
      type: Array,
      required: true
    },

    /**
     * Selected tab
     */
    selected: {
      type: Number,
      required: true      
    }
  },

  /**
   * Methods
   */
  methods: {
    tabSelected(index) {
      emitter.emit('tabClicked', index);
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

