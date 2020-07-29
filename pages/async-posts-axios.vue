<template>
  <div class="container">
    <h1>Všetky články cez AsyncData a Axios</h1>
    <ul>
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </ul>
  </div>
</template>

<script>
import Post from '~/components/Post.vue'
export default {
  components: {
    Post
  },

  async asyncData({ $axios }) {
    const response = await $axios.$get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return {
      posts: response
    }
  },

  data() {
    return {
      postid: 'testuj',
      response: '',
      posts: [
        { id: 1, title: 'title 1' },
        { id: 2, title: 'title 2' },
        { id: 3, title: 'title 3' }
      ]
    }
  }
}
</script>

<style></style>
