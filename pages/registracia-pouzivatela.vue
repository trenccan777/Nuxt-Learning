<template>
  <form id="login-form" @submit="userRegistration">
    <label>Používateľské meno:</label>
    <input v-model="registration.username" type="text" class="reg-username" />
    <label>Email:</label>
    <input v-model="registration.email" type="email" class="reg-email" />
    <label>Heslo:</label>
    <input
      v-model="registration.password"
      type="password"
      class="reg-password"
    />
    <button type="submit">Registrovať</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      registration: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userRegistration(e) {
      e.preventDefault()

      const data = {
        username: this.registration.username,
        password: this.registration.password,
        email: this.registration.email
      }

      this.$axios.setHeader('Content-Type', 'application/json')
      this.$axios.setHeader('accept', 'application/json')

      const response = await this.$axios.post('/users', data)
      console.log(response)
      return response
    }
  }
}
</script>

<style></style>
