<template>
  <div>
    <CategoryTitle :titleText="categoryName" />
  </div>
</template>

<script>
import CategoryTitle from '@/components/Settings/categories/CategoryTitle.vue';

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

<style lang="scss" scoped></style>
