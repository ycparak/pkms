<script lang="ts">
</script>

<a href="/">
  <h1>Yusuf Parak</h1>
  <h2>
    <span>Design Engineer</span>
  </h2>
</a>

<style lang="scss">
  a {
    display: flex;
    max-width: fit-content;
    flex-direction: column;
    gap: functions.toRem(10px);
    text-decoration: none;
    color: var(--color-text);
  }
  h1, h2 {
    position: relative;
    display: inline-block;
    font-weight: 500;
    max-width: fit-content;
    @include mixins.lh-trim-element;
    margin: 0;
  }
  h2 {
    margin-bottom: 1px;
    span {
      color: var(--color-text-light);
    }
  }
</style>