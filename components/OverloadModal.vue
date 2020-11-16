<template>
  <div
    v-show="showOverloadModal"
    class="modal"
    @click="showOverloadModal = false">
    <div class="modal-box">
      <div class="close">
        <XCircleIcon class="icon" />
      </div>
      <div class="header">
        Nice. I <em>love</em> that you’re going down a rabbit hole on my stuff!
      </div>
      <div class="content">
        Unfortunately, I haven’t yet figured out a clean way to handle opening tons of columns. Close a couple and try again. If you're really liking these notes, send me a DM on <a href="https://twitter.com/ycparak" target="_blank" @click.stop>Twitter</a>, I’d love to hear your feedback and riff on any ideas. 😘
      </div>
    </div>
  </div>
</template>

<script>
import { XCircleIcon } from 'vue-feather-icons'

export default {
  name: 'OverloadModal',
  components: {
    XCircleIcon
  },
  data() {
    return {
      showOverloadModal: false
    }
  },
  mounted() {
    this.$root.$on('popOverloadModal', () => {
      this.showOverloadModal = true
    })
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(12px);
  &-box {
    padding: 10vh 10vw;
    .close {
      position: absolute;
      top: 1.5vw;
      right: 1.5vw;
      cursor: pointer;
    }
    .header {
      font-size: clamp(60px, 6.5vw, 280px);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -2px;
      em { font-style: italic; }
      &:after {
        content: "";
        display: block;
        margin-top: clamp(2vh, 5vh, 7vh);
        margin-bottom: clamp(2vh, 5vh, 7vh);
        width: 60%;
        border-top: 2px solid var(--text-color);
      }
    }
    .content {
      font-size: clamp(28px, 2vw, 100px);
      line-height: 1.3;
      font-weight: 200;
    }
  }
}
a {
  color: var(--note-color);
}
</style>
