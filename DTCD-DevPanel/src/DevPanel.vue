<template>
  <div :id="panelID" class="panel">
    <PanelHeader
      :titleText="title"
      :isSettingsOpen="isSettingsOpen"
      @toggle-settings="isSettingsOpen = !isSettingsOpen"
    />
    <PanelContent
      :tabsList="tabsList"
      :selectedTab="selectedTab"
      :isSettingsOpen="isSettingsOpen"
      @add-tab="addTab"
      @remove-tab="removeTab"
      @select-tab="selectTab"
    />
  </div>
</template>

<script>
import pluginRegistrationMeta from './pluginRegistrationMeta';
import PanelHeader from './components/PanelHeader';
import PanelContent from './components/PanelContent';

export default {
  name: 'DevPanel',
  components: {
    PanelHeader,
    PanelContent,
  },
  data: () => ({
    title: pluginRegistrationMeta.title,
    panelID: null,
    isSettingsOpen: false,
    tabsList: [],
    selectedTab: '',
    plugins: document._DataCAD.plugins,
    systemGUID: document._DataCAD.systemGUID.guids.guid1,
  }),
  mounted () {
    this.panelID = `devPanel-${this.$root.workPlaceID}`;
  },
  methods: {
    async addTab (tabName) {
      const { title, pluginClass } = this.findTabPluginByName(tabName);

      const id = this.generateTabGUID();
      const domID = `${this.panelID}_tab-${id}`;
      const selector = `#${domID}`;

      await this.addTabDataToTabList({ id, domID, title });
      this.selectTab(id);

      this.systemGUID.setGUID(new pluginClass(
        selector, domID, this.$root.VueJS, this.$eventsSystem, this.$storageSystem,
      ), id);
    },

    findTabPluginByName (name) {
      return this.plugins.find(plugin => plugin.name === name);
    },

    generateTabGUID () {
      return this.systemGUID.createGUID();
    },

    addTabDataToTabList ({ id, domID, title }) {
      this.tabsList.push({ id, domID, title });
      return Promise.resolve();
    },

    selectTab (tabID) {
      this.selectedTab = tabID;
    },

    removeTab (tabID) {
      const tabIndex = this.tabsList.findIndex(tab => tab.id === tabID);
      this.tabsList.splice(tabIndex, 1);
      this.systemGUID.removeGUID(tabID);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/base';

.panel {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
