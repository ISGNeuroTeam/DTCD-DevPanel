<template>
  <div class="tab-area">
    <TabSwitcher
      :tabList="tabList"
      :selectedTab="selectedTab"
      @select-tab="id => $emit('select-tab', id)"
    />
    <TabViewer :tabList="tabList" :selectedTab="selectedTab" />
  </div>
</template>

<script>
import TabSwitcher from '@/components/Tabs/TabSwitcher.vue';
import TabViewer from '@/components/Tabs/TabViewer.vue';

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
      default: () => [],
    },
    selectedTab: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../../styles/base';

.tab-area {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
