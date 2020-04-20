<template>
  <footer class="footer">
    <div class="footer__collections">
      <ul
        v-if="isHomePage()"
        class="footer__collections--list">
        <li
          class="footer__collection"
          :class="{ active: collection === 'all' || collectionNext === 'all' }"
          @mouseover="mouseoverCollection('all')"
          @mouseleave="mouseleaveCollection('all')"
          @click="setCollection('all')">
          <span class="footer__collection--color all"></span>
          All
        </li>
        <li
          class="footer__collection"
          :class="{ active: collection === 'essay' || collectionNext === 'essay' }"
          @mouseover="mouseoverCollection('essay')"
          @mouseleave="mouseleaveCollection('essay')"
          @click="setCollection('essay')">
          <span class="footer__collection--color essay"></span>
          Essays
        </li>
        <li
          class="footer__collection"
          :class="{ active: collection === 'tweetstorm' || collectionNext === 'tweetstorm' }"
          @mouseover="mouseoverCollection('tweetstorm')"
          @mouseleave="mouseleaveCollection('tweetstorm')"
          @click="setCollection('tweetstorm')">
          <span class="footer__collection--color tweetstorm"></span>
          Tweetstorms
        </li>
        <li
          class="footer__collection"
          :class="{ active: collection === 'project' || collectionNext === 'project' }"
          @mouseover="mouseoverCollection('project')"
          @mouseleave="mouseleaveCollection('project')"
          @click="setCollection('project')">
          <span class="footer__collection--color project"></span>
          Projects
        </li>
      </ul>
    </div>
    <div class="footer__links">
      <a href="https://aemail.com/vw8" target="_blank" class="footer__link">
        <MailIcon class="footer__link-icon footer__link-icon--email" />
      </a>
      <a href="https://twitter.com/ycparak" target="_blank" class="footer__link">
        <TwitterIcon class="footer__link-icon footer__link-icon--twitter" />
      </a>
      <a href="https://github.com/ycparak" target="_blank" class="footer__link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="footer__link-icon">
          <title>GitHub icon</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </a>
    </div>
  </footer>
</template>

<script>
import { MailIcon, TwitterIcon } from 'vue-feather-icons';

export default {
  name: 'Footer',
  props: ['collection', 'collectionNext'],
  components: {
    MailIcon,
    TwitterIcon
  },
  methods: {
    isHomePage() {
      if (this.$route.path === '/') return true;
      return false;
    },
    setCollection(collection) {
      this.$parent.setCollection(collection)
    },
    mouseoverCollection(collection) {
      this.$parent.setNextCollection(collection)
    },
    mouseleaveCollection() {
      this.$parent.revertCollection();
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 44px;
  bottom: 44px;
  right: 44px;
  display: grid;
  grid-template-columns: 75% 1fr;
  align-items: end;
  color: var(--text-color);
  @include daynight;
  @media (max-width: 1500px) {
    bottom: 32px;
    left: 32px;
    right: 32px;
  }
  @media (max-width: 768px) {
    bottom: 24px;
    left: 24px;
    right: 24px;
  }
  @media (max-width: 676px) {
    bottom: 20px;
    left: 20px;
    right: 20px;
  }
  @media (max-width: 576px) {
    bottom: 12px;
    left: 12px;
    right: 12px;
  }
}
.footer__collections--list {
  display: none;
  @media (min-width: 1060px) {
    display: inline-block;
    margin: 0;
    padding: 0;
    position: relative;
    bottom: -2px;
    .footer__collection {
      font-size: 15px;
      line-height: 15px;
      margin: 0;
      padding: 8px 0;
      color: var(--accent-color-3);
      font-weight: 500;
      cursor: pointer;
      @include daynight;
      &:last-child {
        padding-bottom: 0;
      }
      .footer__collection--color {
        display: inline-block;
        width: 8px;
        height: 8px;
        background: var(--text-color);
        margin-right: 4px;
        border-radius: 50%;
        position: relative;
        top: -1px;
        opacity: 0.2;
        &.essay  {
          background: var(--essays-color);
        }
        &.project  {
          background: var(--projects-color);
        }
        &.tweetstorm  {
          background: var(--twitter-color);
        }
      }
      &:hover, &.active {
        font-weight: 500;
        color: var(--text-color);
        .footer__collection--color {
          opacity: 1;
          @include daynight;
        }
      }
    }
  }
}
.footer__links {
  display: grid;
  text-align: center;
  justify-content: end;
  position: relative;
  right: -7px;
  bottom: -7px;
}
.footer__link {
  display: block;
  margin: 8px 0;
  padding: 0;
  text-decoration: none;
  position: relative;
  top: -4px;
  color: var(--text-color);
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background: transparent;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover, &:focus, &:active {
    outline: none;
    box-shadow: none;
  }
  // Icons
  .footer__link-icon {
    vertical-align: middle;
    fill: var(--text-color);
    width: 15px;
    height: 15px;
    @include daynight;
  }
  .footer__link-icon--email {
    height: 17px;
    width: 17px;
    fill: transparent;
    stroke: var(--text-color)
  }
  .footer__link-icon--twitter {
    width: 16px;
    height: 16px;
    fill: var(--text-color);
    stroke: var(--text-color);
    position: relative;
    top: 1px;
  }
}
.footer__link:hover .footer__link-icon {
  fill: var(--neutral-color);
}
.footer__link:hover .footer__link-icon--email {
  fill: var(--background-color);
  stroke: var(--neutral-color);
}
.footer__link:hover .footer__link-icon--twitter {
  fill: var(--neutral-color);
  stroke: var(--neutral-color);
}
</style>
