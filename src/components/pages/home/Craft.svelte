<h3>Craft</h3>
<div class="designs">
  <div class="design"></div>
  <nav></nav>
</div>
<aside>
  <ul>
    <li class="active">AI word picker</li>
    <li>Link Preview</li>
    <li>Search history</li>
    <li>Bionic reading</li>
    <li>Radial Menu</li>
  </ul>
</aside>
<div class="spacer-lg"></div>

<style lang="scss">
  .designs {
    .design {
      background: var(--color-background-accent);
      width: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 8px;
      border: functions.toRem(1px) solid var(--color-line);
    }
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
    padding: 0;
    &.active {
      color: var(--color-text-dark);
    }
  }
</style>