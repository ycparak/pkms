<template>
  <Layout v-slot:default="slotProps">
    <Grid>
      <Profile />
      <PostList :slot-props="slotProps" type="all" />
      <PostList :slot-props="slotProps" type="tweetstorms" />
      <PostList :slot-props="slotProps" type="notes" />
      <PostList :slot-props="slotProps" type="quotes" />
    </Grid>
  </Layout>
</template>

<script>
import Profile from '~/components/Profile'
import PostList from '~/components/PostList'

export default {
  name: 'Index',
  components: {
    Profile,
    PostList,
  },
}
</script>

<style lang="scss" scoped>
</style>