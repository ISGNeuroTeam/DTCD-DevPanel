<template>
  <div class="container">
    <CategoryTitle :titleText="categoryName" />
    <div class="content">
      <div class="current-tabs">
        <select v-model="currentDeleteTab">
          <option v-for="tab in tabList" :key="tab.id" :value="tab.id" v-text="tab.title" />
        </select>
        <button
          :disabled="currentDeleteTab === null"
          @click="$emit('remove-tab', currentDeleteTab)"
          v-text="'Удалить'"
        />
      </div>
      <div class="available-tabs">
        <select v-model="currentAddedTab">
          <option
            v-for="(tab, index) in availableTabsList"
            :key="index"
            :value="tab"
            v-text="tab.title"
          />
        </select>
        <button :disabled="currentAddedTab === null" @click="addTab" v-text="'Добавить'" />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryTitle from '@/components/Settings/categories/CategoryTitle.vue';

export default {
  name: 'TabsCategory',
  components: { CategoryTitle },
  props: {
    categoryName: {
      type: String,
      required: true,
    },
    tabList: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: () => ({
    currentAddedTab: null,
    currentDeleteTab: null,
    availableTabsList: [],
  }),
  mounted() {
    this.availableTabsList = this.$root.getExtensionList();
  },
  methods: {
    addTab() {
      const { name, title } = this.currentAddedTab;
      this.$emit('add-tab', name, title);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../../../styles/base.scss';
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
