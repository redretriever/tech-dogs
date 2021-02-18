// Posts.vue
<template>
  <div class="mt-5">
    <Post v-for="(post, index) in posts" :key="index" v-bind="post" />
  </div>
</template>
<script>
export default {
  props: {
    limit: Number,
  },
  computed: {
    posts() {
      let res = this.$site.pages
          .filter((post) => post.path.match(/^\/blog\/\d/))
          .sort((a, b) => (
            new Date(b.frontmatter.date) - new Date(a.frontmatter.date)),
          );
      if ( typeof this.limit !== 'undefined' ) {
        res = res.slice(0, this.limit);
      };
      return res;
    },
  },
};
</script>