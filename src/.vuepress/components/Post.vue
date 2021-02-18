// Post.vue
<template>
  <div>
    <h2>
      <router-link v-bind:to="path">{{title}}</router-link>
    </h2>
    <PostDate v-bind:input_date=frontmatter.date />
    <PostCategories
      v-bind:input_categories=frontmatter.categories
    />
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    title: String,
    frontmatter: Object,
  },
};
</script>