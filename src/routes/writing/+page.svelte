<script lang="ts">
	import * as config from '$lib/config'

	export let data
  const posts = data.posts;

	// Date in format mmmm yy
	function dateString(date : string) {
		return new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short' });
	}
</script>

<svelte:head>
	<title>Writing | {config.title}</title>
</svelte:head>

<main>
	<header>
	</header>
	<section>
		{#each posts as post}
			<a href="/writing/{post.slug}" class="title">
				<div class="content">
					<p>{post.title}</p>
					<div class="line"></div>
					<time>{dateString(post.date)}</time>
				</div>
			</a>
		{/each}
	</section>
</main>

<style lang="scss">

	section {
		display: grid;
		grid-template-columns: var(--space-container-h) 1fr minmax(auto, 616px) 1fr var(--space-container-h);
		padding-top: calc(120px + 40px + var(--space-pos-fixed) - 16px);
		width: 100%;
		a {
			grid-column: 3 / -3;
			display: block;
			width: 100%;
			padding: toRem(12px) toRem(8px);
			margin: toRem(4px) 0;

			.content {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				gap: toRem(8px);
				height: fit-content;
				p {
					@include interface-type-lg;
					font-weight: 400;
					margin: 0;
					padding: 0;
					color: var(--color-text-body);
					transition: color .3s ease;
				}
				.line {
					position: relative;
					flex: 1 1 0%;
					height: 1px;
					background-color: var(--color-border);
					align-self: flex-end;
				}

				time {
					display: block;
					@include interface-type-sm;
					color: var(--color-text-accent);
					font-weight: 400;
					padding: 0;
					margin: 0;
				}
			}

			&:hover {
				p {
					color: var(--color-text-accent);
				}
			}

			&:focus-visible {
				outline: none;
				box-shadow: var(--shadow-focus);
			}
		}

		@media (max-width: 640px) {
			padding-top: toRem(60px);
		}

		@media (max-width: 480px) {
			a {
				padding: toRem(8px);
				.content {
					flex-direction: column;
					align-items: flex-start;
					gap: toRem(6px);
					p {
						line-height: 1.4;
					}
					.line {
						display: none;
					}
				}
			}
		}
	}
</style>
