<template>
  <div>
    <input type="text" name="name" />
    <input id="wpimage" name="image" type="file" />
    <button type="button" @click="addImageAxios">Pridat obrazok Axios</button>
    <button type="button" @click="addImageFetch">Pridat obrazok Fetch</button>
  </div>
</template>

<script>
export default {
  methods: {
    async addImageAxios() {
      const token = localStorage.getItem('auth._token.local')

      const formData = new FormData()
      const img = document.getElementById('wpimage')
      formData.append('title', 'toto je title')
      formData.append('caption', 'toto je caption')
      formData.append('post', 28)
      formData.append('file', img.files[0])

      this.$axios.setHeader('Authorization', token)

      const response = await this.$axios.post('/media', formData)
      console.log(response)
    },
    addImageFetch() {
      const token = localStorage.getItem('auth._token.local')
      const formData = new FormData()
      const img = document.getElementById('wpimage')
      formData.append('title', 'toto je title')
      formData.append('caption', 'toto je caption')
      formData.append('file', img.files[0])

      fetch('http://192.168.99.100/web/wp-json/wp/v2/media', {
        method: 'POST',
        headers: {
          Authorization: token
        },
        body: formData
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
        })
    }
  }
}
</script>

<style></style>
