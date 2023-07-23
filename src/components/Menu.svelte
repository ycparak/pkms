<script>
  import { menu } from '$lib/config'
</script>

{#each menu as menuBlock}
  <div>
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
  </div>
{/each}

<style lang="scss">
  h6 {
    font-size: 12px;
    line-height: 1;
    font-weight: 400;
    color: var(--color-text-light);
    margin-bottom: 14px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    margin: -4px;
    padding: 0;
  }

  a {
    display: inline-block;
    padding: 4px;
    text-decoration: none;
    color: var(--color-text-dark);
    @include mixins.lh-trim-element;
  }
</style>