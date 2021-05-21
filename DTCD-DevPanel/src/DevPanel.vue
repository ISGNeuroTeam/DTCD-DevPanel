<template>
  <div :id="panelID" class="dev-panel-container">
    <PanelHeader
      :titleText="panelTitle"
      :isSettingsOpen="isSettingsOpen"
      @toggle-settings="isSettingsOpen = !isSettingsOpen"
    />
    <PanelContent
      :tabList="tabList"
      :selectedTab="selectedTab"
      :isSettingsOpen="isSettingsOpen"
      @add-tab="addTab"
      @remove-tab="removeTab"
      @select-tab="selectTab"
    />
  </div>
</template>

<script>
import PanelHeader from '@/components/PanelHeader.vue';
import PanelContent from '@/components/PanelContent.vue';

export default {
  name: 'DevPanel',
  components: {
    PanelHeader,
    PanelContent,
  },
  data: self => ({
    panelID: self.$root.panelID,
    panelTitle: self.$root.panelTitle,
    isSettingsOpen: false,
    tabList: [],
    tabCounter: 1,
    selectedTab: '',
  }),
  methods: {
    addTab(tabName, tabTitle) {
      const id = `tab${this.tabCounter++}`;
      const domID = `${this.panelID}_${id}`;
      const title = tabTitle ? tabTitle : 'Вкладка';

      this.tabList.push({ id, domID, title });

      Promise.resolve().then(() => {
        this.$root.installExtesion(tabName, `#${domID}`);
      });

      this.selectTab(id);
    },

    selectTab(tabID) {
      this.selectedTab = tabID;
    },

    removeTab(tabID) {
      const tabIndex = this.tabList.findIndex(tab => tab.id === tabID);
      if (tabIndex >= 0) this.tabList.splice(tabIndex, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles/base';

.dev-panel-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
