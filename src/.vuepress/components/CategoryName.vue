// Category.vue
<template>
  <div>
    <p class="lead">
    {{ categoryName }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
  },
  computed: {
    categoryName() {
      if (!this.$route.query.category) {
        return;
      } else {
        return this.$route.query.category;
      }
    }
  }
};
</script>