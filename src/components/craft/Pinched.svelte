<script lang="ts">
  // import { CldImage } from 'svelte-cloudinary';
  // export let lazy: boolean;
  // let previewComponent: any;
</script>

<!-- {#if post.previewImage}
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

{:else if post.previewComponent && previewComponent} -->

<!-- {:else if post.previewVideo}
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
{/if} -->

<style lang="scss">
  /* .slide {
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
      padding: var(--space-container-v) var(--space-container-h);
      height: 100% !important;
      width: 100% !important;
      object-fit: contain !important;
      object-position: center;
      user-select: none;
      -webkit-user-drag: none;
      border-radius: 20px;
      overflow: hidden;
      @media screen and (min-width: 1512px){
        padding: var(--space-container-v) calc(var(--space-container-h) * 2)
      }
    }
  } */
</style>