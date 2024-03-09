<script lang="ts">
	import MetaBack from '$components/interface/MetaBack.svelte';
	import MetaCopy from '$components/interface/MetaCopy.svelte';
	import { onMount } from 'svelte';

	export let data;

	function dateString(date : string) {
		return new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
	}

	onMount(() => {
		const asideLinks = document.querySelectorAll('.aside-link:not(.reverse-link)');
		const reverseLinks = document.querySelectorAll('.aside-link.reverse-link');

		asideLinks.forEach((link) => {
			link.addEventListener('mouseenter', (e) => {
				const id = (e?.target as HTMLElement)?.getAttribute('href')?.replace('#', '');
				const target = document.getElementById(id || '');
				target?.classList.add('active');
			});

			link.addEventListener('mouseleave', (e) => {
				const id = (e?.target as HTMLElement)?.getAttribute('href')?.replace('#', '');
				const target = document.getElementById(id || '');
				target?.classList.remove('active');
			});
		});

		reverseLinks.forEach((link) => {
			link.addEventListener('mouseenter', (e) => {
				const id = (e?.target as HTMLElement)?.getAttribute('href')?.replace('#', '');
				const asideId = (e?.target as HTMLElement)?.getAttribute('href')?.split('-')[2]
				const target = document.getElementById(id || '');
				const asideTarget = document.getElementById(asideId || '');
				target?.classList.add('active');
				asideTarget?.classList.add('active');
			});

			link.addEventListener('mouseleave', (e) => {
				const id = (e?.target as HTMLElement)?.getAttribute('href')?.replace('#', '');
				const asideId = (e?.target as HTMLElement)?.getAttribute('href')?.split('-')[2];
				const target = document.getElementById(id || '');
				const asideTarget = document.getElementById(asideId || '');
				target?.classList.remove('active');
				asideTarget?.classList.remove('active');
			});
		});
	});
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<MetaBack />
<MetaCopy />

<main>
	<article>
		<hgroup>
			<h1>{data.meta.title}</h1>
			<time>{dateString(data.meta.date)}</time>
		</hgroup>
		
		<div class="grid">
			<svelte:component this={data.content} />
		</div>
	</article>
	
	<div class="fader"></div>
</main>

<style lang="scss">
	main {
		padding-bottom: toRem(120px);

		.fader {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: toRem(120px);
			background-color: transparent;
			background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--color-background) 100%);
			pointer-events: none;
		}
	}
	hgroup {
		grid-column: main;
		text-align: center;
		padding-top: calc(var(--space-pos-fixed));
		padding-bottom: toRem(120px);
		h1 {
			@include interface-type-xl;
			line-height: 1.4;
			font-weight: 400;
			margin-bottom: toRem(6px);
		}
		time {
			@include interface-type-sm;
			display: block;
			color: var(--color-text-accent);
			font-weight: 400;
			padding: 0;
			margin: 0;
		}

		@media (max-width: 640px) {
			padding-bottom: toRem(60px);
		}
	}
	.grid {
		display: grid;
		align-items: start;
		margin: 0 auto;	

		grid-template-columns:
			[full-start]
				var(--space-container-v)
				[main-start]
					1fr
					[aside-left-start] minmax(toRem(240px), toRem(280px)) [aside-left-end]
					toRem(28px)
					[content-start]
						toRem(28px)
						[body-start] minmax(560px, 600px) [body-end]
						toRem(28px)
					[content-end]
					toRem(28px)
					[aside-right-start] minmax(toRem(240px), toRem(280px)) [aside-right-end]
					1fr
				[main-end]
				var(--space-container-v)
			[full-end];
		@media (max-width: 1224px) {
			grid-template-columns:
				[full-start]
					var(--space-container-v)
					[main-start]
						1fr
						[content-start]
							toRem(28px)
							[body-start] minmax(560px, 580px) [body-end]
							toRem(28px)
						[content-end]
						1fr
					[main-end]
					var(--space-container-v)
				[full-end];
		}
		@media (max-width: 688px) {
			grid-template-columns:
				[full-start]
					var(--space-container-v)
					[main-start]
						1fr
						[content-start body-start]
							minmax(auto, 560px)
						[body-end content-end]
						1fr
					[main-end]
					var(--space-container-v)
				[full-end];
		}
		@media (max-width: 640px) {
			grid-template-columns:
				[full-start]
					var(--space-container-h)
					[main-start]
						1fr
						[content-start body-start]
							minmax(auto, 560px)
						[body-end content-end]
						1fr
					[main-end]
					var(--space-container-h)
				[full-end];
		}
	}
</style>
