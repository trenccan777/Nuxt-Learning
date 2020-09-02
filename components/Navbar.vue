<template>
  <nav id="top-nav">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/async-posts">Async Posts</nuxt-link>
    <nuxt-link to="/async-posts-axios">Async Posts Axios</nuxt-link>
    <nuxt-link to="/fetch">Fetch Posts</nuxt-link>
    <nuxt-link to="/wp-posts">WP Posts</nuxt-link>
    <nuxt-link to="/test-login">Test Login</nuxt-link>
    <nuxt-link to="/add-image">Add image</nuxt-link>
    <nuxt-link to="/login">Login</nuxt-link>
  </nav>
</template>

<script>
export default {}
</script>

<style>
#top-nav {
  background-color: greenyellow;
  padding: 1em;
}

#top-nav a {
  margin-right: 2em;
}
</style>
