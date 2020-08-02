<template>
  <div class="container">
    <h1>Všetky články cez Fetch a Vuex</h1>

    <ul>
      <PostExcerpt v-for="post in getAllPosts" :key="post.id" :post="post" />
    </ul>
  </div>
</template>

<script>
import PostExcerpt from '~/components/PostExcerpt.vue'
export default {
  components: {
    PostExcerpt
  },

  // Fetch nič nevracia do data hashu
  async fetch() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await data.json()
    this.$store.commit('posts/LOAD_ALL_POSTS', response)
  },

  computed: {
    getAllPosts() {
      return this.$store.state.posts.posts
    }
  }
}
</script>

<style></style>
