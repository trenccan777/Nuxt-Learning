<template>
  <div class="container">
    <h1>Všetky články cez AsyncData</h1>
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

  async asyncData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await data.json()

    return {
      posts: response
    }
  }
}
</script>

<style></style>
