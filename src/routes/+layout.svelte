<script>
	import '../app.scss';
</script>

<div class="grid">
	<div class="sidebar">
		<nav class="sidebar-nav">
			Yusuf Parak
		</nav>
	</div>
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.grid {
		display: flex;
		flex-direction: row;
		width: 100%;
	}
	.sidebar {
		display: block;
		flex-shrink: 0;
		width: 220px;
		padding: 40px;
		border-right: 1px solid var(--line);
		&-nav {
			position: sticky;
			top: 40px;
		}
	}

	main {
		display: block;
		flex-grow: 1;
		padding: 40px;
		min-height: 200vh;
	}
</style>