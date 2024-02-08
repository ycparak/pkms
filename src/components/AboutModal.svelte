<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  export let opacity : number;
  export let contentScale: number;
  export let contentOpacity: number;
  export let contentBlur: number;

  function keydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      dispatch('close');
    }
  }
</script>

<div
  tabindex="-1"
  role="button"
  class="overlay"
  on:keydown={keydown}
  on:click={() => dispatch('close')}
  style="opacity: {opacity}">
  <button class="close" on:click={() => dispatch('close')} style="opacity: {contentOpacity}; filter: blur({contentBlur}px);">
    <i class="ph ph-x"></i>
  </button>
</div>

<div class="container">
  <div class="content" style="transform: scale({contentScale});">
    <div class="content-text" style="opacity: {contentOpacity}; filter: blur({contentBlur}px);">
      <p>Hey, I’m Yusuf. I’m a South African Product Designer and Software Engineer. The broad through line of my work is an attempt to balance my love for designing, building, and tinkering on novel computer interfaces with my equally strong desire to build software (or software-adjacent) businesses. I’m at my happiest working on things that let me do both — <em>thoughtfully</em>.</p>
      <p>
        Previously, I created <a target="_blank" href="https://pinched.io">Pinched.io</a>, a sourcing tool built on top of Twitter’s social graph, <a target="_blank" href="https://pioneer.app/blog/september-2022/">backed by Pioneer</a>. Before that, I was a design engineer at <a target="_blank" href="https://thinkst.com">Thinkst</a> where I worked on <a target="_blank" href="https://canary.tools">Canary</a>, a tool used by security teams to detect attackers on their networks. In university, I studied Computer Science.
      </p>
      <ul>
        <li><a target="_blank" href="mailto:yusuf.parak@gmail.com">Email</a></li>
        <li><a target="_blank" href="https://twitter.com/ycparak">Twitter / X</a></li>
        <li><a target="_blank" href="https://github.com/ycparak">GitHub</a></li>
      </ul>
    </div>
    <div class="content-image" style="opacity: {contentOpacity}; filter: blur({contentBlur}px);">
      <img src="/images/me.webp" alt="Yusuf Parak" />
    </div>
  </div>
</div>

<style lang="scss">
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: all;
    cursor: default;
    touch-action: manipulation;
    background-color: hsla(0,0%,100%,.94);
    z-index: 899;
    button {
      position: absolute;
      top: 2dvh;
      right: 2dvh;
      padding: 0;
      margin: 0;
      background: none;
      border: none;
      cursor: pointer;
      color: #d6d6d6;
      font-size: 36px;
      @media (min-width: 660px) {
        top: functions.toRem(24px);
        right: functions.toRem(24px);
      }
    }
  }

  .container {
    display: grid;
    place-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 999;
    pointer-events: none;
  }

  .content {
    display: grid;
    margin: 0 auto;
    width: 80dvw;
    max-width: functions.toRem(920px);
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: functions.toRem(68px);

    @media (max-width: 660px) {
      grid-template-columns: auto;
      grid-template-rows: 1;
      gap: functions.toRem(20px);
    }

    &-text {
      font-size: 16px;
      line-height: 1.5;
      pointer-events: all;

      @media (min-width: 920px) {
        font-size: 18px;
      }

      p {
        margin-bottom: functions.toRem(24px);
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      a {
        transition: all .3s ease;
        color: var(--color-text-accent);
        &:hover {
          color: var(--color-text);
        }
      }

      @media (max-width: 660px) {
        grid-row-start: 2;
      }
    }

    &-image {
      img {
        margin: functions.toRem(6px) auto 0 auto;
        max-height: 90%;
        border-radius: 4px;
      }
      @media (max-width: 660px) {
        grid-row-start: 1;
        img {
          margin: 0;
          max-width: functions.toRem(140px);
          border-radius: 6px;
        }
      }
    }
  }
</style>