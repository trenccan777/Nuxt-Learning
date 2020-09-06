<template>
  <div class="container">
    <h1>{{ getPost.title.rendered }}</h1>

    <div class="content"></div>
  </div>
</template>

<script>
export default {
  // async asyncData({ $axios, params }) {
  //   const response = await $axios.$get(
  //     'http://127.0.0.1/web/wp-json/wp/v2/posts/' + params.id
  //   )

  //   return {
  //     post: response
  //   }
  // },
  async fetch() {
    await this.$store.dispatch('posts/loadSinglePost')
  },
  data() {
    return {
      post: 'test'
    }
  },
  computed: {
    getPost() {
      return this.$store.state.posts.posts
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
