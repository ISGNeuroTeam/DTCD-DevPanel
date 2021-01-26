<template>
  <div class="container">
    <CategoryTitle :titleText="categoryName"/>
    <div class="content">
      <div class="current-tabs">
        <select name="" id="" v-model="currentDeleteTab">
          <option
            v-for="tab in tabsList"
            :key="tab.id"
            :value="tab.id"
            v-text="tab.title"
          />
        </select>
        <button
          :disabled="currentDeleteTab === null"
          @click="$emit('remove-tab', currentDeleteTab)"
          v-text="'Удалить'"
        />
      </div>
      <div class="available-tabs">
        <select name="" id="" v-model="currentAddedTab">
          <option
            v-for="tab in availableTabsList"
            :key="tab.name"
            :value="tab.name"
            v-text="tab.title"
          />
        </select>
        <button
          :disabled="currentAddedTab === null"
          @click="$emit('add-tab', currentAddedTab)"
          v-text="'Добавить'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryTitle from './CategoryTitle';

export default {
  name: 'TabsCategory',
  components: { CategoryTitle },
  props: {
    categoryName: {
      type: String,
      required: true,
    },
    tabsList: {
      type: Array,
      required: true,
      default: () => ([]),
    },
  },
  data: () => ({
    currentAddedTab: null,
    currentDeleteTab: null,
    availableTabsList: document._DataCAD.plugins.filter(
      plugin => plugin.type === 'devPanelTab',
    ).map(({ name, title }) => ({ name, title })),
  }),
};
</script>

<style lang="scss" scoped>
.container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  .content {
    flex-grow: 1;
    display: flex;
    padding: 20px;

    .current-tabs,
    .available-tabs {
      flex-basis: 50%;
    }
  }
}
</style>
