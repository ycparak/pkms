<template>
  <div class="index">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
  </div>
</template>

<style lang="scss" scoped>
  .ticker {
    position: relative;
    overflow: hidden;
    box-sizing: content-box;
    border-bottom: 2px solid #F3F0D1;
    border-left: 2px solid #F3F0D1;
    border-right: 2px solid #F3F0D1;
    min-height: 40px;
    display: flex;
    align-items: center;
    width: calc(100%);
    margin: 0 auto;
    backdrop-filter: blur(40px);
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    .ticker-item {
      width: max-content;
      max-width: max-content;
      height: 100%;
      line-height: 40px;
      margin: 0;
      text-align: center;
      animation: scroll-left 180s linear infinite;
      font-size: 16px;
      font-family: Avenir;
      text-transform: uppercase;
      color: #fff !important;
      cursor: pointer;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }

.index {
  position: relative;
  background: orange;
  border: 2px solid red;
  height: 300vh;
  margin: 0 auto;
  margin-top: 60vh;
  z-index: 299;
  display: grid;
  width: calc(100vw - 80px);
  display: grid;
  grid-template-columns: repeat(4, 1fr 1px) 1fr
}
.block {
}
.line {
  position: relative;
  height: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
    animation: drop 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }
  &.line-1 {
    grid-column: 2;
    &::after {
      animation-delay: 2s;
    }
  }
  &.line-2 {
    grid-column: 4;
    &::after {
      animation-delay: 3s;
    }
  }
  &.line-3 {
    grid-column: 6;
    &::after {
      animation-delay: 2.5s;
    }
  }
}
@keyframes drop {
  0% {
    top: 0%;
  }
  100% {
    top: 110%;
  }
}
</style>
