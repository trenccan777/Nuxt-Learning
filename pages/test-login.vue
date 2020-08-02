<template>
  <div class="container">
    <h1>TEST LOGIN PAGE cez fetch</h1>
    <p>po reloadnutí vygeneruje token</p>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   fetch('http://127.0.0.1/web/wp-json/jwt-auth/v1/token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       accept: 'application/json'
  //     },
  //     body: JSON.stringify({
  //       username: 'nuxt',
  //       password: 'nuxt'
  //     })
  //   })
  //     .then(function(response) {
  //       return response.json()
  //     })
  //     .then(function(user) {
  //       console.log(user.data.token)
  //       if (localStorage.getItem('token') === null) {
  //         localStorage.setItem('token', user.data.token)
  //       }
  //     })
  // }
}
</script>

<style></style>
