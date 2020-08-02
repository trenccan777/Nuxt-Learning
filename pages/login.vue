<template>
  <div>
    <form @submit="userLogin">
      <div>
        <label>Username</label>
        <input v-model="login.username" type="text" />
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.password" type="text" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: 'nuxt',
        password: 'nuxt'
      }
    }
  },
  methods: {
    async userLogin(e) {
      e.preventDefault()

      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
