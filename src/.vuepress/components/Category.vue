// Category.vue
<template>
  <span>
    <router-link
      v-bind:to="{path: '/categories/', query: toggleQuery(categoryName)}">
      {{ categoryName }}
    </router-link>
  </span>
</template>
<script>
export default {
  props: {
    categoryName: String,
  },
  methods: {
    toggleQuery: function(c) {
      const query = Object.assign({}, this.$route.query);
      if (query.category && query.category.includes(c)) {
        delete query.category;
      } else {
        query.category = c;
      };
      return query;
    },
  },
};
</script>