<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">Home</b-navbar-brand>
      <b-navbar-nav left>
        <b-nav-item-dropdown text="Wordpress data" left>
          <b-dropdown-item to="/wp-posts">Wordpress Posts</b-dropdown-item>
          <b-dropdown-item to="/add-image">Add Image</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Post from JSON placeholder" right>
          <b-dropdown-item to="/async-posts">Async Posts</b-dropdown-item>
          <b-dropdown-item to="/async-posts-axios"
            >Async Posts Axios</b-dropdown-item
          >
          <b-dropdown-item to="/fetch">Fetch Posts</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/login">Login</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
