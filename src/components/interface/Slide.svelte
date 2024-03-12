<script lang="ts">
  // import { CldImage } from 'svelte-cloudinary';
  import type { Project } from "$lib/types";
  import { runAnimation } from '$lib/stores';
  import { tweened } from 'svelte/motion';
	import { quadInOut, circOut } from 'svelte/easing';

  export let project: Project;
  export let scale: number;
  // export let lazy: boolean;
  // let previewComponent: any;
  let props = {isPrototype: false};

  const slideScale = tweened(1.07, {
    duration: 400,
    delay: 100,
    easing: circOut
  });

  const slideOpacity = tweened(0, {
    duration: 800,
    delay: 0,
    easing: quadInOut
  });

  const slideBlur = tweened(0, {
    duration: 800,
    delay: 0,
    easing: quadInOut
  });

  $: if (runAnimation) {
    slideScale.set(1);
    slideOpacity.set(1);
    slideBlur.set(0);
  }
</script>

<div class="slide" style="transform: scale({scale})">
  <div
    style="transform: scale({$slideScale}); opacity: {$slideOpacity}; filter: blur({$slideBlur}px);"
    class="component">
    <svelte:component this={project.default} {...props} />
  </div>
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
    .component {
      display: grid;
      place-items: center;
      position: absolute;
      height: 100%;
      width: 100%;
      user-select: none;
      -webkit-user-drag: none;
    }
  }
</style>