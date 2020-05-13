<template>
  <div class="social">
    <div class="container">
      <a href="https://aemail.com/vw8" target="_blank" class="btn-social">
        <MailIcon class="icon icon-email" />
      </a>
      <a href="https://twitter.com/ycparak" target="_blank" class="btn-social">
        <TwitterIcon class="icon icon-twitter" />
      </a>
      <a href="https://github.com/ycparak" target="_blank" class="btn-social">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="icon">
          <title>GitHub icon</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import { MailIcon, TwitterIcon } from 'vue-feather-icons';

export default {
  name: 'SocialButtons',
  components: {
    MailIcon,
    TwitterIcon
  }
}
</script>

<style lang="scss" scoped>
.social {
  color: var(--text-color);
  position: relative;
  top: 8px;
  @include daynight;
  @media (max-width: 768px) {
    top: 0;
    right: -8px;
  }
}
.container {
  text-align: center;
}
.btn-social {
  display: block;
  margin: 8px 0;
  padding: 0;
  text-decoration: none;
  color: var(--text-color);
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background: transparent;
  &:first-child { margin-top: 0; }
  &:last-child { margin-bottom: 0; }
  &:hover, &:focus, &:active {
    outline: none;
    box-shadow: none;
  }
  @media (max-width: 768px) {
    display: inline-block;
    margin: 0 8px;
    &:first-child { margin-left: 0; }
    &:last-child { margin-right: 0; }
  }

  // Icons
  .icon {
    fill: var(--text-color);
    width: 15px;
    height: 15px;
    @include daynight;
  }
  .icon-email {
    height: 17px;
    width: 17px;
    fill: transparent;
    stroke: var(--text-color);
    @media (max-width: 768px) {
      position: relative;
      top: 1px;
    }
  }
  .icon-twitter {
    width: 16px;
    height: 16px;
    fill: var(--text-color);
    stroke: var(--text-color);
    @media (min-width: 768px) {
      position: relative;
      top: 1px;
    }
  }
}
.btn-social:hover .icon {
  fill: var(--neutral-color);
}
.btn-social:hover .icon-email {
  fill: var(--background-color);
  stroke: var(--neutral-color);
}
.btn-social:hover .icon-twitter {
  fill: var(--neutral-color);
  stroke: var(--neutral-color);
}
</style>
