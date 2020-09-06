<template>
  <b-col>
    <b-card
      :img-src="post.feature_img_url"
      img-alt="Card image"
      img-top
      class="post-excerpt"
    >
      <h4>
        <nuxt-link :to="`/clanok/${post.id}`">{{
          post.title.rendered
        }}</nuxt-link>
      </h4>

      <b-card-text>
        <p v-html="post.excerpt.rendered"></p>
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
.post-excerpt {
  margin-bottom: 2em;
}
</style>
