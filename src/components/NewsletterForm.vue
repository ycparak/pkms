<template>
  <form class="form">
    <div class="form__group">
      <input id="email" type="email" class="form__input" placeholder="Email Address">
    </div>
    <button class="form__button" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'NewsletterForm'
}
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 100%;
  margin: 28px 0;
}
.form__input {
  width: 100%;
  height: 36px;
  border-radius: 2px;
  padding: 0 12px;
  border: 1px solid var(--accent-color);
  box-shadow: none;
  font-size: 15px;
  font-weight: 500;
  line-height: 28px;
  background: var(--accent-color);
  color: var(--text-color);
  @include daynight;

  &::placeholder {
    color: var(--text-color);
    opacity: .7;
  }
  &:focus, &:active {
    outline: none !important;
    box-shadow: none !important;
  }
}
.form__button {
  border-radius: 2px;
  border: none;
  height: 36px;
  padding: 0 12px;
  line-height: 28px;
  margin-left: 8px;
  font-size: 15px;
  font-weight: 500;
  @include colors-inverted;
  background-color: var(--current-fill-color);
}
</style>