<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  //   async asyncData({ params }) {
  //     const data = await fetch(
  //       'https://jsonplaceholder.typicode.com/posts/' + params.id
  //     )
  //     const response = await data.json()

  //     return {
  //       post: response
  //     }
  //   },

  async asyncData({ $axios, params }) {
    const response = await $axios.$get(
      'https://jsonplaceholder.typicode.com/posts/' + params.id
    )

    return {
      post: response
    }
  },
  data() {
    return { post: 'test' }
  },
  head() {
    return {
      title: 'Post No.' + this.$route.params.id
    }
  }
}
</script>

<style></style>
