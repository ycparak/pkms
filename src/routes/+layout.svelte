<script>
	import '../app.scss';
	import { fly, blur } from 'svelte/transition'
	import { expoIn, expoOut, expoInOut } from 'svelte/easing'

	export let data
</script>

<!-- <div class="grid">
	<div class="sidebar">
		<div class="sidebar-container">
			<nav>
				<h1><a class="logo" href="/" data-sveltekit-noscroll>Yusuf Parak</a></h1>
				<div class="nav-links">
					<a class="external-link" target="_blank" href="mailto:yusuf@ycparak.com">Email</a>
					<a class="external-link" target="_blank" href="https://twitter.com/ycparak">Twitter</a>
					<a class="external-link" target="_blank" href="https://github.com/ycparak">Github</a>
					<a class="external-link" target="_blank" href="https://pinched.io">Pinched.io</a>
					<a class="external-link" href="/about" data-sveltekit-noscroll>About</a>
				</div>
			</nav>
			<footer>
				2023 · Source
				<a class="external-link" target="_blank" href="https://github.com/ycparak/ycparak">code</a>
			</footer>
		</div>
	</div>
</div> -->


	{#key data.pathname}
	<main 
		in:fly={{ x: 700, easing: expoOut, duration: 500, delay: 520 }}
    out:fly={{ x: -700, easing: expoIn, duration: 500 }}>
		<div in:blur={{ easing: expoInOut, duration: 500, delay: 350 }}>
			<slot />
		</div>
	</main>
	{/key}

<style lang="scss">
/* 	.grid {
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
					font-size: 16px;
					font-weight: 550;
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
					gap: 12px;
					a {
						font-size: 16px;
						font-weight: 550;
						line-height: 1;
						color: var(--text-muted);
						text-decoration: none;
						width: fit-content;
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
				font-size: 13px;
				padding: 28px 40px;
				font-weight: 550;
				line-height: 1;
				color: var(--text-muted);
				a {
					color: var(--text-muted);
					text-decoration: underline;
					text-decoration-color: var(--text_muted);
					&::after {
						font-size: 10px;
					}
					&:hover {
						color: var(--text);
					}
				}
			}
		}
	} */

	main {
		display: block;
		flex-grow: 1;
		padding-left: 180px;
		// Media query when smaller than 660px
		@media (max-width: 840px) {
			padding: 0 7vw;
		}
	}
</style>