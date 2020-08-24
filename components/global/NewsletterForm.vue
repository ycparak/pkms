<template>
  <form class="form">
    <input id="email" type="email" class="input" placeholder="Email">
    <button class="button" type="submit">
      Subscribe
    </button>
  </form>
</template>

<script>
export default {
  name: 'NewsletterForm'
}
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  margin: 16px -12px 0 -12px;
  background: var(--accent-color-1);
  border-radius: 6px;
  border: 1px solid var(--line-color);
  box-shadow: var(--tooltip-shadow);
  overflow: hidden;
  .input {
    background: var(--accent-color-1);
    color: var(--text-color);
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    width: 100%;
    padding: 0 116px 0 12px;
    &::placeholder { color: var(--text-color) }
    &:focus, &:active {
      font-weight: 600;
      color: var(--note-color);
      transition: all .3s ease;
    }
    @media (max-width: 767px) {
      font-size: 13px;
      padding: 0 96px 0 12px;
    }
  }
  .button {
    position: absolute;
    top: 0;
    right: 0;
    height: 32px;
    line-height: 0;
    padding: 0 12px;
    font-size: 11px;
    background: none;
    border-left: 1px solid var(--newletter-submit-border);
    color: var(--icon-color);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: var(--accent-color-1);
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    @media (max-width: 767px) {
      padding: 0 12px;
      letter-spacing: 0.5px;
    }

    &:hover, &:focus, &:active {
      outline: none;
      box-shadow: none;
    }
  }
}
</style>
