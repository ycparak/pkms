<template>
  <NuxtLink :to="post.path" class="post-item">
    <Grid>
      <div class="item-box">
        <span class="date post-date">{{ date }}</span>
        <span class="title">{{ post.title }}</span>
      </div>
    </Grid>
  </NuxtLink>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      return this.$moment(this.post.createdAt).format('MMM YYYY')
    },
  },
}
</script>

<style lang="scss" scoped>
.post-item {
  display: block;
  transition: all .1s ease-in-out;
  border-bottom: 1px solid var(--line);
  @media (max-width: 990px) {
    border-top: 1px solid var(--line);
    border-bottom: none;
  }
}
.item-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 68px;
  transition: all .1s ease-in-out;
  .post-date {
    margin-right: 28px;
  }
  .title {
    font-weight: 500;
    color: var(--text);
    transition: all .1s ease-in-out;
    line-height: 1.4;
  }
  @media (max-width: 1150px) {
    min-height: 56px;
    .post-date {
      margin-right: 20px;
    }
    .title {
      font-size: 15px;
    }
  }
  @media (max-width: 990px) {
    border-right: none;
    .title {
      font-size: 16px;
    }
  }
  @media (max-width: 640px) {
    display: block;
    min-height: auto;
    padding: 16px 0;
    .post-date {
      margin-right: 0;
      display: block;
      margin-bottom: 8px;
    }
    .title {
      font-size: 14px;
    }
  }
}
</style>
