<script lang="ts">
  import type { Post } from "$lib/types";
	import { onMount } from "svelte";

  export let index = 0;
  export let post: Post;
  let previewComponent: any;

  onMount(async () => {
    if (post.hasPreviewComponent) {
      let slug = post.slug.split("/")[1].charAt(0).toUpperCase() + post.slug.split("/")[1].slice(1)
      previewComponent = (await import(/* @vite-ignore */ `./content/${slug}Preview.svelte`)).default
    }
  });
</script>

<div 
  id="slide-{index}"
  class="slide">
  <div class="wrapper">
    {#if post.previewImage}
      <img src="/images/previews/{post.previewImage}" alt="Apple XDR" draggable="false" loading="lazy">
    {:else if post.hasPreviewComponent && previewComponent}
      <svelte:component this={previewComponent} />
    {:else if post.previewVideo}
      <video src={post.previewVideo} autoplay loop muted playsinline></video>
    {/if}
  </div>
</div>

<style lang="scss">
  .slide {
    display: flex;
    min-height: 100%;
    width: 100%;
    flex-shrink: 0;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 100vh;

    img {
      object-fit: contain;
      object-position: center;
      max-height: 100%;
      max-width: 100%;
      user-select: none;
      padding: functions.toRem(60px) 0;
    }
  }
</style>