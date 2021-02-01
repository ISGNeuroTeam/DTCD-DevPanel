<template>
  <div class="viewer">
    <transition
      v-for="tab in tabList"
      :key="tab.id"
      name="fade"
      mode="out-in"
    >
      <div v-show="tab.id === selectedTab" class="tab-template">
        <div :id="tab.domID" v-text="tab.domID"/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TabViewer',
  props: {
    tabList: {
      type: Array,
      required: true,
      default: () => ([]),
    },
    selectedTab: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/base';

.viewer {
  flex-grow: 1;
  position: relative;
  overflow: hidden;

  .tab-template {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
