<template>
  <div class="container">
    <h1>Všetky články cez AsyncData a Axios</h1>
    <ul>
      <PostExcerpt v-for="post in posts" :key="post.id" :post="post" />
    </ul>
  </div>
</template>

<script>
import PostExcerpt from '~/components/PostExcerpt.vue'
export default {
  components: {
    PostExcerpt
  },

  async asyncData({ $axios }) {
    const response = await $axios.$get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return {
      posts: response
    }
  }
}
</script>

<style></style>
