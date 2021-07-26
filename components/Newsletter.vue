<template>
  <div class="newsletter" :class="{ 'no-border' : noBorder }">
    <p><strong>The Email Newsletter</strong>. Get new posts, new projects, and other significant updates delivered to your inbox. Alternatively, you can follow me on <a href="https://twitter.com/ycparak" target="_blank">Twitter</a>.</p>
    <div class="form-group">
      <input id="email" type="email" name="email" placeholder="Email address">
      <button type="submit">Subscribe</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newsletter',
  props: {
    noBorder: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.newsletter {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: calc(var(--margin) - 6px) var(--margin);
  &.no-border {
    padding: 0;
    border: none;
  }
}
.form-group {
  margin: 16px 0 6px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  input {
    flex-grow: 5;
    background: var(--line);
    color: var(--text);
    border-radius: 4px;
  }
  button {
    flex-grow: 1;
    margin-left: 16px;
  }
}
.no-border .form-group {
  margin-bottom: 0;
}
</style>
