export const state = () => ({
  posts: []
})

export const mutations = {
  loadAllPosts(state, data) {
    state.posts = data
  },
  filterPosts(state) {
    state.posts = state.posts.filter((post) => post.userId === 2)
  }
}
