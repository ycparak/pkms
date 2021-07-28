<template>
  <div class="newsletter">
    <input id="name" class="name" type="name" name="name" placeholder="First name">
    <div class="form-group">
      <input id="email" class="email" type="email" name="email" placeholder="Email address">
      <button class="submit" type="submit">&rarr;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newsletter',
}
</script>

<style lang="scss" scoped>
.newsletter {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: var(--margin);
  transition: all .1s ease-in-out;
  .name {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    transition: all .1s ease-in-out;
  }
  .form-group {
    flex-grow: 7;
    position: relative;
    .email {
      width: 100%;
      display: block;
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      transition: all .1s ease-in-out;
    }
    .submit {
      position: absolute;
      right: -21px;
      top: 4px;
      width: 28px;
      height: 28px;
      background: var(--line);
      border: 1px solid var(--line);
      color: var(--subtle-text);
      transition: all .1s ease-in-out;
    }
  }
}
</style>
