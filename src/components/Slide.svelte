<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  import type { Project } from "$lib/types";
  import { runAnimation } from '$lib/stores';
  import { tweened } from 'svelte/motion';
	import { quadIn, circOut } from 'svelte/easing';
	import { onMount } from "svelte";

  export let post: Project;
  export let scale: number;
  export let lazy: boolean;
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
    if (post.previewComponent) {
      previewComponent = (await import(/* @vite-ignore */ `./${post.previewComponent}.svelte`)).default
    }
  });
</script>

<div class="slide" style="transform: scale({scale})">
  {#if post.previewImage}
    <CldImage
      style="transform: scale({$slideScale}); opacity: {$slideOpacity}; filter: blur({$slideBlur}px);"
      class="asset"
      src={post.previewImage}
      aspectRatio="16:9"
      width={post.imageWidth}
      height={post.imageHeight}
      alt={post.title}
      priority={!lazy}
      draggable="false" />

  {:else if post.previewComponent && previewComponent}
    <div
      style="transform: scale({$slideScale}); opacity: {$slideOpacity}; filter: blur({$slideBlur}px);"
      class="component">
      <svelte:component this={previewComponent} />
    </div>

  {:else if post.previewVideo}
    <video
      style="transform: scale({$slideScale}); opacity: {$slideOpacity}; filter: blur({$slideBlur}px);"
      class="asset"
      src="/images/{post.previewVideo}"
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
    :global(.asset) {
      position: absolute;
      padding: functions.toRem(38px);
      height: 100% !important;
      width: 100% !important;
      object-fit: contain !important;
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
        padding: 3.5dvh 5dvw 3.5dvh 5dvw;
      }
    }
  }
</style>