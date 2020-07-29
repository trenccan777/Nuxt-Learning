<template>
  <div class="container">
    <button @click="filterPosts">Add posts</button>
    <h1>Všetky články cez Fetch a Vuex</h1>
    <ul>
      <Post v-for="post in getAllPosts" :key="post.id" :post="post" />
    </ul>
  </div>
</template>

<script>
import Post from '~/components/Post.vue'
export default {
  components: {
    Post
  },

  // Fetch nič nevracia do data hashu
  async fetch() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await data.json()

    this.$store.commit('posts/loadAllPosts', response)
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
  },

  computed: {
    getAllPosts() {
      return this.$store.state.posts.posts
    }
  },

  methods: {
    filterPosts() {
      this.$store.commit('posts/filterPosts')
    }
  }
}
</script>

<style></style>
