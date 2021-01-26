<template>
  <div class="tab-area">
    <TabSwitcher
      :tabsList="tabsList"
      :selectedTab="selectedTab"
      @select-tab="selectTab"
    />
    <TabViewer
      :tabsList="tabsList"
      :selectedTab="selectedTab"
    />
  </div>
</template>

<script>
import TabSwitcher from './TabSwitcher';
import TabViewer from './TabViewer';

export default {
  name: 'PanelTabsArea',
  components: {
    TabSwitcher,
    TabViewer,
  },
  props: {
    tabsList: {
      type: Array,
      required: true,
      default: () => ([]),
    },
    selectedTab: {
      type: String,
      required: true,
    },
  },
  methods: {
    selectTab (tabID) {
      this.$emit('select-tab', tabID);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/base';

.tab-area {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
