<template>
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/ycpso"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://buttondown.email/ycpso', 'popupwindow')"
    class="form">
    <input
      id="bd-email"
      v-model="email"
      type="email"
      name="email"
      class="input"
      placeholder="Email">
    <input type="hidden" value="1" name="embed"></input>
    <input
      type="submit"
      value="Subscribe"
      class="button"
      :disabled="isSubmitDisabled">
    </input>
  </form>
</template>

<script>
export default {
  name: 'NewsletterForm',
  data() {
    return {
      email: null
    }
  },
  computed: {
    isSubmitDisabled() {
      if (!this.email || !this.validEmail(this.email)) {
        return true
      }

      return false
    }
  },
  methods: {
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
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
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    width: 100%;
    padding: 0 116px 0 12px;
    color: var(--note-color);
    font-weight: 600;
    &::placeholder {
      color: var(--text-color);
      font-weight: 400;
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
    border-left: 1px solid var(--newletter-submit-border);
    color: var(--background-color);
    background: var(--note-color);
    font-weight: 720;
    text-transform: uppercase;
    letter-spacing: 2px;
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

    &:disabled {
      cursor: not-allowed;
      color: var(--icon-color);
      background: var(--accent-color-1);
      font-weight: 600;
    }
  }
}
</style>
