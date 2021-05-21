<template>
  <div class="switcher">
    <div v-if="tabList.length <= 0" class="tab empty-list" v-text="'Нет вкладок'" />
    <div
      v-for="tab in tabList"
      class="tab"
      :key="tab.id"
      :title="tab.title"
      :class="{ selected: tab.id === selectedTab }"
      @click="$emit('select-tab', tab.id)"
    >
      <div class="title" v-text="tab.title" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabSwitcher',
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

$icon-width: 56px;
$default-tab-bg: #f5f5f5;
$border: thin solid rgba(0, 0, 0, 0.25);

.switcher {
  flex-basis: 42px;
  display: flex;
  background-color: #f5f5f5;

  .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 $icon-width;
    min-width: 0;
    background-color: $default-tab-bg;
    border-bottom: $border;
    padding: 0 20px;
    cursor: pointer;
    color: #757575;
    font-weight: 300;
    transition: 0.3s;

    &:hover {
      background-color: #eeeeee;
    }

    &:not(:last-child) {
      border-right: $border;
    }

    &.empty-list {
      cursor: default;

      &:hover {
        background-color: $default-tab-bg;
      }
    }

    &.selected {
      flex-basis: $icon-width * 2;
      background-color: #e0f2f1;
      color: #009688;
    }

    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
