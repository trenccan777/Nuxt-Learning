<template>
  <li>
    <nuxt-link :to="`/posts/${post.id}`">{{ post.title }}</nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null
    }
  }
}
</script>

<style></style>
