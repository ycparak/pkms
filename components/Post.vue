<template>
  <div class="post">
    <header class="post-header">
      <h1 class="post-title">{{ post.title }}</h1>
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
}
.nuxt-content {
  margin-bottom: 10vh;
  h3 {
    font-size: 21px;
    font-weight: 700;
  }
  p {
    font-family: 'IBM Plex Serif', Georgia, 'Times New Roman', Times, serif;
    font-size: 17px;
    line-height: 23px;
    margin-bottom: 28px;
    font-weight: 400;
  }
}
</style>
