<template>
  <div class="post">
    <header class="post-header">
      <h1 class="post-title">{{ post.title }}</h1>
      <time class="date post-date">Published on {{ date }}</time>
    </header>
    <article>
      <slot></slot>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      return this.$moment(this.post.createdAt).format('DD MMMM YYYY')
    },
  },
}
</script>

<style lang="scss">
.post-header, .nuxt-content {
  display: grid;
  grid-template-columns: 1fr 32px min(65ch, 100%) 32px 1fr;
  * {
    grid-column: 3;
  }
}
.post-header {
  margin-top: 10vh;
  margin-bottom: 28px;
  .post-title {
    font-size: 56px;
    font-weight: 900;
  }
  .post-date {
    margin-top: 20px;
    font-size: 13px;
  }
}
.nuxt-content {
  margin-bottom: 10vh;
  h3 {
    font-size: 21px;
    font-weight: 700;
  }
  a {
    color: inherit;
    text-decoration: underline;
  }
}
</style>
