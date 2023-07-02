<script>
	import '$styles/app.scss';
	import { fly } from 'svelte/transition'
	import { expoIn, expoOut } from 'svelte/easing'

	export let data
</script>

<div class="grid">
	<div class="sidebar">
		<div class="sidebar-container">
			<nav>
				<h1><a class="logo" href="/">Yusuf Parak</a></h1>
				<div class="nav-links">
					<a href="/essays">Essays</a>
					<a href="/design">Design & Craft</a>
					<a href="/projects">Projects</a>
					<a href="/bookmarks">Bookmarks</a>
				</div>
			</nav>
			<footer>
				2023 · Source
				<a class="external-link" target="_blank" href="https://github.com/ycparak/ycparak">code</a>
			</footer>
		</div>
	</div>

	{#key data.pathname}
	<main 
		in:fly={{ x: 600, easing: expoOut, duration: 400, delay: 475 }}
    out:fly={{ x: -600, easing: expoIn, duration: 400 }}>
		<slot />
	</main>
	{/key}
</div>

<style lang="scss">
	.grid {
		display: flex;
		flex-direction: row;
		width: 100%;
	}
	.sidebar {
		position: relative;
		display: block;
		flex-shrink: 0;
		width: 220px;
		z-index: 1;
		background: var(--bg);
		border-right: 1px solid var(--line);

		&-container {
			position: sticky;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-shrink: 1;
			height: 100vh;
			top: 0;
			bottom: 0;
			nav {
				padding: 32px 40px;
				h1 {
					font-size: 18px;
					font-weight: 500;
					line-height: 1;
					color: var(--text-header);
					margin-top: 0;
					margin-bottom: 28px;
					.logo {
						display: block;
						text-decoration: none;
						color: inherit;
					}
				}
	
				.nav-links {
					display: flex;
					flex-direction: column;
					gap: 10px;
					a {
						font-size: 18px;
						line-height: 1;
						color: var(--text-muted);
						text-decoration: none;
						width: fit-content;
						transition: all .2s ease;
						font-weight: 500;
						&::after {
							font-size: 12px;
						}

						&:hover {
							color: var(--text);
						}
					}
				}
			}
	
			footer {
				font-size: 15px;
				padding: 28px 40px;
				font-weight: 500;
				line-height: 1;
				color: var(--text-muted);
				a {
					color: var(--text-muted);
					text-decoration: underline;
					text-decoration-color: var(--line-underline);
					&::after {
						font-size: 10px;
					}
					&:hover {
						color: var(--text);
					}
				}
			}
		}
	}

	main {
		display: block;
		flex-grow: 1;
	}
</style>