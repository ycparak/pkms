<script lang="ts">
  import { menu } from '$lib/config'
</script>

{#each menu as menuBlock}
  <nav>
    <h6>{menuBlock.title}</h6>
    <ul>
      {#each menuBlock.links as link}
        <li hidden={link.hide}>
          <a 
            href={link.href}
            target={link.external ? "_blank" : ""}>
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/each}

<style lang="scss">
  h6 {
    font-size: functions.toRem(12px);
    line-height: functions.toRem(12px);
    font-weight: 400;
    color: var(--color-text-light);
    margin-bottom: functions.toRem(20px);
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: functions.toRem(11px);
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