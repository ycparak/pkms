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

  const getImgUrl = (name: string) => new URL(`../lib/images/${name}`, import.meta.url).href;
</script>

<div 
  id="slide-{index}"
  class="slide">
  {#if post.previewImage}
    <div class="asset-wrapper">
      <img class="img" src={getImgUrl(post.previewImage)} alt="Apple XDR" draggable="false"  loading="lazy">
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
    flex-grow: 1;
    display: flex;
    min-height: 100%;
    width: 100%;
    flex-shrink: 0;
  }

  .asset-wrapper {
    --nav-height: functions.toRem(68px);
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: calc(100vh - functions.toRem(68px));
    max-height: calc(100dvh - functions.toRem(68px));
    // padding: functions.toRem(56px) 0 functions.toRem(68px) 0;
    padding: 0 0 functions.toRem(68px) 0; // TODO: Remove this once we have proper images
    .img {
      object-fit: contain;
      object-position: center;
      max-height: 100%;
      max-width: 100%;
      user-select: none;
    }
  }
</style>