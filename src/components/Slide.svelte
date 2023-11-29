<script lang="ts">
  import type { Post } from "$lib/types";
	import { onMount } from "svelte";

  export let post: Post;
  export let scale: number;
  let previewComponent: any;

  onMount(async () => {
    if (post.hasPreviewComponent) {
      const slug = post.slug.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join("");
      previewComponent = (await import(/* @vite-ignore */ `./previews/${slug}.svelte`)).default
    }
  });

  const getImgUrl = (name: string) => new URL(`../lib/images/${name}`, import.meta.url).href;
</script>

<div class="slide" style="transform: scale({scale})">
  <div class="asset-wrapper">
    {#if post.previewImage}
      <img class="img" src={getImgUrl(post.previewImage)} alt="Apple XDR" draggable="false"  loading="lazy">
    {:else if post.hasPreviewComponent && previewComponent}
      <svelte:component this={previewComponent} />
    {:else if post.previewVideo}
      <video src={post.previewVideo} draggable="false" autoplay loop muted playsinline></video>
    {/if}
  </div>
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
    max-height: calc(100dvh - functions.toRem(56px));
    padding: 5dvh 8dvw 8dvh 8dvw;
    margin: 0 auto;
    .img {
      object-fit: contain;
      object-position: center;
      max-height: 100%;
      max-width: 100%;
      user-select: none;
      -webkit-user-drag: none;
    }
  }
</style>