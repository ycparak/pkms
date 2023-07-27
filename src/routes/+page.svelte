<script lang="ts">
  import * as config from '$lib/config'
  export let data;
  let posts = data?.posts;
</script>

<div class="text">
  {#each posts as post}
    <p>
      <a href={post.slug}>{post.title}</a> <br>
      {post.description}
    </p>
  {/each}
</div>

<style lang="scss">
  .text {
    margin: 200px 204px;
    max-width: 432px;
    p {
      font-size: 15px;
      line-height: 25px;
      margin: 1.8em 0;
      color: #151515;
      a {
        color: #000;
        text-decoration: none;
        font-weight: 500;
      }
    }
  }
</style>
