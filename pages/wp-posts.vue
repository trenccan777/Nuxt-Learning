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
    <b-container>
      <b-row v-for="(row, index) in getAllRows" :key="index">
        <WPPostExcerpt v-for="post in row" :key="post.id" :post="post" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import WPPostExcerpt from '~/components/WPPostExcerpt.vue'
export default {
  components: {
    WPPostExcerpt
  },
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
    },
    getAllRows() {
      const AllPosts = this.$store.state.posts.posts
      console.log(AllPosts)
      const itemsPerRow = 2
      const rowsArr = []
      let rowArr = []
      let i = 0

      AllPosts.forEach((post, index) => {
        rowArr.push(post)

        // Add row of posts to master row array
        if (i === itemsPerRow) {
          rowsArr.push(rowArr)
          rowArr = []
          i = 0
          return
        }

        // Add last item
        if (index === AllPosts.length - 1) {
          rowsArr.push(rowArr)
        }
        i++
      })

      return rowsArr
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
