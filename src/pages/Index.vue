<template>
  <Layout v-slot:default="slotProps">
    <Grid>
      <Profile />
      <PostList
        v-for="(collection, index) in collections"
        :key="index"
        :slot-props="slotProps"
        :type="collection" />
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
  computed: {
    collections() {
      return [
        'all',
        'projects',
        'essays',
        'tweetstorms',
        'notes',
        'quotes',
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>