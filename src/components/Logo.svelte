<script lang="ts">
  export let depth : number;
  export let pathname : string;

  // If depth is 2, then return its parent path
  const getParentPath = (path: string) => {
    if (depth < 2) return '/'
    const pathArr = path.split('/');
    pathArr.pop();
    return pathArr.join('/');
  };
</script>

<div class="row">
  <h1>
    <a href="/">
      Yusuf Parak<br>
      <span>Design Engineer</span>
    </a>
  </h1>

  <a href={getParentPath(pathname)} class="backlink" class:inactive={depth === 0}>
    <span>&larr;</span>
  </a>
</div>

<style lang="scss">
  .row {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: functions.toRem(24px);
    padding-left: functions.toRem(24px);
    margin-bottom: var(--spacer-lg);
  }
  h1 {
    font-weight: 500;
    @include mixins.lh-trim-element;
    margin: 0;
    padding: 0;
    margin-bottom: functions.toRem(2px);
    a {
      display: block;
      text-decoration: none;
      color: var(--color-text-dark);
    }
    span {
      color: var(--color-text-light);
    }
  }

  .backlink {
    display: block;
    position: fixed;
    left: calc(functions.toRem(204px) - functions.toRem(23px));
    background-color: var(--color-background);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 1;
    border-radius: functions.toRem(28px) 0 0 functions.toRem(28px);
    height: functions.toRem(28px);
    width: 100%;
    max-width: functions.toRem(23px);
    border: functions.toRem(1px) solid var(--color-line);
    border-right: functions.toRem(1px) solid var(--color-background);
    transition: all .35s ease-in;
    transition-delay: .2s;
    text-decoration: none;
    color: var(--color-text-dark);
    z-index: 150;
    span {
      transition: all .35s ease-in;
      transition-delay: .2s;
      @include mixins.lh-trim-element;
      transform: translateX(functions.toRem(3.5px)) translateY(functions.toRem(1px)) scale(1);
    }
    &.inactive {
      pointer-events: none;
      transition: all .35s ease-in;
      max-width: 0;
      transform: translateX(functions.toRem(22px));
      span {
        transition: all .35s ease-in;
        font-size: 0;
      }
    }
  }

</style>