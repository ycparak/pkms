<script lang="ts">
  import { menu } from '$lib/config'

  export let showMenu : boolean;
</script>

<div class="menus" class:open={showMenu}>
  {#each menu as menuBlock}
    <nav>
      <h6>{menuBlock.title}</h6>
      <ul>
        {#each menuBlock.links as link}
          <li hidden={link.hide}>
            <a 
              href={link.href}
              target={link.external ? "_blank" : "_self"}>
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  {/each}
</div>

<style lang="scss">
  .menus {
    display: flex;
    flex-direction: column;
    gap: functions.toRem(40px);
    margin-bottom: functions.toRem(24px);
    @media (max-width: functions.toRem(768px)) {
      transition: all .25s ease-in-out;
      visibility: hidden;
      transform: translateX(-100vw);
      opacity: 0;

      &.open {
        visibility: visible;
        transform: translateX(0);
        opacity: 1;
        transition-delay: .25s;
      }
    }
  }
  h6 {
    font-size: functions.toRem(12px);
    line-height: 1;
    font-weight: 400;
    color: var(--color-text-light);
    margin-bottom: functions.toRem(14px);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: functions.toRem(10px);
  }

  li {
    margin: functions.toRem(-4px);
    padding: 0;
  }

  a {
    display: inline-block;
    padding: functions.toRem(4px);
    text-decoration: none;
    color: var(--color-text-dark);
    @include mixins.lh-trim-element;
  }
</style>