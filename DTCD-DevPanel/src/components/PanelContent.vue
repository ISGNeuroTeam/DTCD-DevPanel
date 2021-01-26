<template>
  <div class="content">
    <PanelSettings
      :isOpen="isSettingsOpen"
      :tabsList="tabsList"
      @add-tab="addTab"
      @remove-tab="removeTab"
    />
    <PanelTabsArea
      :tabsList="tabsList"
      :selectedTab="selectedTab"
      @select-tab="selectTab"
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
    tabsList: {
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
    addTab (name) {
      this.$emit('add-tab', name);
    },

    removeTab (id) {
      this.$emit('remove-tab', id);
    },

    selectTab (id) {
      this.$emit('select-tab', id);
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
