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
				var(--space-container)
				[main-start]
					1fr
					[aside-left-start] minmax(functions.toRem(240px), functions.toRem(280px)) [aside-left-end]
					functions.toRem(28px)
					[content-start]
						functions.toRem(28px)
						[body-start] minmax(560px, 600px) [body-end]
						functions.toRem(28px)
					[content-end]
					functions.toRem(28px)
					[aside-right-start] minmax(functions.toRem(240px), functions.toRem(280px)) [aside-right-end]
					1fr
				[main-end]
				var(--space-container)
			[full-end];
		
			// Max width 1316px 
			@media (max-width: 1224px) {
				grid-template-columns:
					[full-start] 
						var(--space-container)
						[main-start]
							1fr
							[content-start]
								functions.toRem(28px)
								[body-start] minmax(auto, 600px) [body-end]
								functions.toRem(28px)
							[content-end]
							1fr
						[main-end]
						var(--space-container)
					[full-end];
			}

			@media (max-width: 688px) {
				grid-template-columns:
					[full-start] 
						var(--space-container)
						[main-start]
							auto
							[content-start body-start] minmax(auto, 600px) [body-end content-end]
							auto
						[main-end]
						var(--space-container)
					[full-end];
			}


		align-items: start;
		margin: 0 auto;
		padding-bottom: functions.toRem(220px);

		hgroup {
			grid-column: body;
			text-align: center;
			padding-top: var(--space-container);
			padding-bottom: functions.toRem(120px);
			h1 {
				@include mixins.interface-type-xl;
				font-weight: 400;
				margin-bottom: functions.toRem(6px);
			}
			time {
				@include mixins.interface-type-sm;
				color: var(--color-text-accent);
				font-weight: 400;
			}
		}
	}
</style>
