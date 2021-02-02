<template>
  <transition v-if="isOpen" name="fade">
    <div class="settings">
      <div class="menu" :class="collapsedClass">
        <div class="header">
          <span
            class="title"
            :class="collapsedClass"
            v-text="'Категории'"
          />
          <div
            class="menu-resizer icon-wrap"
            :class="collapsedClass"
            @click="isMenuCollapsed = !isMenuCollapsed"
          >
            <i class="fas fa-arrow-left"/>
          </div>
        </div>
        <div
          v-for="category in settingsCategories"
          :key="category.id"
          class="category"
          :class="{ selected: category.id === selectedCategory.id }"
          @click="selectedCategory = category"
        >
          <div class="icon-wrap"><i :class="category.icon"/></div>
          <div class="title" v-text="category.name"/>
        </div>
      </div>
      <div class="content">
        <transition name="fade" mode="out-in">
          <component
            :is="selectedCategory.component"
            :key="selectedCategory.id"
            :tabList="tabList"
            :categoryName="selectedCategory.name"
            @add-tab="addTab"
            @remove-tab="(id) => $emit('remove-tab', id)"
          />
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import categoriesList from './categories/categoriesList';
import CommonCategory from './categories/CommonCategory';
import TabsCategory from './categories/TabsCategory';

export default {
  name: 'PanelSettings',
  components: { CommonCategory, TabsCategory },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    tabList: {
      type: Array,
      required: true,
      default: () => ([]),
    },
    availableTabsList: {
      type: Array,
      default: () => ([]),
    },
  },
  data: () => ({
    settingsCategories: categoriesList,
    selectedCategory: null,
    isMenuCollapsed: false,
  }),
  computed: {
    collapsedClass () {
      return { collapsed: this.isMenuCollapsed };
    },
  },
  mounted () {
    this.selectedCategory = this.settingsCategories[0];
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

$icon-width: 56px;
$border: thin solid rgba(0, 0, 0, .25);
$border-light: thin solid rgba(0, 0, 0, .05);

.settings {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  .menu {
    flex: 0 0 225px;
    background-color: #F5F5F5;
    border-right: $border;
    overflow: hidden;
    transition: flex-basis .3s;

    &.collapsed {
      flex-basis: $icon-width;
    }

    .icon-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 $icon-width;
      height: 100%;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 48px;
      color:#757575;
      border-bottom: $border-light;

      .title {
        font-size: 14px;
        font-weight: 300;
        flex-shrink: 1;
        padding-left: 20px;
        text-transform: uppercase;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        transition: .3s;

        &.collapsed {
          padding-left: 0;
          opacity: 0;
        }
      }

      .menu-resizer {
        cursor: pointer;
        transition: .3s;

        &.collapsed {
          transform: rotate(180deg);
        }

        &:hover {
          color:#009688;
        }
      }
    }

    .category {
      display: flex;
      align-items: center;
      height: 48px;
      cursor: pointer;
      color:#757575;
      transition: .3s;

      &:last-child {
        border-bottom: $border-light;
      }

      &:hover {
        background-color: #E0E0E0;
      }

      &.selected {
        color:#009688;
        background-color: #E0F2F1;
      }

      .title {
        font-weight: 300;
        padding-right: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .content {
    flex-grow: 1;
    display: flex;
    background-color: #fff;
  }
}
</style>
