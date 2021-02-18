// MoreTo.vue
<template>
<div class="text-center">
  <p>
    <router-link class="btn btn-success" v-bind:to="this.path">
      <slot/>
    </router-link>
  </p>
</div>
</template>
<script>
export default {
  props: {
    path: String,
  },
};
</script>