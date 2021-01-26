<template>
  <div>
    <CategoryTitle :titleText="categoryName"/>
  </div>
</template>

<script>
import CategoryTitle from './CategoryTitle';

export default {
  name: 'CommonCategory',
  components: { CategoryTitle },
  props: {
    categoryName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
