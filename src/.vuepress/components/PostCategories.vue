// PostCategories.vue
<template>
  <span>
    <ul class="list-unstyled">
      <li class="category" v-for="(category, index) in categories" :key="index">
        <Category v-bind:categoryName="category" />
      </li>
    </ul>
  </span>
</template>
<script>
export default {
  props: {
    input_categories: Array,
  },
  computed: {
    categories() {
      if ( typeof this.input_categories !== 'undefined' ) {
        return this.input_categories;
      } else {
        return this.$page.frontmatter.categories;
      };
    },
  },
};
</script>