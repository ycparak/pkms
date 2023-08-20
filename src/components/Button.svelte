<script lang="ts">
  export let variant = 'primary';
</script>

<button class:primary={variant === 'primary'}>
  <div class="inner"><span><slot></slot></span></div>
</button>

<style lang="scss">
  button {
    all: unset;
    cursor: pointer;
    height: 30px;
    border-radius: 30px;
    font-size: 14.1px;
    text-transform: lowercase;
    display: flex;
    align-items: center;
    justify-content: center;
    .inner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      height: 100%;
      padding: 0 16px;
      width: 100%;
      border-radius: 30px;
    }
    span {
      transform: translateY(-1.75px);
    }
  }

  .primary {
    .inner {
      border: 3px solid #ED6A27;
    }
    overflow: hidden;
    background: #FF4C0D;
    box-shadow: 0px 0px 0px 0.75px #68290D, 6px 12px 25px 0px rgba(0, 0, 0, 0.225) inset, -0.4000000059604645px -0.4000000059604645px 0.5px 3px rgba(255, 255, 255, 0.45) inset, -12px -6px 25px 0px rgba(255, 255, 255, 0.3) inset;
    // box-shadow: rgba(0, 0, 0, 0.004) 0px 0.783403px 0.783403px 0px, rgba(0, 0, 0, 0.01) 0px 1.92107px 1.92107px 0px, rgba(0, 0, 0, 0.024) 0px 3.63429px 3.63429px 0px, rgba(0, 0, 0, 0.04) 0px 6.35486px 6.35486px 0px, rgba(0, 0, 0, 0.07) 0px 11.0474px 11.0474px 0px, rgba(0, 0, 0, 0.125) 0px 20.2497px 20.2497px 0px, rgba(0, 0, 0, 0.25) 0px 40px 40px 0px;
  }
</style>