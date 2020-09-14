<template>
  <div class="container">
    <h1>{{ getPost.title }}</h1>

    <div class="content"></div>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('posts/loadSinglePost', this.$route.params.id)
  },
  data() {
    return {
      post: 'test'
    }
  },
  computed: {
    getPost() {
      return this.$store.state.posts.post
    }
  },
  head() {
    return {
      title: 'Post No.' + this.$route.params.id
    }
  }
}
</script>

<style></style>
