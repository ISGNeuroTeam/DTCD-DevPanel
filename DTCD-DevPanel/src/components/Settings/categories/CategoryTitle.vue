<template>
  <div class="title" v-text="titleText"/>
</template>

<script>
export default {
  name: 'CategoryTitle',
  props: {
    titleText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  height: 48px;
  color:#757575;
  font-size: 22px;
  font-weight: 300;
  padding: 0 20px;
}
</style>
