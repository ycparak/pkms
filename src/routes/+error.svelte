<script>
	import { page } from '$app/stores'
</script>

<div class="error">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>

<style lang="scss">
	.error {
		height: 100%;
		display: grid;
		place-content: center;
		h1 {
			@include interface-type-xl;
			font-weight: 400;
		}
	}
</style>
