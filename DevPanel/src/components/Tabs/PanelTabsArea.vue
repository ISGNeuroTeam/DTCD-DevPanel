<template>
  <div class="tab-area">
    <TabSwitcher
      :tabList="tabList"
      :selectedTab="selectedTab"
      @select-tab="(id) => $emit('select-tab', id)"
    />
    <TabViewer
      :tabList="tabList"
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

.tab-area {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
