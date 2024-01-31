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
  {#if post.previewImage}
    <img class="asset" src={getImgUrl(post.previewImage)} alt="Apple XDR" draggable="false"  loading="lazy">
  {:else if post.hasPreviewComponent && previewComponent}
    <div class="asset">
      <svelte:component this={previewComponent} />
    </div>
  {:else if post.previewVideo}
    <video class="asset" src={post.previewVideo} draggable="false" autoplay loop muted playsinline></video>
  {/if}
</div>

<style lang="scss">
  .slide {
    position: relative;
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 100%;
    .asset {
      position: absolute;
      padding: 3.5dvh 6dvw 3.5dvh 6dvw;
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
      user-select: none;
      -webkit-user-drag: none;
    }
  }
</style>