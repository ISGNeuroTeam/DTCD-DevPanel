<template>
  <div class="header">
    <div class="title">
      <span class="text" v-text="titleText"/>
    </div>
    <div class="settings-toggle" @click="$emit('toggle-settings')">
      <transition name="fade" mode="out-in">
        <div v-if="isSettingsOpen" key="close">
          <i class="fas fa-times icon close"/>
        </div>
        <div v-else key="open">
          <i class="fas fa-cog icon"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelHeader',
  props: {
    titleText: {
      type: String,
      required: true,
    },
    isSettingsOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    isOpen () {
      return !!this.isSettingsOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/base';

$icon-width: 56px;

.header {
  display: flex;
  flex: 0 0 48px;
  background-color: #F5F5F5;
  border-bottom: thin solid rgba(0, 0, 0, .25);

  .title {
    display: flex;
    align-items: center;
    flex-grow: 1;
    min-width: 0;
    padding: 0 20px;
    color: #757575;
    font-size: 18px;

    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .settings-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 $icon-width;
    cursor: pointer;
    border-left: thin solid rgba(0, 0, 0, .25);

    &:hover {
      .icon {
        color: #2196F3;
        transform: rotate(90deg);

        &.close {
          color: #F44336;
        }
      }
    }

    .icon {
      color: #757575;
      font-size: 20px;
      transition: .3s;
    }
  }
}
</style>
