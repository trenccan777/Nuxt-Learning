<template>
  <div class="container">
    <button type="button" @click="addNewFetchPost">
      Pridaj nový článok cez Fetch a Vuex
    </button>
    <button type="button" @click="addNewAxiosPost">
      Pridaj nový článok cez Axios a Vuex
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      add: 'posts/addFetchPost',
      addAxios: 'posts/addAxiosPost'
    }),
    addNewFetchPost() {
      const data = 'test'
      this.add(data)
    },
    addNewAxiosPost() {
      const data = 'test'
      this.addAxios(data)
    }
  }
}
</script>

<style></style>
