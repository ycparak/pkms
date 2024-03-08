<script lang="ts">
	export let isPrototype = false;
</script>

<section class:preview={!isPrototype}>
	<div class="bg"></div>
</section>

<style lang="scss">
  section {
		position: relative;
    background-color: var(--color-background);
		background: url('/images/radial-menu.webp') no-repeat center center;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    margin: 0 auto;

		&.preview {
			position: relative;
			width: 100%;
			height: 90%;
			border-radius: 20px;
			overflow: hidden;
			box-shadow: var(--shadow-lg);
		}
		.bg {
			width: 100%;
			height: 100%;
			background: radial-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%);
		}
  }
</style>