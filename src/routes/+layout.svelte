<script>
	import '../app.scss';
</script>

<div class="grid">
	<div class="sidebar">
		<div class="sidebar-container">
			<nav>
				<h1>Yusuf Parak</h1>
				<div class="nav-links">
					<a class="external-link" target="_blank" href="mailto:yusuf@ycparak.com">Email</a>
					<a class="external-link" target="_blank" href="https://twitter.com/ycparak">Twitter</a>
					<a class="external-link" target="_blank" href="https://github.com/ycparak">Github</a>
					<a class="external-link" target="_blank" href="https://pinched.io">Pinched.io</a>
				</div>
			</nav>
			<footer>
				2023 · Source
				<a class="external-link" target="_blank" href="https://github.com/ycparak/ycparak">code</a>
			</footer>
		</div>
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
					font-size: 15px;
					font-weight: 550;
					line-height: 1;
					color: var(--text-header);
					margin-bottom: 40px;
					margin-top: 0;
				}
	
				.nav-links {
					display: flex;
					flex-direction: column;
					gap: 16px;
					a {
						font-size: 15px;
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
	}

	main {
		display: block;
		flex-grow: 1;
		padding: 40px;
		min-height: 200vh;
	}
</style>