<script lang="ts">
	import MetaBack from '$components/interface/MetaBack.svelte';
	import MetaCopy from '$components/interface/MetaCopy.svelte';

	export let data;

	function dateString(date : string) {
		return new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
	}
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
	
		<svelte:component this={data.content} />
	</article>
</main>

<style lang="scss">
	article {
		display: grid;
		grid-template-columns:
			[full-start]
				var(--space-container-v)
				[main-start aside-left-start]
					minmax(functions.toRem(240px), functions.toRem(280px))
					[aside-left-end]
					minmax(24px, 1fr) 
					[bleed-start]
						minmax(24px, 1fr) 
						[content-start]
							functions.toRem(28px)
							[body-start] minmax(560px, 600px) [body-end]
							functions.toRem(28px)
						[content-end]
						minmax(24px, 1fr) 
					[bleed-end]
					minmax(24px, 1fr) 
					[aside-right-start]
					minmax(functions.toRem(240px), functions.toRem(280px))
				[aside-right-end main-end]
				var(--space-container-v)
			[full-end];
		@media (max-width: 1264px) {
			grid-template-columns:
				[full-start]
					var(--space-container-v)
					[main-start]
						minmax(24px, 1fr) 
						[bleed-start]
							minmax(24px, 1fr) 
							[content-start]
								functions.toRem(28px)
								[body-start] minmax(560px, 580px) [body-end]
								functions.toRem(28px)
							[content-end]
							minmax(24px, 1fr) 
						[bleed-end]
						minmax(24px, 1fr) 
					[main-end]
					var(--space-container-v)
				[full-end];
		}
		@media (max-width: 784px) {
			grid-template-columns:
				[full-start]
					var(--space-container-v)
					[main-start bleed-start]
						1fr
						[content-start body-start]
							minmax(auto, 560px)
						[body-end content-end]
						1fr
					[bleed-end main-end]
					var(--space-container-v)
				[full-end];
		}

		@media (max-width: 640px) {
			grid-template-columns:
				[full-start]
					var(--space-container-h)
					[main-start bleed-start]
						1fr
						[content-start body-start]
							minmax(auto, 560px)
						[body-end content-end]
						1fr
					[bleed-end main-end]
					var(--space-container-h)
				[full-end];
		}

		align-items: start;
		margin: 0 auto;
		padding-bottom: functions.toRem(200px);

		* {
			grid-column: body;
		}
		hgroup {
			grid-column: main;
			text-align: center;
			padding-top: calc(var(--space-pos-fixed));
			padding-bottom: functions.toRem(120px);
			h1 {
				@include mixins.interface-type-xl;
				line-height: 1.4;
				font-weight: 400;
				margin-bottom: functions.toRem(6px);
			}
			time {
				display: block;
				@include mixins.interface-type-sm;
				color: var(--color-text-accent);
				font-weight: 400;
				padding: 0;
				margin: 0;
			}
	
			@media (max-width: 640px) {
				padding-bottom: functions.toRem(60px);
			}
		}
	}
</style>
