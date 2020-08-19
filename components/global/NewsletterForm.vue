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
  margin: 12px -12px 0 -12px;
  background: var(--accent-color-1);
  border-radius: 6px;
  overflow: hidden;
  .input {
    background: var(--accent-color-1);
    color: #fff;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    width: 100%;
    padding: 0 132px 0 12px;
    transition: all .3s ease;
    &::placeholder { color: #fff }
    &:focus, &:active {
      font-weight: 600;
      color: var(--note-color);
    }
  }
  .button {
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    height: 36px;
    line-height: 36px;
    padding: 0 20px;
    font-size: 11px;
    background: none;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: var(--accent-color-1);
  }
}
</style>
