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
  {#if post.previewImage}
    <div class="asset-wrapper">
      <img src="/images/previews/{post.previewImage}" alt="Apple XDR" draggable="false" loading="lazy">
    </div>
  {:else if post.hasPreviewComponent && previewComponent}
    <svelte:component this={previewComponent} />
  {:else if post.previewVideo}
    <div class="asset-wrapper">
      <video src={post.previewVideo} autoplay loop muted playsinline></video>
    </div>
  {/if}
</div>

<style lang="scss">
  .slide {
    display: flex;
    min-height: 100%;
    width: 100%;
    flex-shrink: 0;
  }

  .asset-wrapper {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    height: 100vh;
    height: 100dvh;
    padding: functions.toRem(50px) 0 0 0;
    img {
      object-fit: contain;
      object-position: center;
      max-height: 100%;
      max-width: 100%;
      user-select: none;
    }
  }
</style>