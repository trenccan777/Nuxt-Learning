<template>
  <div class="container">
    <button type="button" @click="loadAllPostsBtn">
      Načítaj všetky články využítím vuex a fetch
    </button>
    <button type="button" @click="loadAllPostsBtnAxios">
      Načítaj všetky články využítím vuex a axios
    </button>
    <button type="button" @click="removeAllPosts">Vymazať posts</button>
    <button type="button" @click="filterPostsAuthor">
      Filtrovať posty od autora
    </button>
    <h1>Všetky články z Wordpressu</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title.rendered }}</li>
    </ul>
    <ul>
      <li v-for="post in getAllPosts" :key="post.id">
        {{ post.title.rendered }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  async fetch() {
    await this.$store.dispatch('posts/loadAllPosts')
  },
  data() {
    return {
      posts: []
    }
  },
  computed: {
    getAllPosts() {
      return this.$store.state.posts.posts
    }
  },
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadAllPostsBtn',
      loadPostsAxios: 'posts/loadAllPostsBtnAxios'
    }),
    filterPostsAuthor() {
      const data = 2
      this.$store.dispatch('posts/filterPostsAuthor', data)
    },
    removeAllPosts() {
      this.$store.commit('posts/REMOVE_ALL_POSTS')
    },
    loadAllPostsBtn() {
      this.loadPosts()
    },
    loadAllPostsBtnAxios() {
      this.loadPostsAxios()
    }
  }
}
</script>

<style></style>
