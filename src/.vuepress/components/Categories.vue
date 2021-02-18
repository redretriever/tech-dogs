// Categories.vue
<template>
  <div>
    <transition-group tag="div">
      <Post v-for="(post, index) in selectedPosts" :key="index" v-bind="post" />
    </transition-group>
  </div>
</template>
<script>
export default {
  computed: {
    selectedPosts() {
      if (!this.$route.query.category) {
        return;
      };
      return this.$site.pages
          .filter((post) => post.path.match(/^\/blog\/\d/))
          .filter((post) => post.frontmatter.categories.some((c) =>
            this.$route.query.category.includes(c)))
          .sort((a, b) =>
            new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    },
  },
};
</script>