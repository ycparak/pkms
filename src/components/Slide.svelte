<script lang="ts">
  import type { Post } from "$lib/types";
	import { onMount } from "svelte";

  export let post: Post;
  export let scale: number;
  let previewComponent: any;

  onMount(async () => {
    if (post.hasPreviewComponent) {
      let componentName = post.slug.charAt(0).toUpperCase() + post.slug.slice(1);
      componentName = componentName.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      previewComponent = (await import(/* @vite-ignore */ `./projects/${componentName}.svelte`)).default
    }
  });

  const getAsset = (name: string) => new URL(`../assets/projects/${name}`, import.meta.url).href;
</script>

<div class="slide" style="transform: scale({scale})">
  {#if post.previewImage}
    <img class="asset" src={getAsset(post.previewImage)} alt="Apple XDR" draggable="false"  loading="lazy">
  {:else if post.hasPreviewComponent && previewComponent}
    <div class="component">
      <svelte:component this={previewComponent} />
    </div>
  {:else if post.previewVideo}
    <video class="asset" src={getAsset(post.previewVideo)} draggable="false" autoplay loop muted playsinline></video>
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
      padding: functions.toRem(38px);
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
      user-select: none;
      -webkit-user-drag: none;
      border-radius: 20px;
      overflow: hidden;
      @media screen and (min-width: 1512px){
        padding: 3.5dvh 5dvw 3.5dvh 5dvw;
      }
    }
    .component {
      position: absolute;
      padding: functions.toRem(38px);
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
      user-select: none;
      -webkit-user-drag: none;
      @media screen and (min-width: 1512px){
        padding: 10dvh 5dvw 10dvh 5dvw;
      }
    }
  }
</style>