<template>
  <div class="content">
    <PanelSettings
      :isOpen="isSettingsOpen"
      :tabList="tabList"
      @add-tab="addTab"
      @remove-tab="(id) => $emit('remove-tab', id)"
    />
    <PanelTabsArea
      :tabList="tabList"
      :selectedTab="selectedTab"
      @select-tab="(id) => $emit('select-tab', id)"
    />
  </div>
</template>

<script>
import PanelSettings from './Settings/PanelSettings';
import PanelTabsArea from './Tabs/PanelTabsArea';

export default {
  name: 'PanelContent',
  components: {
    PanelSettings,
    PanelTabsArea,
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
    isSettingsOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    addTab (...args) {
      this.$emit('add-tab', ...args);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/base';

.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
}
</style>
