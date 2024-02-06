<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Post } from '$lib/types';

  export let date: string;
  export let post: Post;

  let showDescription = false;
</script>

<header>
  <div class="meta">
    <button
      tabindex="0"
      on:click={() => showDescription = !showDescription}
      class="meta-button"
      class:active={showDescription}>
      <div class="meta-button-icon"></div>
      <span><time>{date}</time> &middot; {post.project}</span>
    </button>
    {#if showDescription}
      <p
        transition:fade={{ delay: 0, duration: 300 }}
        class="meta-description"
        class:active={showDescription}>
        {post.description}
      </p>
    {/if}
  </div>
  {#if post.hasLink && post.linkTitle}
    <a
      transition:fade={{ delay: 200, duration: 300 }}
      href="{post.link ? post.link : `${post.path}`}"
      class="action"
      class:external="{post.link}"
      target="{post.link ? '_blank' : '_self'}"
      draggable="false">
      <span>{post.linkTitle}</span>
      <i class="ph-bold ph-arrow-right action-icon"></i>
    </a>
  {/if}
</header>

<style lang="scss">
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: functions.toRem(24px) functions.toRem(24px) 0 functions.toRem(24px);
    min-height: functions.toRem(28px);
    @media screen and (max-width: 1512px){
      margin-top: functions.toRem(20px);   
    }
  }

  .meta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    &-button {
      display: flex;
      flex-direction: row;
      align-items: center;
      @include mixins.interface-type-sm;
      height: fit-content;
      color: var(--color-text-accent);
      transition: all .3s ease;

      &-icon {
        width: functions.toRem(5px);
        height: functions.toRem(5px);
        border-radius: 50%;
        background-color: var(--color-text-accent);
        margin-right: functions.toRem(8px);
        animation: flash 2s infinite;
        transition: all .3s ease;
      }
      time {
        font-variant-numeric: tabular-nums;
      }

      &.active {
        color: var(--color-text);
        .meta-button-icon {
          background-color: var(--color-text);
          animation: none;
        }
      }

      &:hover, &:active {
        color: var(--color-text);
        .meta-button-icon {
          background-color: var(--color-text);
          animation: none;
        }
      }

      &:focus {
        outline: none;
        color: var(--color-focus);
        .meta-button-icon {
          background-color: var(--color-focus);
          animation: none;
        }
      }
    }
    &-description {
      position: absolute;
      top: functions.toRem(12px);
      background-color: var(--color-background-translucent);
      backdrop-filter: blur(20px);
      padding: functions.toRem(8px) functions.toRem(13px) functions.toRem(10px);
      z-index: 99;
      border-radius: functions.toRem(8px);
      border: 1px solid var(--color-background);
      display: block;
      font-size: functions.toRem(13.9276px);;
      line-height: 1.35;
      color: var(--color-text-accent);
      min-width: 288px;
      opacity: 0;
      transition: all .3s ease;
      transition-delay: 1s;
      &.active {
        transition: all .3s ease;
        transition-delay: 1s;
        opacity: 1;
      }
    }
  }
  
  .action {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--color-text-accent);
    text-decoration: none;
    @include mixins.interface-type-sm;
    transition: all .3s ease;
    height: fit-content;
    &-icon {
      height: functions.toRem(10px);
      margin-left: functions.toRem(8px);
    }
    &.external {
      .action-icon {
        transform: translateY(functions.toRem(1px)) rotate(-45deg);
      }
    }
    &:hover {
      color: var(--color-text);
    }
    &:focus {
      outline: none;
      color: var(--color-focus);
    }
  }
</style>