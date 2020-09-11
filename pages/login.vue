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
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin(e) {
      e.preventDefault()

      try {
        await this.$auth.loginWith('local', {
          data: this.login
        })
      } catch (err) {}
    }
  }
}
</script>
