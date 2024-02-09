<script lang="ts">
  import type { Post } from "$lib/types";
  import { runAnimation } from '$lib/stores';
  import { tweened } from 'svelte/motion';
	import { quadIn, circOut } from 'svelte/easing';
	import { onMount } from "svelte";

  export let post: Post;
  export let scale: number;
  let previewComponent: any;

  const slideScale = tweened(1.07, {
    duration: 400,
    delay: 100,
    easing: circOut
  });

  const slideOpacity = tweened(0, {
    duration: 400,
    delay: 0,
    easing: quadIn
  });

  const slideBlur = tweened(3, {
    duration: 400,
    delay: 0,
    easing: quadIn
  });

  $: if (runAnimation) {
    slideScale.set(1);
    slideOpacity.set(1);
    slideBlur.set(0);
  }

  onMount(async () => {
    if (post.hasPreviewComponent) {
      let category = post.category;
      let componentName = post.slug.charAt(0).toUpperCase() + post.slug.slice(1);
      componentName = componentName.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      previewComponent = (await import(/* @vite-ignore */ `./${category}/${componentName}.svelte`)).default
    }
  });

  const getAsset = (name: string) => new URL(`../assets/${post.category}/${name}`, import.meta.url).href;
</script>

<div class="slide" style="transform: scale({scale})">
  {#if post.previewImage}
    <img
      style="transform: scale({$slideScale}); opacity: {$slideOpacity}; filter: blur({$slideBlur}px);"
      class="asset"
      src={getAsset(post.previewImage)}
      alt="Apple XDR"
      draggable="false"
      loading="lazy">

  {:else if post.hasPreviewComponent && previewComponent}
    <div
      style="transform: scale({$slideScale}); opacity: {$slideOpacity}; filter: blur({$slideBlur}px);"
      class="component">
      <svelte:component
        this={previewComponent} />
    </div>

  {:else if post.previewVideo}
    <video
      style="transform: scale({$slideScale}); opacity: {$slideOpacity}; filter: blur({$slideBlur}px);"
      class="asset"
      src={getAsset(post.previewVideo)}
      draggable="false"
      autoplay
      loop
      muted
      playsinline>
    </video>
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